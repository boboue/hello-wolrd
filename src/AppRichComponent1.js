import React, {Component} from 'react';

class AppRichComponent1 extends Component {
    constructor(props){
        super(props);
        let firstName = this.props.name.split(" ")[0];

        this.state= {
            name:firstName
    }
       }
    
    render() {
        return (<>
        <h1>Hello, {this.props.name}! </h1>
        </>);
        
    }
}
export default AppRichComponent1;

