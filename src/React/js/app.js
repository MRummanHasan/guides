// ReactDOM.render(
//     React.createElement('h1', {title: 'hello world'}, 'Hello World'),
//     document.getElementById('container')
// );


class MyName extends React.Component {
	render() {
		return React.createElement('h1', null, this.props.customeName);
	}
}

var git = React.createElement(MyName, { customeName: 'Git World' });
var digialOcean = React.createElement(MyName, { customeName: 'Hello Fishes' });

ReactDOM.render(
	React.createElement('div', null, git, digialOcean),
	document.getElementById('container')
);

let h1 = React.createElement('h1', null, 'HELLO WORLD !!')
class HelloWorld extends React.Component {
	render() {
		return React.createElement('div', null, h1, git, digialOcean);
	}
}
ReactDOM.render(
	React.createElement(HelloWorld, null),
	document.getElementById('container')
)