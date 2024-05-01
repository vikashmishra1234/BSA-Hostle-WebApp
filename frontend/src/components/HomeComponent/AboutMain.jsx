import React from "react";
import About from "./About";
import Cards from "./Cards";
import { GiGreekTemple } from "react-icons/gi";
import { MdLibraryBooks } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import '../style/style1.scss'

const AboutMain = () => {
  return (
    <div>

        <About/>
        <div className="card-wrapper" >
    
        <Cards path={'administration'} icon={<GiGreekTemple size={30} />} title={'Mangement Commitee'} imgUrl={'https://www.bsacet.org/wp-content/uploads/2023/07/IMG_3361-scaled.jpg'}/>
        <Cards path={'about'} title={'Hostle Facilities'} imgUrl={'https://www.bsacet.org/wp-content/uploads/2024/01/IMG_1468-scaled.jpg'} icon={<MdLibraryBooks size={30} />}/>
        <Cards path={'about'} title={'Hostle Introduction'} imgUrl={'https://www.bsacet.org/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-28-at-12.23.51-PM-6.jpeg'} icon={<FaBook size={27} />}/>
        </div>
    </div>
  );
};

export default AboutMain;
