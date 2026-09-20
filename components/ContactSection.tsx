import { Icon } from "./Icon";

export function ContactSection() {
  return <section className="contact shell" id="contact"><div><p className="eyebrow">/ Start a conversation</p><h2>Your business deserves<br /><em>better backup.</em></h2></div><div className="contact-side"><p>Tell us where you want to go. We&apos;ll help you build the secure, reliable technology foundation to get there.</p><a className="button button-light" href="mailto:info@xbuctech.com">Talk to an IT consultant <Icon name="arrow" size={16} /></a><div className="contact-details"><a href="mailto:info@xbuctech.com">info@xbuctech.com</a><a href="tel:+15125846924">512-584-6924</a><span>14205 N Mopac Expy #500<br />Austin, TX 78731</span></div></div></section>;
}
