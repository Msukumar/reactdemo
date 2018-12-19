import React, { Component } from 'react';
import '../css/common.css';

class LoaderTpl extends Component {
    state = {  }
    render() { 
        return ( <div class="cssload-thecube">
        <div class="cssload-cube cssload-c1"></div>
        <div class="cssload-cube cssload-c2"></div>
        <div class="cssload-cube cssload-c4"></div>
        <div class="cssload-cube cssload-c3"></div>
    </div> );
    }
}
 

const Loader = (TargetComponent) => {
    return class Loader extends Component {
        
        constructor(props) {
            super(props);
        }
        render() {
            console.log("loading props " , this.props);
            return this.props.value.size ? <TargetComponent {...this.props} /> : <LoaderTpl></LoaderTpl>
        }
    }
}

export default Loader;