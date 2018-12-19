import React, { Component } from "react";
import axios from 'axios';
import User from './user';

class Home extends Component {
  state = {
    data : []
  };

  deleteUser = (id) => {
    const result = this.state.data.filter(person => person.id !== id);
    this.setState({
      data : result
    });
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
  <table className="table" style={{marginTop : 15}}>
  <thead className="thead-dark">
    <tr>
      <th scope="col">Action</th>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.data.map(item => {
        return <User value={item} key={item.id.toString()} delete={this.deleteUser}/>
      })
    }

   
  </tbody>
</table>

      );
    }
}

export default Home;
