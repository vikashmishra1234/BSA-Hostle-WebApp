import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutHeader = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <div className="about-header">
        <h1>Bsa Hostle</h1>
      </div>
      <div className="paragraph">
        <p>
          BSA College Hostel provides affordable, comfortable accommodation for
          students enrolled at our institution. We aim to create a secure home
          away from home where you can focus on your studies while experiencing
          an enriching communal living environment. <br />
          Our housing philosophy is centered around providing a comprehensive
          support system that allows students to thrive during their university
          years. We understand that living situation plays a critical role in
          facilitating a positive student experience and academic success.{" "}
          <br />
          At BSA Hostel, you'll find a study-conducive atmosphere complemented
          by a vibrant community that encourages personal growth outside the
          classroom. Our modern facilities are designed to meet all your needs
          as a student, allowing you to easily transition between studying,
          recreational activities, and spending quality time with your peers.
        </p>

        <h1>Our facilities</h1>
        <ol>
          <li>Choice of single or double occupancy rooms</li>
          <li>Dedicated study lounges on each floor</li>
          <li>High-speed WiFi access throughout</li>
          <li>Cable TV room</li>
          <li>Community kitchens</li>
          <li>Laundry facilities</li>
          <li>24/7 security</li>
          <li>Outdoor recreation areas</li>
        </ol>
        <p>
          <h2>Residential Life</h2>
          Living at BSA College Hostel allows you to immerse yourself fully in
          the campus experience. In addition to having your classes right
          nearby, you'll be steps away from the library, dining halls, athletic
          facilities, clubs and more. Our dorms have a vibrant residential
          community with opportunities to join councils, take part in social
          activities, and form lifelong friendships. Residential advisors plan
          regular educational and social programming. Safe and Convenient
          Student safety is our top priority. Our hostel is located on a secured
          area of campus with dorms only accessible by student ID card access.
          Staff are available 24/7 for any issues. The hostel is just a short
          walk or free shuttle ride from academic buildings, making it
          incredibly easy to get to classes. Parking is also available for a
          fee.
        </p>
      </div>
    </>
  );
};

export default AboutHeader;
