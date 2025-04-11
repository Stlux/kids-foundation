import logo from "../assets/logo.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s1.avif";
import s3 from "../assets/s2.avif";
import s4 from "../assets/s3.avif";
import dan from "../assets/dan.jpg";

function Footer() {
    return ( 
        <>
            <footer>
                <div className="row-footer">
                    <div className="footer-up">
                        <div className="container">
                            <center>
                                <div className="logo">
                                    <img src={logo} alt="" />
                                </div>
                                <h2>
                                    We will do everything to help children survive and thrive.
                                </h2>
                                <p>
                                    The WPA Foundation, a 501(c)(3) nonprofit organization that helps children fight cancer and offers financial and emotional support programs.
                                </p>
                                <div className="star-row">
                                    <img src={s1} alt="" />
                                    <img src={s2} alt="" />
                                    <img src={s3} alt="" />
                                    <img src={s4} alt="" />
                                </div>
                            </center>
                        </div>
                    </div>
                    <div className="image-special-p">
                        <img src={dan} alt="" />
                        <p>
                            Founder and CEO<br />Daniel Osterreich
                        </p>
                    </div>
                </div>
                <hr />
                <div className="footer-down">
                    <div className="container flex-box">
                        <div className="copyright">
                            © 2020 WPC Foundation | All rights reserved
                        </div>
                        <div className="copyright">
                            <a href="https://wolfpack-entertainment.net/">Wolfpack-entertainment.net</a>
                        </div>
                    </div>
                </div>
                {/*}
                <div className="image-special">
                    <img src={dan} alt="" />
                    <p>
                        Founder and CEO<br />Daniel Osterreich
                    </p>
                </div>
                {*/}
            </footer>
        </>
     );
}

export default Footer;