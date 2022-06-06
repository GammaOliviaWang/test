const e = React.createElement;
//將React.createElement函式指定給e

class HelloWorld extends React.Component {
  render() {
    return e('h1', {}, 'Hello World');
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(HelloWorld), domContainer);