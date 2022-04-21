/* eslint-disable react/jsx-no-comment-textnodes */
import Skills from "./Skills"
import Projects from "./Projects"
import Experience from "./Experience"
import Contacts from "./Contacts"
import green from "../img/Green.png"




function Home(){

  return(
    <>
    <section id="about" className="home-section">
    <div className="home-div">
    <h1 className="my-name">
    Ornella Spada
    </h1>
    <h2 className="my-title">
    Full-Stack Software Engineer
    </h2>
    </div>
    
    <div className="bio">
    I have more than 8 year experience in some of the most cutting edge art spaces in the world, where I worked in strategic planning, customer service and project management. 
My interest in coding began by working in the fine art industry, where I was completely taken by what some artists could create with the use of technology and I became aware of the unlimited potential. Through my personal and professional experience I demonstrated not just the ability to quickly adapt to new professional contexts, but also to contribute with an impact on their overhaul. I am extremely enthusiastic to start a career as a software engineer to have the opportunity to create new solutions and have a positive impact in a world in full swing.

    </div>
    </section>
    <div className="intermezzo"></div>
    <Skills />
    <div className="card-one"></div>
    <div className="intermezzo"></div>
    <Projects />
    <div className="card-two">
    </div>
    <div className="intermezzo"></div>
    <Experience />
    <div className="card-three">
    </div>
    <div className="intermezzo"></div>
    <Contacts />
    <div className="card-four">
    </div>
    <footer>
    <img className="green-image" src={green} alt="green"/>
    </footer>
  
   

    </>
  )
}
export default Home