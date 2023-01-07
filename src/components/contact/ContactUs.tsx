import Navbar from "../home/navbar/Navbar";
import Contact from "../home/contact/Contact";
import './contactUs.css';

export default function ConatctUs(){
    return(
<div>
    <Contact/>
    <Navbar/>
    <div className="contactus-container">
        <h1>Contact Us:</h1>
     <div className="details">
        <ul>
            <li>A-25, Bahadurabad Chowrangi Karachi, Pakistan</li>
            <li>UAN: <a href="tel:111-729-526">111-729-526</a><br /><a href="tel:(+0092-213)4130786-90">(+0092-213)4130786-90</a></li>
            <li>CELL: <a href="tel:92-311-1729526">92-311-1729526</a></li>
            <li>USA NO: <a href="tel:+1(716)941 7792">+1(716)941 7792</a></li>
            <li>UK NO: <a href="tel:(+44)115 970 6256">(+44)115 970 6256</a></li>
        </ul>
     </div>

   </div> 
    </div>
    )
};
