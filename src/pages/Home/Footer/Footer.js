import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className="mt-5 bg-dark footer_hight">
                <section className="container">
                    <div className="row mt-3">
                        <div className="col col-lg-6 text-white mt-5 ">
                            <p className="">© {year} Photography. All rights reserved By Lrn79</p>
                        </div>
                        <div className="col col-lg-6 text-white">
                            <div className="ms-5">
                                <h1 className="text-white">📞Contact with me </h1>
                                <h4 className='mx-5'>phone : 01556666666</h4>
                                <h4 className='mx-5'>Email : nayeem126670@gmail.com</h4>


                            </div>
                        </div>
                    </div>
                </section>



            </footer>
        </div>
    );
};

export default Footer;