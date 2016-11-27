var Welcome = React.createClass({
  getInitialState: function() {
    return { welcome: this.props.data };
  },

  getDefaultProps: function() {
    return { welcome: [] };
  },

  // addRecord: function(record) {
  //   var records = React.addons.update(this.state.records, { $push: [record] })
  //   this.setState({ records: records });
  // },

  // deleteRecord: function(record) {
  //   var index = this.state.records.indexOf(record);
  //   var records = React.addons.update(this.state.records,
  //                                     { $splice: [[index, 1]] });
  //   this.replaceState({ records: records});
  // },

  // updateRecord: function(record, data) {
  //   var index = this.state.records.indexOf(record);
  //   var records = React.addons.update(this.state.records,
  //                                     { $splice: [[index, 1, data]] });
  //   this.replaceState({ records: records });
  // },

  // credits: function() {
  //   var credits = this.state.records.filter(function(val) {
  //     return val.amount >= 0
  //   });
  //   return credits.reduce(function(prev, curr) {
  //     return prev + parseFloat(curr.amount);
  //   }, 0)
  // },

  // debits: function() {
  //   var debits = this.state.records.filter(function(val) {
  //     return val.amount < 0
  //   });
  //   return debits.reduce(function(prev, curr) {
  //     return prev + parseFloat(curr.amount)
  //   }, 0)
  // },

  // balance: function() {
  //   return this.debits() + this.credits();
  // },

  render: function() {
    return(
      <div className="col-md-8 nopadding skin">
         <div className="padding-50 wow fadeInDown" data-wow-delay="0.3s" data-wow-offset="10">

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
                    <div className="row wow fadeInLeft" data-wow-delay="0.4s" data-wow-offset="10" data-wow-duration="2s">
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
                    <div className="row wow fadeInLeft" data-wow-delay="0.6s" data-wow-offset="10" data-wow-duration="2.5s">
                     <div className="col-sm-1 col-md-3 ">
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
                    <div className="row wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="3s" data-wow-offset="10">
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
    );
  }
});
