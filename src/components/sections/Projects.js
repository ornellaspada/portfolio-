import img1 from '../img/Project4_Collections.png'
import img2 from '../img/Project3_one.png'
import img3 from '../img/Project2_one.png'
import img4 from '../img/Project1_one.png'

function Projects(){
  return(
    <section id="projects" className="card-two"> 
    <div className="project-frame">
    <img className="project-image" src={img1} alt="project4"/>
    </div>
    <div className="info-projects">
    <h1 className="revogue">RE-VOGUE</h1>
    <span className="project-type">Solo Project | One Week </span>
    <div className="devicons-project-row">
    <div className="project-devicons">
              <div className="project-devicon">
                <i id="java-mini" className="devicon-javascript-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="react-mini" className="devicon-react-original"></i>
              </div>
              <div className="project-devicon">
                <i id="html-mini" className="devicon-html5-plain"></i>
              </div>
              <div className="project-devicon">
                <i  id="css-mini" className="devicon-css3-plain"></i>
              </div>
              <div className="project-devicon">
                <i  id="sass-mini" className="devicon-sass-original"></i>
              </div>
              <div className="project-devicon">
                <i id="python-mini" className="devicon-python-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="django-mini" className="devicon-django-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="post-mini" className="devicon-postgresql-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="node-mini" className="devicon-nodejs-plain"></i>
              </div>
              </div>        
    </div>
    <p className="project-description">Full-stack e-commerce website that embodies circular economy in the high-end fashion industry. 
              The back-end is built using Django, Python and it uses SQL as a database.
               The front-end is a React app that is linked to the SQL back-end.
                The design is rendered with a minimalistic black and white real estate that 
                reminds the pristine layout of Vogue Magazine’s website and 
                it is entirely realized with CSS with a twist that echoes the 
                90’s aesthetics.</p>
    </div>
    <div className="buttons-container-one">
    <a id="b1" className="button1" target="_blank" href="https://re-vogue.netlify.app/" rel="noreferrer">
              <span>Project</span>
                </a>
                <a id="b1" className="button1" target="_blank" href="https://github.com/ornellaspada/project-4-server" rel="noreferrer">
                <span>Github</span>
              </a>
    </div>
    <div className="intermezzo-black"></div>
    <div className="project-frame">
    <img className="project-image1" src={img2} alt="project4"/>
    </div>
    <div className="info-projects">
    <h1 className="trippy">Trippy</h1>
    <span className="project-type">Group Project |One week</span>
    <div className="devicons-project-row">
    <div className="project-devicons">
              <div className="project-devicon">
                <i id="java-mini" className="devicon-javascript-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="react-mini" className="devicon-react-original"></i>
              </div>
              <div className="project-devicon">
                <i id="html-mini" className="devicon-html5-plain"></i>
              </div>
              <div className="project-devicon">
                <i  id="css-mini" className="devicon-css3-plain"></i>
              </div>
              <div className="project-devicon">
                <i  id="mini" className="devicon-bulma-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="mini" className="devicon-express-original"></i>
              </div>
              <div className="project-devicon">
                <i id="mini" className="devicon-mongodb-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="mini" className="devicon-nodejs-plain"></i>
              </div>
             </div>
              </div>
              <p className="project-description">A MERN Stack application that showcases alternative places in London, 
              where users can register, review, add to favourites or simply browse their 
              places hotlist on an interactive map. The front-end was built using 
              React and the back-end by implementing Express, Mongoose and MongoDB. 
              We used an external API to render the map and an internal one for 
              user experience. I was responsible for creating the navbar with the 
              log in and the register features. I worked on the logic for building 
              the My Favourite page, the add and delete functions to keep updated 
              the internal API. I contributed to rendering and conceiving the basic 
              design by using Bulma.
                </p>
    </div>
    <div className="buttons-container-one">
    <a id="b2" className="button2" target="_blank" href="https://trippy-ornellaspada.netlify.app" rel="noreferrer">
              <span className="span2">Project</span>
                </a>
                <a id="b2" className="button2" target="_blank" href="https://github.com/ornellaspada/project-3-server" rel="noreferrer">
                <span className="span2">Github</span>
              </a>
    </div>
    <div className="intermezzo-black"></div>
    <div className="project-frame">
    <img className="project-image2" src={img3} alt="project2"/>
    </div>
    <div className="info-projects">
    <h1 className="carbon">CarbonFree</h1>
    <span className="project-type">Group Project | Two Days Hackathon</span>
    
    <div className="devicons-project-row">
    <div className="project-devicons">
              <div className="project-devicon">
                <i id="java-mini" className="devicon-javascript-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="react-mini" className="devicon-react-original"></i>
              </div>
              <div className="project-devicon">
                <i id="html-mini" className="devicon-html5-plain"></i>
              </div>
              <div className="project-devicon">
                <i  id="css-mini" className="devicon-css3-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="mini" className="devicon-nodejs-plain"></i>
              </div>
             </div>
              </div>
              <p className="project-description">A MERN Stack application that showcases alternative places in London, 
              where users can register, review, add to favourites or simply browse their 
              places hotlist on an interactive map. The front-end was built using 
              React and the back-end by implementing Express, Mongoose and MongoDB. 
              We used an external API to render the map and an internal one for 
              user experience. I was responsible for creating the navbar with the 
              log in and the register features. I worked on the logic for building 
              the My Favourite page, the add and delete functions to keep updated 
              the internal API. I contributed to rendering and conceiving the basic 
              design by using Bulma.
                </p>
              </div>
    <div className="buttons-container-one">
    <a id="b3" className="button3" target="_blank" href="https://carbonfree-ornellaspada.netlify.app" rel="noreferrer">
              <span className="span3">Project</span>
                </a>
                <a id="b3" className="button3" target="_blank" href="https://github.com/ornellaspada/Project-2" rel="noreferrer">
                <span className="span3">Github</span>
              </a>
    </div>
    <div className="intermezzo-black"></div>
    <div className="project-frame">
    <img className="project-image4" src={img4} alt="project1"/>
    </div>
    <div className="info-projects">
    <h1 className="turtle">Turtles in the Ocean</h1>
    <span className="project-type">Solo Project | One week</span>
    <div className="devicons-project-row">
    <div className="project-devicons">
              <div className="project-devicon">
                <i id="java-mini" className="devicon-javascript-plain"></i>
              </div>
              <div className="project-devicon">
                <i id="html-mini" className="devicon-html5-plain"></i>
              </div>
              <div className="project-devicon">
                <i  id="css-mini" className="devicon-css3-plain"></i>
              </div>
              </div>
              </div>
              <p className="project-description">I created my first video-game by using JavaScript, 
              CSS and HTML. Turtles in the Ocean is the environmentalist version of 
              the famous Japanese arcade video-game The Frogger. 
                </p>
    </div>
    <div className="buttons-container-one">
    <a id="b4" className="button4" target="_blank" href="https://ornellaspada.github.io/Project-1" rel="noreferrer">
              <span className="span4">Project</span>
                </a>
                <a id="b4" className="button4" target="_blank" href="https://github.com/ornellaspada/Project-1" rel="noreferrer">
                <span className="span4">Github</span>
              </a>
    </div>
    
    </section>
  )

}

export default Projects