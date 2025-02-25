import cd from "../assets/cancer.webp"

function Contacts() {
    return ( 
        <>
            <section className="contacts" id="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-8">
                            <div className="gift-wrapper">
                                <div className="form-wrapper">
                                    <h2>
                                        Have a question? Contact us here! We will get back to you shortly.
                                    </h2>
                                    <form action="">
                                        <div className="flex-row">
                                            <input type="text" name="name" placeholder="Name" required />
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>

                                        <div className="single">
                                            <input type="text" placeholder="Phone number" name="phone" />
                                        </div>

                                        <textarea name="comment" id="comment" placeholder="Comment"></textarea>

                                        <button className="donate-button">SEND</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="left-wrapper left-wrapper-updated">
                                <h2>
                                    WAYS TO GIVE
                                </h2>
                                <p>
                                    Our support goes straight to work saving lives. Become a WPC today <span className="important">to help provide direct financial support</span> families facing childhood cancer can count on year-round.
                                </p>
                                <a href="https://animalfoundation.com/donate" target="_blank">
                                    <button className="donate-button mt-20">BECOME A DONATOR</button>
                                </a>
                                <div className="img-wrapper">
                                    <img src={cd} alt="" />
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
     );
}

export default Contacts;