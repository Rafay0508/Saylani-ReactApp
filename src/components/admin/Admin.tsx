import Navbar from "../home/navbar/Navbar";
import Contact from "../home/contact/Contact";
import './admin.css';

export default function Admin(){
    return(
<div>
    <Contact/>
    <Navbar/>
    <div className="main-container">Admin</div>
</div>
    )
};