import React, { Component } from 'react'

 class TDV_Form1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Tran Duy Vu "
        }
    }
    //ham xu ly su kien
    handleChange = (ev)=>{
        //lay gia tri khi thay doi tren form
        let ten = ev.target.name;
        let gtri = ev.target.value;
        //Cap nhat state
        this.setState({
           [ten]:gtri
          //studentName:ev.target.value
        })
    }
    handleSubmit=(ev)=>{
        ev.preventDefault();
        //lay gia tri moi trong state
        alert(this.state.studentName)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Ho va ten</label>
                <input name='studentName' value={this.state.studentName}
                     onChange={this.handleChange}/>
                   
            </div>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default TDV_Form1