//All Components have been written here separately and used in the
var React = require('react');

//styling part for the each components used like class in html
var htag = {
  color: "white",
  fontfamilty: "Helvetica",
  fontsize: "20px",
  padding: "20px"
};

var btn = {
  borderradius: "1px solid #555",
  width: "200px",
  height: "40px",
  lineheight: "40px",
  margintop: "20px",
  textwight: "bold"
};

//1st Component
var Title = React.createClass({
  render : function() {
    return (
      <h3 style={htag}>TITLE: {this.props.showTitle} </h3>
    );
  }
});

//2nd Component
var Picturez = React.createClass({
  render: function(){
    return (
      <img src={this.props.showPicturez} alt="Company Picture" style={{height:400, width:800}} />
    );
  }
});

//3rd Component
var ShowInfo = React.createClass({
  render: function() {
    return (
      <div>
      <p style={htag}>Description: {this.props.showDescrp}</p>
      <h5 style={htag}>Company Name: {this.props.showName}</h5>
      </div>
    );
  }
});

//
var Show = React.createClass({
  //initialize the index = 0
  getDefaultProps: function() {
    return {
      showIndex: 0
    };
  },

  //method to initilise
  getInitialState: function(){
    return {
      showIndex:this.props.showIndex
    };
  },

  handleBtnClick: function(){
      var totalShows = this.props.shows.length;
      this.setState(function(prevState) {
        return {
          showIndex: (prevState.showIndex + 1) % totalShows //fixing the problem of index to start the slide
        };
      });
  },

  render: function() {
    var show = this.props.shows[this.state.showIndex];
    return (
      <div className="text-center">
        <Title showTitle={show.title}/>
        <Picturez showPicturez={show.picturez}/>
        <ShowInfo showDescrp={show.descrip} showName={show.Company_name}/>
        <button style={btn} onClick={this.handleBtnClick}>NEXT SLIDE</button>
      </div>
    );
  }
});

module.exports = Show;
