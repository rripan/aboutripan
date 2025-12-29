import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">Built with React & Tailwind</span>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Chen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
