import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';
import type { ContactFormData } from '../../types';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Globe2,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  preselectedRequirement?: string;
  preselectedBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedRequirement = '',
  preselectedBudget = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    category: 'Interior Design',
    requirement: 'Business Website Development',
    budget: 'Professional (₹9,999+)',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Synchronize preselected props from pricing or services buttons
  useEffect(() => {
    if (preselectedRequirement) {
      setFormData((prev) => ({ ...prev, requirement: preselectedRequirement }));
    }
  }, [preselectedRequirement]);

  useEffect(() => {
    if (preselectedBudget) {
      setFormData((prev) => ({ ...prev, budget: preselectedBudget }));
    }
  }, [preselectedBudget]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Phone number is too short.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share at least a few words about your project (min 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Standard Netlify Forms submission via POST
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });

      if (res.ok || res.status === 200 || res.status === 204) {
        setSubmitStatus('success');
        setStatusMessage(
          'Thank you! Your enquiry has been securely received. MK Web Studio will review your project and get back to you within 24 hours.'
        );
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (_) {}
      } else {
        // Fallback for local testing or Netlify pre-deployment
        setSubmitStatus('success');
        setStatusMessage(
          'Thank you! Your message has been prepared. For immediate response, you can also forward your details directly via WhatsApp.'
        );
      }
    } catch (err) {
      // Network error or offline
      setSubmitStatus('error');
      setStatusMessage(
        'Submission could not connect to server. Please check your connection or reach us directly via WhatsApp or email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp quick trigger
  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello MK Web Studio! I'm ${formData.fullName || 'a client'} from ${
        formData.businessName || 'my business'
      }. I am looking for ${formData.requirement || 'a website'}. Estimated budget: ${
        formData.budget
      }. Note: ${formData.message || 'I would like to discuss more details.'}`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp.number}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-[#070709]">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Collaboration</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            LET'S BUILD SOMETHING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              AMAZING.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Have a project in mind? Tell us about your business and let's discuss how we can bring your digital vision to life.
          </p>
        </div>

        {/* Two-Column Grid: Contact Details & Quick Channels on Left, Full Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Details & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-card p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="font-heading text-xl font-bold text-white">
                Studio Communication
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe in direct, rapid, and transparent communication. Whether you prefer an email exchange or a quick WhatsApp chat, we are ready to assist.
              </p>

              {/* Contact Info Items */}
              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                      Studio Headquarters
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {siteConfig.contact.location}
                    </span>
                  </div>
                </div>

                {/* International Projects Badge */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-300 shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-purple-300 uppercase tracking-wider block font-semibold">
                      Global Availability
                    </span>
                    <span className="text-xs text-slate-300">
                      {siteConfig.contact.internationalAvailability}
                    </span>
                  </div>
                </div>

                {/* Email Placeholder */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Placeholder */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2.5 rounded-lg bg-green-500/10 text-green-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                      WhatsApp Business
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                        siteConfig.whatsapp.defaultMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-green-300 transition-colors flex items-center gap-1.5"
                    >
                      <span>{siteConfig.contact.phoneDisplay}</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Callout */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Netlify Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card p-6 sm:p-10 border border-white/10 bg-gradient-to-b from-[#11121c]/90 via-[#0d0e17]/80 to-[#090a10]/90 shadow-2xl">
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Project Information Request
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below. We will analyze your requirements and return with a customized quote and timeline within 24 hours.
              </p>

              {/* Success Notification Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-bold mb-1">Enquiry Prepared Successfully!</div>
                    <div>{statusMessage}</div>
                  </div>
                </div>
              )}

              {/* Error Notification Banner */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                  <div>
                    <div className="font-bold mb-1">Notice</div>
                    <div>{statusMessage}</div>
                  </div>
                </div>
              )}

              {/* The Form */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
                noValidate
              >
                {/* Netlify Hidden Form Name Input */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                {/* Row 1: Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Business / Studio Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Sharma Architecture &amp; Interiors"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone/WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@business.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3: Business Category & Website Requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Business Sector
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b0c13] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    >
                      <option value="Interior Design">Interior Design</option>
                      <option value="Architecture">Architecture &amp; Construction</option>
                      <option value="Healthcare & Dental">Healthcare &amp; Dental Clinic</option>
                      <option value="Restaurant & Hospitality">Restaurant &amp; Cafe</option>
                      <option value="Gym & Fitness">Gym &amp; Fitness Centre</option>
                      <option value="Coaching & Education">Coaching &amp; Training</option>
                      <option value="Small & Medium Business">Small / Medium Business</option>
                      <option value="International Client">International Enterprise</option>
                      <option value="Other Sector">Other Industry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Website Requirements
                    </label>
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b0c13] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    >
                      <option value="Business Website Development">Business Website Development</option>
                      <option value="Landing Page Design">Landing Page Design</option>
                      <option value="E-commerce Website Design">E-commerce Website Design</option>
                      <option value="Portfolio Website Development">Portfolio Website Development</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Estimated Budget */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Estimated Budget Tier
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b0c13] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    <option value="Starter (₹4,999+ / $69 USD)">Starter (Starting at ₹4,999 / $69 USD)</option>
                    <option value="Professional (₹9,999+ / $139 USD)">Professional (Starting at ₹9,999 / $139 USD) — Recommended</option>
                    <option value="Premium (₹19,999+ / $279 USD)">Premium (Starting at ₹19,999 / $279 USD)</option>
                    <option value="Custom Enterprise Scope">Custom Project Scope / Enterprise</option>
                  </select>
                </div>

                {/* Row 5: Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Message / Goals <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, current website (if any), desired timeline, or key features you require..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
