import React from 'react'
import priceCardImg from '../assets/plan-icon.png'

const Pricecard = (props) => {
const{plan}=props;
  return (
    <div className="col-md-4 h-100">
        <div className="border border-2 rounded-3 p-lg-5 p-4 pb-3 d-flex flex-column justify-content-between">
            <div>
                <div className="text-center mb-4">
                    <img src={priceCardImg} className="img-fluid mb-4" alt=""/>
                    <h6 className="fw-medium">{plan.title} Plan</h6>
                </div>
                <ul className="list-wrp list-type2 mb-5">
                    {plan.features.map((feature, index)=>{
                        return(<li key={index}>{feature}</li>)
                    })}
                </ul>
            </div>
            <div className="text-center">
                {plan.price === "Free" ? (
                    <div className="fs-5 fw-bold text-center mb-3">Free</div>
                ) : (
                    <div className="fs-5 fw-bold text-center mb-3">${plan.price} / mo</div>
                )}
                <button type="button" className="btn btn-type1 btn-type1-inverse mx-auto rounded-pill px-5">Select</button>
            </div>
        </div>
    </div>
  )
}

export default Pricecard