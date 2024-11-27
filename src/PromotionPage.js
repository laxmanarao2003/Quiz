import React, { Component } from 'react'

export class PromotionPage extends Component {
    render() {
        return (
            <>
                {/* Promotion Buttons */}
                <div className='fixed-bottom ms-2 mb-1 mt-2' style={{width:'35px'}}>
                    <div>
                        <button className='btn btn-outline-primary' id='promotionBtn'><i className="fa-solid fa-right-to-bracket"></i></button>
                    </div>
                </div>

                <div className='justify-content-start flex-column fixed-bottom ms-2 mb-5' style={{width:'35px',display:'none'}} id='promotion'>
                    <div className='mb-2'>
                        <a href='https://github.com/laxmanarao2003' target='blank' className='btn btn-outline-primary'><i className="fa-brands fa-github"></i></a>
                    </div>
                    <div className='mb-2'>
                        <a href='https://www.instagram.com/laxmanarao_arasavilli/' target='blank' className='btn btn-outline-primary'><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className='mb-2'>
                        <a href='https://www.facebook.com/laxmanarao2003/' target='blank' className='btn btn-outline-primary'><i className="fa-brands fa-facebook"></i></a>
                    </div>
                    <div>
                        <a href='https://twitter.com/laxmanarao2003' target='blank' className='btn btn-outline-primary'><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </>
        )
    }
}

export default PromotionPage