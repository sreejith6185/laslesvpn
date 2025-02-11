import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'; // Owl Carousel styles
import 'owl.carousel/dist/assets/owl.theme.default.min.css'; // Theme styles
import Avatar1 from '../assets/avatar1.png';
import Avatar2 from '../assets/avatar2.png';
import Avatar3 from '../assets/avatar3.png';

const TestimonialSlider = () =>{
    // Array of Testimonial objects
    const testimonials = [
        {
            proPic : Avatar1,
            author : 'Viezh Robert',
            place : 'Warsaw, Poland',
            rating : 4.5,
            text : 'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.'
        },
        {
            proPic : Avatar2,
            author : 'Yessica Christy',
            place : 'Shanxi, China',
            rating : 4.5,
            text : 'I like it because I like to travel far and still can connect with high speed.'
        },
        {
            proPic : Avatar3,
            author : 'Ruthy Lina',
            place : 'Brisbane, Australia',
            rating : 4.5,
            text : 'This is very unusual for my business that currently requires a virtual private network that has high security.'
        }
    ];
    
    return (
        <section className="grey-bg py-5" id='testimonialsSection'>
            <div className="container mb-5">
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
            <div className="slider-wrp container">
                <OwlCarousel 
                    className="testimonials owl-carousel owl-theme" 
                    loop={true} 
                    margin={25} 
                    nav={true}
                    autoplay={true}
                    autoplayTimeout={3000} 
                    autoplayHoverPause={true}
                    responsive = {{
                        0:{items:1},
                        576:{items:2},
                        991:{items:3}
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div className="item h-100" key={index}>
                            <div className='border rounded bg-white p-4 h-100'>
                                <div className='d-flex align-items-center justify-content-between mb-3'>
                                    <div className='d-flex align-items-center'>
                                        <span className='img-wrp'>
                                            <img 
                                                src={testimonial.proPic} 
                                                alt={testimonial.author} 
                                            />
                                        </span>
                                        <div className='ms-2'>
                                            <h6 className='primary-text mb-0'>{testimonial.author}</h6>
                                            <span className='small lh-1'>{testimonial.place}</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        {testimonial.rating}
                                        <span className='text-warning'>*</span>
                                    </div>
                                </div>
                                <p>
                                    <blockquote>{testimonial.text}</blockquote>                                    
                                </p>
                            </div>
                        </div>
                    ))}    
                </OwlCarousel>
            </div>
        </section>
    )
}


export default TestimonialSlider;