import React from 'react'
import headshot from '../../images/headshot.jpg';
import heroBackground from '../../images/hero-background.jpg';
import './About.scss';

const AboutMe = props => {
  return (
    <>
      <img className="AboutMe-heroBackground" src={heroBackground}></img>
      <div className="AboutMe-headshot">
        <img className="AboutMe-headshot-img" src={headshot}></img>
      </div>
      <div className="AboutMe-content">
        <div className="AboutMe-content-title">
          A little about myself
        </div>
        <div className="AboutMe-content-text">
          Hi, my name is Yanhong Chen, a front end developer professional in React and NodeJS.
          <br/><hr/>
          I am fascinated by graphics and image-related work, and also like design and photography, which means I can build elegant interfaces using  HTML5, CSS3 JS, and React with high quality. I also really enjoy the fun of building the entire project independently, so I learned a lot of back end knowledge like NodeJS, RestAPI, GraphQL, and so on, I can create complex web app based on business requirement. after almost two years of learning and practicing in web development. I have the ability to handle all aspects of the web application development process, including planning, design, implementation, testing, and deployment. (Please check out my website for more info <a href={`https://online.yanhongchen.tech`} >https://online.yanhongchen.tech/</a>).
          <br/><hr/>
          I have a seven-month full-stack development Co-op in an education company, they provide international summits and online courses for middle school students all around the world. My daily duty is to optimize and adding new features to our summit application platform including both front end and backend using React and Nodejs. such as reduce the half loading speed of the user application information page by rebuilding the model, rebuild the grading page for student interviews, OAuth 2.0 authorized login, and lots of fun features. I completed all the tasks on time, and also gave many suggestions to make our code more standardized.
          <br/><hr/>
          This job is very interesting and very suitable for my skills. I hope to have more opportunities to contact you and discuss more details about this work. I firmly believe that my professional skills and serious work attitude can fully meet your expectations of candidates. Thanks.
        </div>
      </div>
    </>
  )
}

export default AboutMe 