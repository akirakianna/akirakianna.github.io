import React from 'react'
import styled from 'styled-components'


const About = () => {
  return <Section>

    <Text>
      <h2>About</h2>
      <p>
        Junior Software Engineer and recent graduate of General Assembly with a focus on full-stack development and our relationship with security.
        I’ve spent over 7 years in the fashion industry, working for some of the top brands in their sector.
        My experience includes working as a Fraud Analyst which has equipped me with skills such as precise analytical thinking and identifying data patterns.
        I am interested in the interconnection between design and security and how to widen the gap between our online presence and the subsequent rise in fraudulent activity.
        For my next role, I am looking to develop my existing knowledge and skills within a company that encourages learning and growth.
      </p>
    </Text>
    <Text>
      <h2>Skills</h2>
      <p>HTML5
      Styling - CSS/SASS, Bulma, Material UI, Styled Components
      Javascript (ES6) - React.js, React Hooks, Node.js, Express.js, Mongoose, Webpack, Babel
      Python -Flask, SQLAlchemy,Marshmallow
      SQL - PostgreSQL
      NoSQL - MongoDB
      Testing - Mocha and Chai
      Version Control - Git and GitHub
      JWT
      </p>
      <h2>Tools</h2>
      <p>Heroku
      GUI - TablePlus, Insomnia
      Design - Figma, Adobe Lightroom
      </p>
    </Text>
  </Section>
}

const Text = styled.p`
  font-family: 'Archivo Narrow', sans-serif;
  text-align: center;
  padding: 3rem;
  color: white;
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: black;
`





export default About