var Welcome = React.createClass({
  getInitialState: function() {
    return { welcome: this.props.data };
  },

  getDefaultProps: function() {
    return { welcome: [] };
  },

  render: function() {
    return(
      <div>

      {/*Intro with Summary */}
      <div className="col-md-8 nopadding skin">
         <div className="padding-50 wow fadeInDown">

            <div className="row nopadding">
               <div className="col-md-12 nopadding">
                    <h3 className="font-accident-two-normal uppercase">About me</h3>
                    <div className="quote">
                    <h5 className="font-accident-one-bold hovercolor uppercase">Front+Back End Developer  •  Oenologist  •  Traveller</h5>
                    <div className="dividewhite1"></div>
                    <p className="small">
                    Developer at Allied Buildings by day, ED for the <a href="http://fortlauderdaletech.org/" target="_blank" alt="Fort Lauderdale Tech Association">Fort Lauderdale Tech Association (FLTA)</a> by night. Lover of code, community, and wine.  <strong>#madeinFLL  #FLLtech</strong>
                    </p>
                    </div>
               </div>
            </div>

            <div className="divider-dynamic"></div>
            <div className="row nopadding">

               <div className="col-md-4 infoblock nopadding">
                    <div className="row wow fadeInLeft">
                    <div className="col-sm-1 col-md-3">
                    <img src="https://s3-us-west-2.amazonaws.com/fortlauderdaletech.org/portfolio/icon-frameworks.png" width="44" height="44" />
                    <div className="dividewhite1"></div></div>
                    <div className="col-sm-11 col-md-9 ">
                    <h5 className="font-accident-one-bold uppercase">Languages</h5>
                    <p className="small">Ruby, Reactjs, HTML5, CSS3, SASS, Javascript, and JQuery. Database use includes PostgreSQL, sqlite, and SQL.</p>
                    </div>
                    </div>
                    <div className="divider-dynamic"></div>
               </div>

               <div className="col-md-4 infoblock nopadding">
                    <div className="row wow fadeInLeft">
                     <div className="col-sm-1 col-md-3">
                    <img src="https://s3-us-west-2.amazonaws.com/fortlauderdaletech.org/portfolio/icon-tools.png" width="44" height="44" />
                    <div className="dividewhite1"></div></div>
                    <div className="col-sm-11 col-md-9 ">
                    <h5 className="font-accident-one-bold uppercase">Frameworks</h5>
                    <p className="small">Rails, Redux, Wordpress, Ember, Bootstrap, Bourbon, React, and some Angular.</p>
                    </div>
                    </div>
                    <div className="divider-dynamic"></div>
               </div>

               <div className="col-md-4 infoblock nopadding">
                    <div className="row wow fadeInLeft">
                     <div className="col-sm-1 col-md-3">
                    <img src="https://s3-us-west-2.amazonaws.com/fortlauderdaletech.org/portfolio/icon-pen.png" width="40" height="40" />
                    <div className="dividewhite1"></div></div>
                    <div className="col-sm-11 col-md-9">
                    <h5 className="font-accident-one-bold uppercase">Primary Tools</h5>
                    <p className="small">Agile Methodologies, OOP, MVC, Git and GitHub, Heroku, APIs, CMS, Google Apps, AWS, Sketch, Vim, and pgAdmin.</p>
                    </div>
                    </div>
                  <div className="divider-dynamic"></div>
               </div>

            </div>

         </div>
      </div>

      {/*Personal Info */}
      <div className="col-md-4 personal nopadding">
         <div className="padding-50 wow fadeInRight">

              <div className="dividewhite3"></div>
              <h3 className="font-accident-two-normal uppercase font-color-invert">Personal Info</h3>

              <div className="dividewhite2"></div><div className="fullwidth box"><div className="one"><p className="small font-regular-bold uppercase font-color-invert">Name:</p></div><div className="two"><p className="small font-color-invert">Deven Blackburn</p></div></div>

              <div className="fullwidth box"><div className="one"><p className="small font-regular-bold uppercase font-color-invert">Address:</p></div><div className="two"><p className="small font-color-invert">Fort Lauderdale, FL USA</p></div></div>

              <div className="fullwidth box"><div className="one"><p className="small font-regular-bold uppercase font-color-invert">Phone:</p></div><div className="two"><p className="small font-color-invert">+1.954.348.7293</p></div></div>

              <div className="fullwidth box"><div className="one"><p className="small font-regular-bold uppercase font-color-invert">Email:</p></div><div className="two"><p className="small font-color-invert">deven@makecodenotwar.co</p></div></div>

              <div className="fullwidth box"><div className="one"><p className="small font-regular-bold uppercase font-color-invert">Github:</p></div><div className="two"><p className="small font-color-invert">github.com/hkdeven</p></div></div>

          </div>
      </div>

      {/*<div className="row nopadding"></div>*/}

      {/*Experience*/}
      <div className="col-md-4 pro-experience nopadding">
         <div className="padding-50 wow fadeInRight">
                <h3 className="font-accident-two-normal uppercase font-color-invert">Experience</h3>
                <div className="dividewhite2"></div>
                <div className="experience">
                  <ul className="">
                      <li className="company uppercase"><a href="<%= resume_path %>">Fort Lauderdale Tech Association (FLTA)</a></li>
                      <li className="position">Founded in 2016</li>
                      <li className="position"><strong>Executive Director</strong></li>
                      <li className="position">Created to build, better, and unify the growing tech industry in Broward County. Our mission is to provide a welcoming and supportive platform for the local tech community to meet and collaborate, create and find incubators for...</li>
                      <li><a href="<%= resume_path %>"><img src="https://s3-us-west-2.amazonaws.com/fortlauderdaletech.org/portfolio/more.png" width="34" height="34" /></a></li>
                  </ul>
                </div>
         </div>
      </div>

      {/*Learning Priorities*/}
      <div className="col-md-8 circle-skills nopadding seaweed">
         <div className="padding-50 wow fadeInLeft" data-wow-delay="0.6s" data-wow-offset="5">
                <h3 className="font-accident-two-normal uppercase font-color-invert">Never Stop Learning</h3>
                <div>
                <div className="fullwidth box"><div className="two"><p className="small font-color-invert">A developer never stops learning.  Here is my current reading list.</p></div></div>

                <div className="row">

                  <div className="col-sm-4 nopadding">
                        <div className="progressbar" data-animate="false">
                        <div className="circle font-accident-one-normal font-color-invert" data-percent="80">
                        <div></div>
                        <h4 className="font-accident-one-normal uppercase">Javascript</h4>
                        <p className="small">ReactJS, Redux, Angular 1.X, and NodeJS</p>
                        </div>
                        </div>
                  </div>

                  <div className="col-sm-4 nopadding">
                        <div className="progressbar" data-animate="false">
                        <div className="circle font-accident-one-normal font-color-invert" data-percent="10">
                        <div></div>
                        <h4 className="font-accident-one-normal uppercase">Front End & Design</h4>
                        <p className="small">Sketch, InDesign, ReactJS</p>
                        </div>
                        </div>
                  </div>

                  <div className="col-sm-4 nopadding">
                        <div className="progressbar" data-animate="false">
                        <div className="circle font-accident-one-normal font-color-invert" data-percent="10">
                        <div></div>
                        <h4 className="font-accident-one-normal uppercase">Reinforcement</h4>
                        <p className="small">Ruby/Rails, JQuery, JS, Bootstrap</p>
                        </div>
                        </div>
                  </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
});
