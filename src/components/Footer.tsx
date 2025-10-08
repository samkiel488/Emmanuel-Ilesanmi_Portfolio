const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
        <p className="mb-4">© 2025 Emmanuel Ilesanmi</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:emmanuelilesanmi36@gmail.com" className="hover:text-accent transition-colors duration-300">📧 Email</a>
          <a href="https://linkedin.com/in/emmanuelilesanmi" className="hover:text-accent transition-colors duration-300">🔗 LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
