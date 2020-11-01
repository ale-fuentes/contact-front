import React from 'react'

export default props => (
    <div role='form' className='contactForm'>
        <div className="col-xs-12 col-sm-9 col-md-10">
            <div className="row">
                <input type="text" name="name" id="name" className="form-control"
                    placeholder="name" />
                <input type="text" name="phone" id="phone" className="form-control"
                    placeholder="phone" />
                <input type="checkbox" name="ative" id="ative" className="form-control" />

            </div>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-10">
            <button className="btn btn-primary">
                <i className="fa fa-plus"></i>
            </button>
        </div>
    </div>
)