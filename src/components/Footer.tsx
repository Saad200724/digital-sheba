import { motion } from 'framer-motion';
import Logo from './Logo';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Send, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  products: [
    { label: 'Domain Registration', href: '#domains' },
    { label: 'Web Hosting', href: '#hosting' },
    { label: 'Digital Subscriptions', href: '#subscriptions' },
    { label: 'AI Tools', href: '#ai-hub' },
    { label: 'Software Licenses', href: '#software' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press Kit', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Refund Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Send, href: '#', label: 'Telegram' },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl mb-16 text-center md:text-left"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="text-foreground">Stay Updated with </span>
                <span className="gradient-text">Exclusive Deals</span>
              </h3>
              <p className="text-muted-foreground">
                Get notified about new products, discounts, and digital trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="btn-premium text-white px-6">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Bangladesh's most trusted digital marketplace for domains, hosting, 
              subscriptions, and software licenses.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:support@digitalseba.com.bd" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                support@digitalseba.com.bd
              </a>
              <a href="tel:+8801234567890" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +880 1234-567890
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} DigitalSeba. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass-card hover:bg-primary/10 transition-colors"
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>Payments:</span>
            <span className="px-2 py-1 bg-muted/50 rounded">bKash</span>
            <span className="px-2 py-1 bg-muted/50 rounded">Nagad</span>
            <span className="px-2 py-1 bg-muted/50 rounded">Card</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
