'use strict';
// require the react package 
// (require("react/addons") is also possible)
var React = require("react");

// Create react components with jsx
var HelloWorld = React.createClass({
	render: function() {
		return <div>
			<h1>Hello World</h1>
		</div>;
	}
});

// Render the components
React.render(<HelloWorld />, document.getElementById('app'));
