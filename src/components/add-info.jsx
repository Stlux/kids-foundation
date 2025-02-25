function AddInfo() {
    return ( 
        <>
            <section className="additional-info">
                <div className="container">
                    <h1 className="header"><span className="important">Ease the burden</span> for kids with cancer and their families</h1>
                    <div className="card-holder">
                        <div className="card">
                            <div className="icon"><i className="bi bi-house-fill"></i></div>
                            <div className="heading">Housing</div>
                            <div className="text">Keep families in their homes with rent, mortgage, and utility payments.</div>
                        </div>

                        <div className="card">
                            <div className="icon"><i className="bi bi-cart-fill"></i></div>
                            <div className="heading">Food</div>
                            <div className="text">Provide families with gift cards for groceries and restaurants.</div>
                        </div>

                        <div className="card">
                            <div className="icon"><i className="bi bi-car-front-fill"></i></div>
                            <div className="heading">Transportation</div>
                            <div className="text">Provide families with gas cards and car payments.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default AddInfo;