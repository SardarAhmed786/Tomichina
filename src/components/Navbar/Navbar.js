import React from 'react'
import "./navbar.scss"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src='\assest\tomilogo.svg' alt='img' className='img-fluid' /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src='\menu 1.svg' />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active ">Buy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Claim</a>
              </li>
            </ul>
            <button className='connect' onClick={handleShow}>Connect Wallet</button>
          </div>
        </div>
      </nav>
      <Modal className='connectmodal' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='parentmodal'>
            <div className='right'>
              <div className='rightinner'>
                <div className='imagemeta'>
                  <img src='\assest\metamask 2.svg' alt='img' className='metamask' />
                </div>
                <p className='whites'>Metamask</p>
              </div>
            </div>
            <div className='right'>
            <div className='rightinner'>
                <div className='imagemeta'>
                  <img src='\assest\walletconnect.svg' alt='img' className='metamask' />
                </div>
                <p className='whites'>WalletConnect</p>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default Navbar