const e = React.createElement;

class HelloWorld extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        count: 0,
      }
  }
  render() {
    return e('h1', {}, 'Hello World, ' + this.props.name + ' ' + this.state.count);
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(HelloWorld, {name: 'React'}), domContainer);