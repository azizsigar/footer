import React from "react";
import FooterCard from "./FooterCard";
const Footer = () => {
  return (
    <footer className="footer">
    <img src="../img/footerBg.png" alt="footer"/>
        <div className="footerDesc">
        <h1>icra ve iflas hukuk</h1>
      <p>avukatimol Pro uyelik ile internetin gucunden 1</p>
        </div>
     <div className="footerElements">
      <FooterCard />
      <FooterCard />
      <FooterCard />
      <FooterCard />
     </div>
    </footer>
  );
};

export default Footer;
// Your footer content goes here
