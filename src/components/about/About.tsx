import './about.css';
import Navbar from "../home/navbar/Navbar";
import Contact from "../home/contact/Contact";

export default function About(){
    return(
<div>
    <Contact/>
    <Navbar/>
    <div className="about-container">
        <img src="./images/about-image.jpg" alt="" />
        <h1>Saylani Welfare Trust</h1>
   <p> Saylani Welfare International Trust is a non-government organization (NGO) focusing primarily on feeding the poor and homeless. It was established in May 1999 and is headquartered at Bahdurabad, Karachi, Pakistan.
It was founded and headed by spiritual and religious scholar Maulana Bashir Farooq Qadri.With an estimated monthly expenditure of Pakistani Rupees above 30 million, Saylani Trust, provides food twice a day to more than 30,000 poor people through its 100 centers (generally known as Dastar-Khawan), most of them are serving in Karachi.The organization distributed CNG rickshaws among the jobless citizens of Karachi in April 2011 with the help of members of the Karachi business community.
   </p>
   <p className='sub-heading'>Services provided</p>
   <p>With its offices in Nottingham, UK, Saylani Welfare raises funds, as well as raising awareness of a range of charity projects. Services by Saylani (NGO) are provided free of cost. </p>
   <p className='sub2-heading'>Medical institutions of Saylani</p>
   <p>With its offices in Nottingham, UK, Saylani Welfare raises funds, as well as raising awareness of a range of charity projects. Services by Saylani (NGO) are provided free of cost.</p>
   <p className='sub-heading'>Charitable initiatives</p>
   <p>Saylani, since its inception, has worked on both providing needed economic and nutritional help to the needy in distress as well as providing means for able-bodied persons to earn a living through innovative solutions to "tackle the root causes and effects of poverty of Pakistani citizens." This ranges anywhere from programs similar to those provided by Social Security in Western nations to doing area to area and neighborhood to neighborhood searches of the needy and providing relief.[7] Notable among these programs are:</p>
   <p className='sub2-heading'>Roti Bank</p>
   <p>The Roti Bank provides free meals to needy families in a simple walk-up kiosk along a main thoroughfare in Karachi. After providing their identification, details of family size (via birth certificates) and getting the Saylani "Free Food Card", the families can get 2 meals per day for a month.[8][9] The initiative was launched on 14 August 2018.</p>
   <p className='sub2-heading'>COVID-19 crisis </p>

   <p>During the COVID-19 crisis, Saylani Welfare Trust provided free oxygen, food, rescue equipment and other supplies to hospitals and Covid-19 wards in the country.[16] It also introduced mobile phone application and telephone service, where needy families can register themselves to get ration and other essential items.[17]</p>
   <p className='sub2-heading'>Economic empowerment </p>
   <p>In 2013, in an effort to create economic empowerment via training in Technology, especially Web and Mobile App development, Saylani Welfare International Trust began its Saylani Mass IT Training (SMIT) Program under the guidance of Zia Ullah Khan,[citation needed] who have previously run successful mass IT programs like “Operation Badar”.[11]  The goal of SMIT was to create 10,000 well-trained Web and Mobile App developers in emerging programming languages like React, Node JS, and Angular JS.[12] The program thus far has trained 4,000 developers successfully in fields as varied as Cisco’s CCNA certification, Graphic Design, and Startup Entrepreneurship along with the Web and Mobile App development skills to spur economic empowerment and  allow its graduates to quickly become economically independent.[13]</p>
   <p className='sub2-heading'>Aid to Syrian and Rohingya refugees</p>
   <p>In 2017, Saylani Welfare Trust confirmed that they were providing food aid to Syrian refugees on Turkey's border with Syria. The Chief Operating Officer of Saylani, Muhammad Ghazal, said that they are working in partnership with the Turkish Disaster and Emergency Management Authority (AFAD) to provide aid to Syrian living in refugee camps near the border.[14]
Saylani Welfare Trust also provides aid to Rohingya living in refugee camps in Bangladesh.[15]</p>
    </div>
</div>
    )
};
