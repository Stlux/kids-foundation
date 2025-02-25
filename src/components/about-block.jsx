import img from "../assets/cdf4.png";
import img2 from "../assets/rk4.png";
function AboutBlock() {
    return ( 
        <>
            <section className="about-block" id="who-we-are">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="about-img-wrapper">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <h2>
                                It's not enough to save the day! We also have to change the world!
                            </h2>
                            <p class="main-paragraph">
                                For over 5 years, The Wolfpack Cancer Foundation consists of a dedicated team collaborating with like-minded individuals and organisations to fund world-class research, provide top-tier clinical care, and offer quality family support programs.
                            </p>
                            <p>
                                Our mission is to help kids with cancer and their families with financial and emotional support. We understand and we know how to help.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-block about-block-updated">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <h2>
                                No one plans for cancer
                            </h2>
                            <p className="main-paragraph">
                                Every time a family hears the words "your child has cancer," they are forced to make hard decisions. They ask themselves: "Do I keep working while having to take large amounts of time off for treatments and hospital stays? If I quit my job to take care of them will we survive financially?"
                            </p>
                            <p>
                                Medical bills can be delayed, but rent is due, bills still come, and food is a necessity. Families facing childhood cancer need help with everyday expenses. Pinky Swear Foundation provides financial support for housing, food, and transportation so families can focus on their child.
                            </p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="about-img-wrapper">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default AboutBlock;