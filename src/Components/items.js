import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'reactstrap';

class Items extends Component {
constructor(props){
    super(props);
    this.state = {
        isCheck: true
    }

    this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event){
  this.setState({isCheck: event.target.checked});
}

  render() {
    return (
      <>
        <ListGroup>
          <ListGroupItem >
          <input type="checkbox" checked={this.state.isCheck} onChange={this.handleInputChange} /> Estudier React
          </ListGroupItem>
        </ListGroup>
      </>
    );
  }
}

export { Items };
