import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | submitted | error
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    // Simulate authentic asynchronous dispatch with honest UI feedback
    setTimeout(() => {
      setStatus('submitted');
      setFeedbackMessage(
        `Thank you, ${formData.name}! Your demonstration message was captured. Since this frontend demo connects to a direct client fallback, you can also email me directly at ${profile.email}.`
      );
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
    setErrors({});
  };

  return (
    <div className="w-full max-w-xl mx-auto text-left">
      {status === 'submitted' ? (
        <div className="bento-card p-8 text-center animate-fade-in border-accent/40 bg-accent/5">
          <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Message Recorded!</h3>
          <p className="text-muted text-sm leading-relaxed mb-6">
            {feedbackMessage}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(
                formData.subject || 'Portfolio Inquiry'
              )}&body=${encodeURIComponent(
                `Hi Sai Ganesh,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
              )}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white font-medium hover:bg-accent-600 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Open in Email Client</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full border border-theme text-muted hover:text-accent hover:border-accent transition-colors text-sm"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-muted mb-1.5">
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={`w-full px-4 py-2.5 rounded-xl bg-[rgb(var(--color-bg))] border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                  errors.name
                    ? 'border-red-500 text-red-500'
                    : 'border-theme focus:border-accent text-zinc-800 dark:text-zinc-100'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-muted mb-1.5">
                Your Email <span className="text-accent">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className={`w-full px-4 py-2.5 rounded-xl bg-[rgb(var(--color-bg))] border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                  errors.email
                    ? 'border-red-500 text-red-500'
                    : 'border-theme focus:border-accent text-zinc-800 dark:text-zinc-100'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="contact-subject" className="block text-xs font-medium text-muted mb-1.5">
              Subject <span className="text-accent">*</span>
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Collaboration or opportunity discussion"
              className={`w-full px-4 py-2.5 rounded-xl bg-[rgb(var(--color-bg))] border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                errors.subject
                  ? 'border-red-500 text-red-500'
                  : 'border-theme focus:border-accent text-zinc-800 dark:text-zinc-100'
              }`}
            />
            {errors.subject && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-medium text-muted mb-1.5">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Sai Ganesh, I came across your portfolio and wanted to discuss..."
              className={`w-full px-4 py-2.5 rounded-xl bg-[rgb(var(--color-bg))] border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                errors.message
                  ? 'border-red-500 text-red-500'
                  : 'border-theme focus:border-accent text-zinc-800 dark:text-zinc-100'
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-600 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {status === 'submitting' ? (
              <span>Sending Message...</span>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
