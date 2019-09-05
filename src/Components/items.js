import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { AddItemForm } from "./addItemForm";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: true,
      isAddItemOpen: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.openAddItemModal = this.openAddItemModal.bind(this);
  }

  handleInputChange(event) {
    this.setState({ isCheck: event.target.checked });
  }

  openAddItemModal(){
    this.setState({isAddItemOpen:true})
  }

  render() {
    return (
      <>
        <Button color="primary" onClick={this.openAddItemModal}>
          Ajouter
        </Button>
        <ListGroup>
          <ListGroupItem>
            <input
              type="checkbox"
              checked={this.state.isCheck}
              onChange={this.handleInputChange}
            />{" "}
            Estudier React
          </ListGroupItem>
        </ListGroup>

        <AddItemForm isOpen={this.state.isAddItemOpen} />
      </>
    );
  }
}

export { Items };
