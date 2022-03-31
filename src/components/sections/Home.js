/* eslint-disable react/jsx-no-comment-textnodes */
import Skills from "./Skills"


function Home(){

  return(
    <>
    <section className="home-section">
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
    <div>
    <div className="intermezzo"></div>
    </div>
  
    </>
  )
}
export default Home