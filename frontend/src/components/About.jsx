import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
function About() {
  return (
    <>
    <section className='about' id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>FOOD IS AN EMOTION    <p>^_^</p></p>

                </div>
                <p className="mid">
                Food has the power to soothe our souls, lift our spirits, and ignite our senses, making it an integral part of our emotional experiences. Whether it's the warmth of a homemade meal or the excitement of trying a new cuisine, food has a unique ability to nourish both the body and the soul.
                </p>
                <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
            </div>
            <div className="banner">
            <img src="about.png" alt="about" />
          </div>   
        </div>
    </section>
    </>
  );
};

export default About