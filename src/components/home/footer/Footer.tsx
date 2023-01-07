import './footer.css';

function Footer() {
    return (
        <footer>
        <div className="footer-content">
           <img src="./images/logo.png" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem facilis aspernatur vitae veritatis ut veniam iusto? Asperiores repellat quidem natus, quae rem blanditiis laboriosam fugiat in! Repudiandae nostrum necessitatibus quis distinctio tempore, nulla provident.</p>
            <ul className="socials">
                <li><a href="#"> <img src=""/> </a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>2022copyright &copy; <a href="#">Saylani Welfare</a> </p>
        </div>

    </footer>
    );
  }
  
  export default Footer;
  