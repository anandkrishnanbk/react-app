import React from 'react';
import  { BrowserRouter as Router, Route} from 'react-router-dom';

const Home = () => <h1>Home</h1>

class App extends React.Component
{
  render()
  {
    return (
    <Router>
    <div>
      <Route exact path="/"  component = {Home} />
      <Route path="/about" render ={() => <h1>About</h1>} />
    </div>
    </Router>
  )
  }

  // constructor()
  // {
  //   super();
  //   this.update = this.update.bind(this);
  //   this.state=
  //   {
  //     currentEvent:'___'
  //     //cat:0
  //   }
  // }
  // update(e)
  // {
  //     //this.setState({txt:e.target.value});
  //     this.setState({currentEvent: e.type});
  // }
  // render()
  // {
  //   return <div>
  //     <textarea
  //     onKeyPress={this.update}
  //     onCopy={this.update}
  //     onCut={this.update}
  //     onPaste={this.update}
  //     onFocus={this.update}
  //     onBlur={this.update}
  //     onDoubleClick={this.update}
  //     onTouchStart={this.update}
  //     onTouchMove={this.update}
  //     onTouchEnd={this.update}
  //     cols="30"
  //     rows="10" />
  //     <h1>{this.state.currentEvent}</h1>
  //   </div>
  // }
  // render()
  // {
  //   return <div>
  //     <Widget update={this.update.bind(this)} />
  //     <Widget update={this.update.bind(this)} />
  //     <Widget update={this.update.bind(this)} />
  //     <Widget update={this.update.bind(this)} />
  //     <Widget update={this.update.bind(this)} />
  //   </div>
  // }
}

// const Widget = (props) =>
// <input type="text" onChange={props.update} />

export default App;
