import cat from "../assets/cat.png";
import cat2 from "../assets/afe5.jpg";

function GiveAGift() {
    return (
        <>
            <section className="give-a-gift">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="left-wrapper">
                                <h2>
                                    <span className="important">1 in 5 children</span> diagnosed with cancer do not survive
                                </h2>
                                <p>
                                    Our goal is to change that!
                                </p>
                                <div className="img-bg">
                                    <img src={cat2} alt="cat" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-8">
                    
                                <div className="gift-wrapper">

                                    <div className="row">
                                    
                                        <div className="col-12 col-md-12 col-lg-6 text-part">
                                            <h2>
                                                Provide reliable support to families
                                            </h2>
                                            <p>
                                                Your donation provides food and medical care. Make a difference today!
                                            </p>
                                            
                                            <a href="https://animalfoundation.com/donate" target="_blank">
                                                <button className="donate-button">
                                                    BECOME A DONATOR
                                                </button>
                                            </a>
                                        </div>
                                        
                                        <div className="col-12 col-md-12 col-lg-6">
                                            <div className="gift-img-wrapper">
                                                <img src={cat} alt="cat" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    );
}

export default GiveAGift;