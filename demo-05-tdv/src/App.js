import React, { Component } from 'react'
import TDV_Form1 from './components/TDV_Form1';
import TDV_Form2 from './components/TDV_Form2';
import TDV_Form3 from './components/TDV_Form3';

class App extends Component {
  handleSubmit=(param)=>{
    console.log(param);
  }
  render() {
    return (
      <div>
        <h1>Event - Form - Controlled Component</h1>
        <div>
          <TDV_Form1/>
          <TDV_Form2/>
          <TDV_Form3 onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default App;