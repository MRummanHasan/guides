class CustomeLink extends React.Component {
	render() {
		return React.createElement('a', { href: this.props.link }, this.props.linkText);
	}
}

var ffc = React.createElement(CustomeLink, { link: 'https://www.freecodecamp.org', linkText: 'FreeCodeCamp' });
var hacktober = React.createElement(CustomeLink, { link: 'https://hacktoberfest.digitalocean.com', linkText: 'Hactober' });
var br = React.createElement('br');
ReactDOM.render(
	React.createElement('div', null, br, ffc, br, hacktober),
	document.getElementById('container')
);