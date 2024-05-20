import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Container } from "./styles";
import jec from '../../assets/education/jec.png';
import school from '../../assets/education/school.png'
import mortarboard from '../../assets/education/mortarboard.png'

const Education = ()=>{

  return (
    <Container className="education" id="education" >
      <div className="educationHeader">
        <h2 className="font-bold" style={{color: '#23ce6b'}}>Education</h2>
      </div>

      <VerticalTimeline animate={true} lineColor={ '#23ce6b' }>        

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<img src={jec} />}
          iconClassName={'bg-white p-3 flex items-center'}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Jabalpur Engineering College, Jabalpur</h1>
          <h3 className="vertical-timeline-element-subtitle text-red-500 text-3xl mt-1" >B. Tech - Computer Science</h3>
          <h3 className="text-[15px] text-sky-900 mt-1 mb-3">2020 - 2024</h3>
          <h3 className="text-[15px]">CGPA - 8.22/10</h3>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<img src={mortarboard} />}
          iconClassName={'bg-white p-3 flex items-center'}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Govt. Excellence School, Chhindwara</h1>
          <h3 className="vertical-timeline-element-subtitle text-red-500 text-3xl mt-1" >Higher Secondary School(10+2)</h3>
          <h3 className="text-[15px] text-sky-900 mt-1 mb-3">2019 - 2020</h3>
          <h3 className="text-[15px]">Percentage - 87.8%</h3>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<img src={school} />}
          iconClassName={'bg-white p-3 flex items-center'}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Army Public High School, Chhindwara</h1>
          <h3 className="vertical-timeline-element-subtitle text-red-500 text-3xl mt-1" >High School Education</h3>
          <h3 className="text-[15px] text-sky-900 mt-1 mb-3">2017 - 2018</h3>
          <h3 className="text-[15px]">Percentage - 91%</h3>

        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </Container>
  )
}

export default Education;