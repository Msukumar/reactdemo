import React, { Component } from "react";
import axios from 'axios';
class Home extends Component {
  state = {
    data : []
  };

  constructor(){
    super();
  }

  componentDidMount = () => {
    let self = this;
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
         self.setState({ 
           data : response.data}
           );
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    render() {
      return (
  <table class="table" style={{marginTop : 15}}>
  <thead class="thead-dark">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
    </tr>
  </thead>
  <tbody>
    {this.state.data.map(item => {
     return <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
    })}

   
  </tbody>
</table>

      );
    }
}

export default Home;
