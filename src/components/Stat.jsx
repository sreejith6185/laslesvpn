import React from 'react'

const Stat = () => {
  return (
    <div className="shadow-lg py-4 p-3 rounded-3 mb-5">
        <div className="d-flex justify-content-around align-items-center flex-wrap">
            <div className="d-flex align-items-center p-3">
                <span className="icon-wrp icon-wrp-sm d-flex align-items-center justify-content-center secondary-text secondary-bg bg-opacity-25 rounded-circle square p-1">
                    <i className="bi bi-person-fill"></i>
                </span>
                <div className="ms-4">
                    <h4 className="primary-text mb-0">90+</h4>
                    <span>Users</span>
                </div>
            </div>
            <div className="vr"></div>
            <div className="d-flex align-items-center p-3">
                <span className="icon-wrp icon-wrp-sm d-flex align-items-center justify-content-center secondary-text secondary-bg bg-opacity-25 rounded-circle square p-1">
                    <i className="bi bi-person-fill"></i>
                </span>
                <div className="ms-4">
                    <h4 className="primary-text mb-0">90+</h4>
                    <span>Users</span>
                </div>
            </div>
            <div className="vr"></div>
            <div className="d-flex align-items-center p-3">
                <span className="icon-wrp icon-wrp-sm d-flex align-items-center justify-content-center secondary-text secondary-bg bg-opacity-25 rounded-circle square p-1">
                    <i className="bi bi-person-fill"></i>
                </span>
                <div className="ms-4">
                    <h4 className="primary-text mb-0">90+</h4>
                    <span>Users</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stat