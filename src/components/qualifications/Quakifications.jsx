import React from 'react'
import './qualification.css'
import { FaGraduationCap } from 'react-icons/fa';

const Quakifications = () => {
    const educationData = [
        {
            title: 'Bachelor of Science in Computer Science and Engineering',
            institution: 'University of Information Technology & Sciences (UITS)',
            duration: '01/2020 - 12/2023',
            grade: 'CGPA: 3.81 Out of 4.00'
        },
        {
            title: 'Higher Secondary Certificate (HSC)',
            institution: 'Government Science College',
            duration: '07/2016 – 04/2018',
            grade: 'GPA: 4.08 Out of 5.00'
        },
        {
            title: 'Secondary School Certificate (SSC)',
            institution: 'Badda Alatunnessa Higher Secondary School',
            duration: '01/2014– 02/2016',
            grade: 'GPA: 5.00 Out of 5.00'
        }
    ];

    return (
        <section id='qualification'>
        <h5>What Qualificatios I have</h5>
        <h2>My Qualificatios</h2>
        <div className="container education-container">
            {educationData.map((edu, index) => (
               
                <div key={index} className="education">
                    
                    <div className="timeline-dot">
                        <FaGraduationCap />
                    </div>
                    <div className="education-content">
                        <h3>{edu.title}</h3>
                        <p>{edu.institution}</p>
                        <p>{edu.duration}</p>
                        <p>{edu.grade}</p>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
};

export default Quakifications