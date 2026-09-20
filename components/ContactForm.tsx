const inquiryTypes = [
  "Managed IT Support",
  "Cybersecurity Consultation",
  "Cloud & Network Services",
  "Compliance & Security",
  "Software Testing & QA",
  "General Inquiry",
  "Partnership / Business Opportunity",
];

type ContactFormProps = { selectedService?: string };

export function ContactForm({ selectedService }: ContactFormProps) {
  const endpoint = process.env.NEXT_PUBLIC_PROFORMS_ENDPOINT || "https://proforms.top";
  return <form className="contact-form" action={endpoint} method="post"><input type="hidden" name="source" value="xbuctech.com" /><input type="hidden" name="_subject" value="New X-BUC Tech consultation request" /><div className="form-row"><label>Name<input required name="name" placeholder="Your name" type="text" /></label><label>Email address<input required name="email" placeholder="you@company.com" type="email" /></label></div><div className="form-row"><label>Company / organization<input name="company" placeholder="Company name" type="text" /></label><label>Job title<input name="job_title" placeholder="Your role" type="text" /></label></div><div className="form-row"><label>Phone number<input name="phone" placeholder="512-584-6924" type="tel" /></label><label>Subject / inquiry type<select defaultValue={selectedService || "General Inquiry"} name="inquiry_type"><option disabled value="">Select a reason</option>{inquiryTypes.map((type) => <option key={type}>{type}</option>)}</select></label></div><label>Message<textarea required name="message" placeholder="Tell us what you are working through..." rows={6} /></label><button className="button button-dark" type="submit">Start the conversation <span>↗</span></button><p className="form-note">Your message is routed securely through ProForms. We&apos;ll get back to you as soon as possible.</p></form>;
}
