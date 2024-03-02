const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <p>&copy; {date.getFullYear()}. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
