import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
    state = {  }
    edit = () =>{
        console.log(this.props.value);
    }
    render() {
         return ( <tr>
            <th><button className='btn btn-primary' > <Link to={{ pathname: "/UserForm", state: { user: this.props.value}  }} style={{color: '#ffffff'}}>Edit</Link></button>
            <button className='btn btn-danger' style={{marginLeft:5}} 
            onClick={()=> {
                this.props.delete(this.props.value.id) }
            }>Delete</button></th>
           <th scope="row">{this.props.value.id}</th>
           <td>{this.props.value.name}</td>
           <td>{this.props.value.email}</td>
           <td>{this.props.value.phone}</td>
         </tr> );
    }
}
 
export default User;