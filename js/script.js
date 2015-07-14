var TweetBox = React.createClass({
	getInitialState: function() {
		return {
			text: ""
		}
	},
	handleChange: function(event) {
		this.setState({ text: event.target.value })
	},
  	render: function() {
	    return (
	      <div className="well clearfix">
	        <textarea className="form-control" onChange={this.handleChange}></textarea>
	        <br/>
	        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>

	      </div>
	    );
  }
});

React.render(
  <TweetBox />,
  document.getElementById('tweet')
);


// // Initially disable the button
// $("button").prop("disabled", true);

// // When the value of the text area changes...
// $("textarea").on("input", function() {
//   // If there's at least one character...
//   if ($(this).val().length > 0) {
//     // Enable the button.
//     $("button").prop("disabled", false);
//   } else {
//     // Else, disable the button.
//     $("button").prop("disabled", true);
//   }
// });