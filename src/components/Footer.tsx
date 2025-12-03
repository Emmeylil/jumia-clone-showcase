import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-jumia-black text-primary-foreground">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">K</span>
              </div>
              <span className="font-display font-bold text-xl">
                Klump <span className="text-primary">× Jumia</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Africa's leading Buy Now, Pay Later service powered by Klump and Jumia. Shop for what you love and pay over time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Pay in 4</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Monthly Plans</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">For Merchants</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Partner Stores</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@useklump.com</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Klump × Jumia. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
