

import { Component } from "react";

const INITIAL_STATE = {
      filterValue: "",
    agreed: false,
    username: ''
}

class App extends Component {
  state = {
    ...INITIAL_STATE
  };

  handleChange = (e) => {
    console.log(e.target.name);
    const {value, name} = e.target
    this.setState(
      {
        [name] : value
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
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
          <input type="checkbox" name="agreed" onChange={this.handleChange}/>
          <button disabled={!this.state.agreed} type="submit">Submit</button>
          
        </form>
        <p>filter</p>
        <input name="filetValue" onChange={this.handleChange} value={this.state.filterValue} type="text" />

      </>
    );
  }
}

export default App;
