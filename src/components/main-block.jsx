import kid from "../assets/kid.png";
import logo from "../assets/logo.png";

function MainBlock() {
    return ( 
        <>
            <section className="main-block" id="main">
                <div className="container">
                    <nav>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>

                        <div className="links">
                            <a href="#main" className="link-header">MAIN</a>
                            <a href="#who-we-are" className="link-header">WHO WE ARE</a>
                            <a href="#help" className="link-header">HELP PROGRAMS</a>
                            <a href="#contacts" className="link-header">CONTACT US</a>
                        </div>
                        
                        <a href="https://animalfoundation.com/donate" target="_blank">
                            <button className="donate-button">
                                DONATE
                            </button>
                        </a>

                    </nav>

                    <div className="main-block-row row">
                        <div className="col-12 col-md-12 col-lg-6">
                        
                            <h1 className="main-heading">Childhood Cancer Changes Everything</h1>
                        
                            <p className="description">
                                The Wolfpack Cancer Foundation exists to raise and invest funds to develop new and better cancer treatments and support for children and their families. Together, we can help kids with cancer and their families with financial and emotional support.
                            </p>

                            <a href="https://animalfoundation.com/donate" target="_blank">
                                <button className="donate-button">
                                    DONATE
                                </button>
                            </a>

                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="main-block-image">
                                <img src={kid} alt="kid" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default MainBlock;