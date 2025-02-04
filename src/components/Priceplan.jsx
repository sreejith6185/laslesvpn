import React from 'react'
import Pricecard from './Pricecard'
import { plans } from '../constants/plans'

const Priceplan = () => {
  return (
    <section className=" py-5" id='pricingSection'>
        <div className="container-xl">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2 className="text-center">
                        Choose Your Plan
                    </h2>
                    <p className="text-center">
                        Let's choose the package that is best for you and explore it happily and cheerfully.
                    </p>
                </div>
            </div>
            <div className="row g-xl-5 g-3">
                {plans.map((plan, index)=>{
                    return (<Pricecard key={index} plan={plan}/>)
                })}
            </div>
        </div>
    </section>
  )
}

export default Priceplan