const Footer = () => {
  var today = new Date();
  return (
    <footer className="container">
      <div>
        <div>
          <h5>(Temiloluwa Onaleye) Team Member Allocation App - {today.getFullYear()}</h5>
        </div>
      </div>

    </footer>
  );
}
export default Footer;