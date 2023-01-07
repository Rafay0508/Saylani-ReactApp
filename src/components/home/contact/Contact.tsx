import './contact.css';

function Contact() {
    return (
        <div className='top-conatct'>
           <span><img  className="contact-img"src="./images/envelope-solid.png" alt="" />
            <a href="email:info@SaylaniWelfare.Com">Email:info@SaylaniWelfare.Com</a></span>
            <span className='space-btw'></span>
            <span>
                <img className="contact-img" src="./images/phone-solid.png" alt="" />
            <a href="tel:021-111-729-526">021-111-729-526</a>
            </span>
        </div>
    );
}

export default Contact;
