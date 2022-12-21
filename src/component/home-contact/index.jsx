import React from 'react'
import PropTypes from 'prop-types'

function HomeContact({popupActiveClick}) {

  return (
    <div className="page-3">
     
    <div className="container">
        <div className="text-box-4">  
        <h2>Want to work with us? </h2>
        <p>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor.<br /> Laceaque  quiae sitiorem rest non restibuases maio es dem tumquam</p>
        <div className="btn form-popup">
            <button onClick={() => popupActiveClick()}>GET IN TOUCH</button>
        </div>
        </div>
    </div>
</div>
  )
}

HomeContact.propTypes = {
    popupClick: PropTypes.func
  };
export default HomeContact