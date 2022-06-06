const e = React.createElement;

class ItalicText extends React.Component {
  render() {
    return e('i', {}, this.props.text)
  }
}

class HelloWorld extends React.Component {
  render() {
    return e('h1', {}, ['Hello World, ', this.props.children]);
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(
  e(HelloWorld, {},
    e(ItalicText, {text: 'React'}
    )
  ),
  domContainer
);