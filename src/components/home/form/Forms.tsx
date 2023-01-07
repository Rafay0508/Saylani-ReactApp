// import './forms.css';
// import { Link } from 'react-router-dom';
// import React, { FormEvent, useState } from 'react';
// import Navbar from '../navbar/Navbar';

// function Forms() {
//   const [userData, setUserData] = useState({
//     city: "",
//     course: "",
//     name: "",
//     fname: "",
//     dob: "",
//     gender: "",
//     email: "",
//     contact: "",
//     cnic: "",
//     fcnic: "",
//     address: "",
//     qualification: "",
//     profile: "",
//   });

//   let name, value;
//   const postUserData = (event: FormEvent) => {
//     name = (event.target as HTMLInputElement).name;
//     value = (event.target as HTMLInputElement).value;

//     setUserData({ ...userData, [name]: value })
//   };
//   const submitData = async (event: FormEvent) => {
//     event.preventDefault();
//     const { city, course, name, fname, dob, gender, email, contact, cnic, fcnic, address, qualification, profile } = userData;
//     if (name && fname) {
//       const res = fetch(
//         'https://reactfirebasewebsite-f5316-default-rtdb.firebaseio.com/userDataRecords.json',
//         {
//           method: 'POST',
//           headers: {
//             "content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             city, course, name, fname, dob, gender, email, contact, cnic, fcnic, address, qualification, profile
//           }
//           ),
//         });
//       if (await res) {
//         setUserData({
//           city: "",
//           course: "",
//           name: "",
//           fname: "",
//           dob: "",
//           gender: "",
//           email: "",
//           contact: "",
//           cnic: "",
//           fcnic: "",
//           address: "",
//           qualification: "",
//           profile: ""
//         });
//         alert("Data Stored");
//       }
//       else {
//         alert("plz fill the data");
//       }
//     }
//     else {
//       alert("plz fill the data");
//     }
//   };
//   return (
//     <span>
//       <Navbar/>
//       <div className='form-container'>
//         <div className='header'>
//           <h1 className='heading'>Course Registration Form</h1>
//         </div>
//       </div>
//       <form>
//         <div className='content-container'>
//           <div className='input-tag'>
//             <label htmlFor="city">Select City</label><br />
//             <select name="city" id="city" onChange={postUserData}>
//               <option disabled selected>Select</option>
//               <option value="karachi" >Karachi</option>
//             </select>
//           </div>
//           <div className='input-tag'>
//             <label htmlFor="course">Select Course</label><br />
//             <select name="course" id="course" onChange={postUserData}>
//               <option disabled selected>Select</option>
//               <option value="web development">Web Development</option>
//             </select>
//           </div>
//           <div className='input-tag'>
//             <label htmlFor="name">Full Name</label><br />
//             <input type="text" placeholder='Enter Full Name' value={userData.name} onChange={postUserData} name="name" id="name" />
//           </div>
//           <div className='input-tag'>
//             <label htmlFor="fname">Father Name</label><br />
//             <input type="text" placeholder='Father Name' value={userData.fname} onChange={postUserData} name="fname" id="fname" />
//           </div>
//           <div className='input-tag'>
//             <label htmlFor="dob">Date of Birth</label><br />
//             <input type="date" name="dob" id="dob" value={userData.dob} onChange={postUserData} />
//           </div>
//           <div className='input-tag'>
//             <label htmlFor="gender">Select Gender</label><br />
//             <select name="gender" id="gender" onChange={postUserData}>
//               <option disabled selected>Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>
//           <div className='input-tag'>
//             <label htmlFor="email">Email</label><br />
//             <input type="email" placeholder='example@gmail.com' value={userData.email} onChange={postUserData} name="email" id="email" />
//           </div>
//           <div className='input-tag'>
//             <label htmlFor="contact">Contact Number</label><br />
//             <input type="text" placeholder='03xx-xxxxxxx' value={userData.contact} onChange={postUserData} name="contact" id="contact" />
//           </div>
//           <div className='input-tag'>
//             <label htmlFor="cnic">CNIC</label><br />
//             <input type="text" placeholder='e.g 42101-111111-1' value={userData.cnic} onChange={postUserData} name="cnic" id="cnic" />
//           </div>
//           <div className='input-tag'>
//             <label htmlFor="fcnic">Father's CNIC</label><br />
//             <input type="text" placeholder='e.g 42101-111111-1' value={userData.fcnic} onChange={postUserData} name="fcnic" id="fcnic" />
//           </div>
//           <div className='input-tag permanent'>
//             <label htmlFor="address">Permanent Address</label><br />
//             <input type="text" placeholder='Enter Address' value={userData.address} onChange={postUserData} name="address" id="address" />
//           </div>
//           <div className='input-tag qualification'><br />
//             <label className='qualification' htmlFor="qualification">Qualification:</label>
//             <span className='qualification-radio'>

