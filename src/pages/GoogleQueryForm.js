import React from 'react';
import './App.css';
import axios from 'axios'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestAddress: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=string&inputtype=textquery&fields=outputs&key=YOUR_API_KEY',
      input: '',
      key: 'API_KEY_HERE',
      formatted_address: '',
      name: '',
      placeid: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.input});
  }

  handleSubmit(event) {
    alert('A location was submitted: ' + this.state.input);
    axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?' 
      + 'input=' + this.state.input + '&inputtype=textquery&fields=name,formatted_address,placeid&key=' + this.state.key)
    .then(response => this.setState({name: response.data.name, formatted_address: response.data.formatted_address, placeid: response.data.placeid}))
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Location:
            <input type="text" input={this.state.input} onChange={this.handleChange} />
          </label>
          <input type="submit" input="Submit" />
        </form>
        
        <div>
          <p>{this.state.input}</p>
        </div>
      </div>
    );
  }
}
export default NameForm;