import React from 'react';
import { useState } from 'react';
import './cards.css';
import Forms from '../form/Forms';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { Modal } from 'antd';

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Upload,
} from 'antd';



function LinkCards() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="cards-container">

        <p className='courses-heading'>SMIT Free IT Courses</p>
        <div className="grid">
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src="./images/card-image-1.jpg" alt="" />
              <div className="card-content">
                <h1 className="card-header">Techno Kid Course</h1>
                <p>We are offering this online course to school-going kids to educate them about upcoming worldwide technologies.</p>
                <span>
                  <li > <button className="card-btn" onClick={showModal}>Enroll Now <span>&rarr;</span></button></li>
                  <>
                    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <Forms />
                    </Modal>
                  </>
                </span>

              </div>

            </div>

          </div>

          <div className="grid-item">
            <div className="card">
              <img
                className="card-img"
                src="./images/card-image-2.jpg"
                alt=""
              />
              <div className="card-content">
                <h1 className="card-header">CISCO CCNP</h1>
                <p>We are offering this online course to school-going kids to educate them about upcoming worldwide technologies.</p>
                <button className="card-btn" >Enroll Now <span>&rarr;</span></button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src="./images/card-image-3.jpg" alt="" />
              <div className="card-content">
                <h1 className="card-header">Python Course</h1>
                <p>We are offering this online course to school-going kids to educate them about upcoming worldwide technologies.</p>
                <button className="card-btn">Enroll Now <span>&rarr;</span></button>
              </div>

            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src="./images/card-image-4.jpg" alt="" />
              <div className="card-content">
                <h1 className="card-header">Mobile Reparing Course</h1>
                <p>!!!!!Coming Soon. Stay Tuned</p>

                {/* <button className="card-btn">Enroll Now <span>&rarr;</span></button> */}
              </div>

            </div>
          </div>

        </div>
      </div>
    </>

  )
};

export default LinkCards;