//               <span className='inline-block'>
//               <input type="radio" name="qualification" id='matric' value={'matric'} onChange={postUserData} />
//               <label htmlFor="matric">Matric</label>
//               </span>
//               <span className='inline-block'>
//               <input type="radio" name="qualification" id='intermediate' value={'intermediate'} onChange={postUserData} />
//               <label htmlFor="intermediate">Intermediate</label>
//               </span>
//               <span className='inline-block'>
//               <input type="radio" name="qualification" id='undergraduate' value={'undergraduate'} onChange={postUserData} />
//               <label htmlFor="undergraduate">Undergrad</label>
//               </span>
//               <span className='inline-block'>
//               <input type="radio" name="qualification" id='graduate' value={'graduate'} onChange={postUserData} />
//               <label htmlFor="graduate">Graduate</label>
//               </span>
//               <span className='inline-block'>
//               <input type="radio" name="qualification" id='masters' value={'masters'} onChange={postUserData} />
//               <label htmlFor="masters">Masters</label>
//               </span>
//               <span className='inline-block'>
//               <input type="radio" name="qualification" id='phd' value={'PHD'} onChange={postUserData} />
//               <label htmlFor="phd">PHD</label>
//               </span>
//             </span>
//           </div>
//           <div className='input-tag profile'>
//             <label htmlFor="profile">Passport Size Profile Image</label><br />
//             <input type="file" name="profile" id="profile" value={userData.profile} onChange={postUserData} />
//           </div>
//           <div className='input-tag form-text'>
//             <h3>Term and Conditions</h3><br />
//             <ol>
//               <li>1. I hereby, solemnly declare that the data and facts mentioned herein are true and correct to the best of my knowledge. Further, I will abide by my all the establish and future regulation and policies of SWIT</li>
//               <li>2. I hereby accept the responsibilites of the good conduct and guarantee that I will not be involved in any other activity, polical or ethic, but learning during my stay in the program.</li>
//               <li>3. Defiance will render my admission cancelled at any point in time.</li>
//               <li>4. Upon completion of course, I will complete the required project by SWIT.</li>
//             </ol>
//           </div>
//           <div className='input-tag submit-button'>
//             <button type="submit" onClick={submitData}>Submit</button>
//           </div>
//         </div>
//       </form>
//     </span>
//   );
// }

// export default Forms;









import './forms.css';
import React, { useState } from 'react';
import { Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Upload,
} from 'antd';


const Forms: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <span className='form-heading'>Registration Form</span>
        <Form.Item label="City">
          <Select placeholder='Select City'>
            <Select.Option value="Karachi">Karachi</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Course">
          <Select placeholder='Select Course'>
            <Select.Option value="web development">Web Development</Select.Option>
          </Select>
        </Form.Item>


        <Form.Item label="Full Name">
          <Input placeholder='Enter your Full Name' />
        </Form.Item>
        <Form.Item label="Father Name">
          <Input placeholder='Enter Father Name' />
        </Form.Item>

        <Form.Item label="DatePicker">
          <DatePicker placeholder='Select Birthdate' />
        </Form.Item>

        <Form.Item label="Gender">
          <Select placeholder='Select Gender'>
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Email">
          <Input type='email' placeholder='Enter Email Address' />
        </Form.Item>

        <Form.Item label="Contact Number">
          <Input type='tel' placeholder='Enter your Contact Number' />
        </Form.Item>

        <Form.Item label="CNIC">
          <Input type='text' placeholder='Enter CNIC Number' />
        </Form.Item>

        <Form.Item label="Parmanent Address">
          <Input type='address' placeholder='Enter Your Permanent Address' />
        </Form.Item>


        <Form.Item label="Qualification">
          <Radio.Group>
            <Radio value="Matric"> Matric </Radio>
            <Radio value="Intermediate"> Inter </Radio>
            <Radio value="Graduate"> Graduate </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Upload Picture" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item>
          <input style={{ width: '100%' }} onClick={scrollToTop} type="submit" value="Submit" />
        </Form.Item>
      </Form>
    </>
  );
};

export default Forms;



