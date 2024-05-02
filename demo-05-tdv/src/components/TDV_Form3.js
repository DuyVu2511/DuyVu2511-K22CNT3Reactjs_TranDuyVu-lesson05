import React, { Component } from 'react'

class TDV_Form3 extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:'Duy Vu',
            age:20,
            course:'ReactJs'
        }
    }
    handleChange=(ev)=>{
        let name=ev.target.name;
        let val = ev.target.value;
        this.setState({
            [name]:val
        })
    }
    handleSubmit=(ev)=>{
        ev.preventDefault();
        alert(this.state.studentName +"\n" + this.state.age + "\n" + this.state.course)
        let obj = {
            studentName:this.state.studentName,
            age:this.state.age,
            course:this.state.course
        }
        // gui du lieu len App
        this.props.onSubmit(obj)
    }
  render() {
    return (
      <div>
        <form name="tdvForm">
            <div>
                <label>Ho va ten</label>
                <input name='studentName' 
                    value={this.state.studentName}
                    onChange={this.handleChange}/>
            </div>
            <div>
                <label>Tuoi</label>
                <input name='age' 
                    value={this.state.age}
                    onChange={this.handleChange}/>
                   
            </div>
            <div>
                <label>Khoa hoc</label>
                <select name="course" 
                    value={this.state.course} 
                    onChange={this.handleChange}>
                    <option value='HTML'>HTML</option>
                    <option value='CSS'>CSS</option>
                    <option value='JS'>JS</option>
                    <option value='ReactJS'>ReactJS</option>
                </select>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default TDV_Form3;