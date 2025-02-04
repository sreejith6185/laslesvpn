import React from 'react'

const Testimonials = () => {
  return (
    <section className="grey-bg py-5" id='testimonialsSection'>
        <div className="container-xl mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2 className="text-center">
                        Trusted by Thousands of <br/> Happy Customer
                    </h2>
                    <p className="text-center">
                        These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
                    </p>
                </div>
            </div>
        </div>
        <div className="slider-wrp">
            <div className="testimonials owl-carousel owl-theme">
                <div className="item"><h4>1</h4></div>
                <div className="item"><h4>2</h4></div>
                <div className="item"><h4>3</h4></div>
                <div className="item"><h4>4</h4></div>
                <div className="item"><h4>5</h4></div>
                <div className="item"><h4>6</h4></div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials