

import { Component } from "react";

const INITIAL_STATE = {
      filterValue: "",
    agreed: false,
    username: '',
    gender: '',
    age: ''
}

class App extends Component {
  state = {
    ...INITIAL_STATE
  };

  handleChange = (e) => {
    console.log(e.target.name);
    const {value, name, checked, type} = e.target
    console.log(checked, type);
    this.setState(
      {
        [name] : type === "checkbox" ? checked : value
      }
    ) 
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const userName = form.elements.username.value;
    console.log(userName)
    this.setState({
      ...INITIAL_STATE
    })
  }


  render() {
    const {username, gender, age, agreed} = this.state
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter name" value={username} onChange={this.handleChange} name="username" />
          <div className="genders">
          <label> Male
            <input type="radio" name="gender" value="male" checked={gender === "male"}  onChange={this.handleChange}/>
          </label>
          <label> Female
            <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={this.handleChange}/>
          </label>
          </div>
          <label> Chose your age
            <select name="age" value={age} onChange={this.handleChange}>
              <option value=""></option>
              <option value="0-18">18-</option>
              <option value="19+">18+</option>
            </select>
          </label>
          <input type="checkbox" name="agreed" checked={agreed} onChange={this.handleChange}/>
          <button disabled={!agreed} type="submit">Submit</button>
        </form>

      </>
    );
  }
}

export default App;
