import React from 'react'
import './education.css'
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
    const educationData = [
        {
            title: 'Bachelor of Science in Computer Science and Engineering',
            institution: 'University of Information Technology & Sciences (UITS)',
            duration: '01/2020 - 12/2023',
            grade: 'CGPA: 3.81 Out of 4.00',
        },
        {
            title: 'Higher Secondary Certificate (HSC)',
            institution: 'Government Science College',
            duration: '07/2016 - 04/2018',
            grade: 'GPA: 4.08 Out of 5.00',
        },
        {
            title: 'Secondary School Certificate (SSC)',
            institution: 'Badda Alatunnessa Higher Secondary School',
            duration: '01/2014 - 02/2016',
            grade: 'GPA: 5.00 Out of 5.00',
        },
    ];

    return (
        <section id='education'>
            <h5>What Qualifications I have</h5>
            <h2>My Personal Journey</h2>
            <div className="container education__container">

                <div className="education__content">
                <h3>Education</h3>
                {educationData.map((edu, index) => (
                    <article key={index} className='education__item'>
                       
                        <div className="education__icon">
                        <FaGraduationCap  />
                        </div>
                      <div className="education__duration">{edu.duration}</div>
                        <h4 className="education__title">{edu.title}</h4>
                        <p className="education__institution">{edu.institution}</p>
                        <p className="education__grade">{edu.grade}</p>
                    </article>
                       ))}
                </div>


                <div className="education__content">
                <h3>Experience</h3>
                <article className='education__item'>
                <div className="education__icon">
                        <MdOutlineWork  />
                        </div>
                       
                      <div className="education__duration">10 Days</div>
                        <h4 className="education__title">Industrial Attachment (SELISE Digital Platforms)</h4>
                        <p className="education__institution">During my 10-day industrial attachment at SELISE, delving into software development with a focus on the MEAN stack. Created an e-commerce project, showcasing the ability to turn theoretical ideas into real-world applications.
</p>
                    </article>
                   
                </div>


            </div>


        </section>
    )
}

export default Education