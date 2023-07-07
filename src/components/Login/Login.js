import React from 'react'
import "./login.scss"
import Navbar from '../Navbar/Navbar'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar />
            <section className='main-login'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='parent'>
                                <div className='uppercard'>
                                    <div className='parentcard'>
                                        <div className='left'>
                                            <div className='innerleft'>
                                                <div className='imagess'>
                                                    <img src='\assest\cardlogo.svg' alt='img' className='cardimg' />
                                                </div>
                                            </div>
                                            <div className='innerright'>
                                                <h4>tomiNET</h4>
                                                <p>TOMI</p>
                                            </div>
                                        </div>
                                        <div className='right'>
                                            <h4>$4.78</h4>
                                            <p>+1.90% (1d)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='buycard'>
                                    <div className='main-head'>
                                        <h3>Buy</h3>
                                        <div className='maincardbuyimg'>
                                            <div className='buyparent'>
                                                <div className='buyparentcard'>
                                                    <div className='inner'>
                                                        <div className='left'>
                                                            <p><span><img src='\assest\ethereum.svg' alt='img' className='img-fluid' /></span>ETH</p>
                                                        </div>
                                                        <div className='right'>
                                                            <h4>Balance:<span> 4,323.8765 ETH</span></h4>
                                                            <p>0.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='buyparent mt-2'>
                                                <div className='buyparentcard'>
                                                    <div className='inner'>
                                                        <div className='left'>
                                                            <p><span><img src='\assest\ethereum.svg' alt='img' className='img-fluid' /></span>ETH</p>
                                                        </div>
                                                        <div className='right'>
                                                            <h4>Balance:<span> 4,323.8765 ETH</span></h4>
                                                            <p>0.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='innerimage'>
                                                <img src='\assest\frame.svg' alt='img' className='imagessss' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='recieve'>
                                        <p>Receive:</p>
                                        <h4>0.00 TOMI</h4>
                                    </div>
                                    <div className='recieve'>
                                        <p>+8% Bonus:</p>
                                        <h4>0.00 TOMI</h4>
                                    </div>
                                    <div className='total'>
                                        <h3>Total:</h3>
                                        <h2>0.00 TOMI</h2>
                                    </div>
                                    <div className='recieve'>
                                        <p>Unlock Date:</p>
                                        <h4>--</h4>
                                    </div>
                                    <div className='endbtns' onClick={handleShow}>
                                        <button >Buy TOMI</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal className='purchasedmodal' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Purchased</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='purchaseimg'>
                        <img src='\assest\successfully.svg' alt='img' className='imagess' />
                    </div>
                    <div className='modalheadsss'>
                        <h4>You have successfully purchased 426.249 TOMI for 1.00 ETH
                            You can claim your tomi on <span>02:46 25/06/23</span></h4>
                            <div className='okbtn'>
                                <button>Okay</button>
                            </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Login