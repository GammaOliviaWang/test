const e = React.createElement;

class HelloWorld extends React.Component {
  render() {
    return e('h1', {}, 'Hello World,' + this.props.name);
    //多了this.props.name的部分，代表該組件可以接受1個名稱為name的Props參數
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(HelloWorld, {name: 'React'}), domContainer);
//將name傳進去Props的部分是e(HelloWorld,{name:'React'})