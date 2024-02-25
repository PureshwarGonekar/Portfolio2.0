import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Container } from "./styles";
import image from '../../assets/github.svg'
import hal from '../../assets/experience/hal.png';
import erp from '../../assets/experience/erp.png'
import railway from '../../assets/experience/railway.png'
import settyl from '../../assets/experience/settyl.png'


const WorkIcon = ()=>{
  return (
    <div>
      <img src={image} alt="" />
    </div>
  )
}

const Experience = ()=>{

  return (
    <Container className="experience" id="experience" >
      <div className="experienceHeader">
        <h2 className="font-bold" style={{color: '#23ce6b'}}>Internhips & Experience</h2>
      </div>

      <VerticalTimeline animate={true} lineColor={ '#23ce6b' }>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<img src={settyl} />}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Full Stack Engineer Intern</h1>
          <h4 className="vertical-timeline-element-subtitle text-red-500">Settyl, Chennai</h4>
          <h3 className="text-[13px] text-sky-900 mb-3">February 2024 - Present</h3>
          <ol className="">
            <li className="mb-2">* Working in UI part for Mobile App.</li>
            <li>* Debugging the functionality of Web application and implementing into mobile application.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          icon={<img src={erp} />}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Full Stack Developer Intern</h1>
          <h4 className="vertical-timeline-element-subtitle text-red-500">Ayattih Education Foundation</h4>
          <h3 className="text-[13px] text-sky-900 mb-3">August 2023 - December 2023</h3>
          <ol className="">
            <li className="mb-2">* Developed the responsive School management ERP web application using React.js, Node.js, Express.js and Tailwind CSS.</li>
            <li>* Implemented RESTful API’s, monitored API’s response time, optimizing data management and accessibility.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<img src={hal} />}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Frontend Developer Intern</h1>
          <h4 className="vertical-timeline-element-subtitle text-red-500">Hidustan Aeronotical Limited, Odisha</h4>
          <h3 className="text-[13px] text-sky-900 mb-3">June 2023 - July 2024</h3>
          <ol className="">
            <li className="mb-2">* Designed and developed the Resolver, a Township Complaint Management System, using ReactJS and Firebase technologies</li>
            <li>* Utilized Firebase to implement chat functionality, allowing residents to communicate and resolve issues effectively within the platform.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<img src={railway} />}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Computer Science Trainee</h1>
          <h4 className="vertical-timeline-element-subtitle text-red-500">West Central Railway, Jabalpur</h4>
          <h3 className="text-[13px] text-sky-900 mb-3">May 2022 - June 2022</h3>
          <ol className="">
            <li className="mb-2">* Completed an 8-week online training on Web Development. The training consisted of HTML, CSS, Bootstrap, DBMS, PHP, JS, React, and Final Project modules.</li>
            <li>* Worked alongside with the staff in the Telephone Exchange department to understand the various components.</li>
          </ol>
        </VerticalTimelineElement>
        

      </VerticalTimeline>
    </Container>
  )
}

export default Experience;