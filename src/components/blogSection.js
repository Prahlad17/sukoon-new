import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import blog1Image from '../assets/blog1.jpg'
import blog2Image from '../assets/blog2.jpg'
import blog3Image from '../assets/blog3.jpg'
import blog4Image from '../assets/blog4.jpg'
import blog5Image from '../assets/blog5.jpg'
import blog6Image from '../assets/blog6.jpg'
import blog7Image from '../assets/blog7.jpg'
import blog8Image from '../assets/blog8.jpg'
import blog9Image from '../assets/blog9.jpg'
import './blog.css'
import styled from 'styled-components';


export const BlogBox = ({ image, date, author, title }) => {
  return (
    <Box>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <div className="icon">
          <a href="#"><FontAwesomeIcon icon={faCalendar} /> {date}</a>
          <a href="#"><FontAwesomeIcon icon={faUser} /> by {author}</a>
        </div>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, a quos sequi quam eos, cumque cum rem maxime velit sit sunt, doloremque deserunt.</p>
        <a href="#" className="btn"> read more <FontAwesomeIcon icon={faChevronRight} /></a>
      </div>
    </Box>
  );
};


const BlogSection = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading"> <span>Blogs</span></h1>
      <SideBar>
        <BlogBox image={blog1Image} date="11th December 2023" author="Sheldon A Jacobs" title="From Gang Member to Mental Health Advocate" />
        <BlogBox image={blog2Image} date="25th October 2023" author="Katty Otto" title="How EMDR Healed My Trauma" />
        <BlogBox image={blog3Image} date="October 20, 2023" author="International OCD Foundation" title="How Research Is Advancing Our Understanding of OCD" />
        <BlogBox image={blog4Image} date="October 13, 2023" author="Margot Harris" title="The Reality of “High Functioning” Depression" />
        <BlogBox image={blog5Image} date="October 06, 2023" author="David Krasky" title="Building Connections: How Relationships and Time with Peers Can Improve Mental Health" />
        {/* <BlogBox image={blog6Image} date="September 27, 2023" author="Julie Ebin, EdM" title="Taking Community Suicide Prevention to the Next Level" />
        <BlogBox image={blog7Image} date="September 15, 2023" author="Sharon Shapiro and Nadja N. Lopez Reilly" title="Strengthening Mental Health Support for Students" />
        <BlogBox image={blog8Image} date="September 01, 2023" author="Marielys Camacho-Reyes" title="7 Lessons I Learned as a Survivor of a Friend's Suicide" />
        <BlogBox image={blog9Image} date="August 28, 2023" author="Dr. Stephanie Larsen" title="Tips For Easing Back-to-School Anxiety" /> */}
      </SideBar>
    </section>
  );
};

export default BlogSection;

const SideBar = styled.div`
  width: 300px;
  background-color: #e6e6e6;
  padding: 10px;
  border-right: 1px solid #ddd;
  box-sizing: border-box;
`;

const Box = styled.div`
  background-color: #ccc;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
  border: 1px solid #bbb;
  border-radius: 4px;
`