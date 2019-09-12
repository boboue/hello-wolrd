import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { AddItemForm } from "./addItemForm";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: true,
      isAddItemOpen: false,
      todoList: [
        "Estudier React",
        "Laver Lévi",
        "Emener le pain-embolozo à YUMBA"
      ]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.openAddItemModal = this.openAddItemModal.bind(this);    
    this.addTodoItem = this.addTodoItem.bind(this);   
    this.closeAddItemModal = this.closeAddItemModal.bind(this);
  }

  handleInputChange(event) {
    this.setState({ isCheck: event.target.checked });
  }

  openAddItemModal() {
    this.setState({ isAddItemOpen: true });
  }

  closeAddItemModal() {
    this.setState({ isAddItemOpen: false });
  }

  addTodoItem(item){    
    debugger
    this.setState({todoList: [...this.state.todoList, item]})
  }

  listGroupItem(){     
    return this.state.todoList.map(item => {
      return (
        <ListGroupItem key={item}>
          <input
            type="checkbox"
            checked={this.state.isCheck}
            onChange={this.handleInputChange}
          />
          {item}
        </ListGroupItem>
      );
    });
}

  render() {
    return (
      <>
        <Button color="primary" onClick={this.openAddItemModal}>
          Ajouter
        </Button>
        <br />
        <br />
        <ListGroup>
          {this.listGroupItem()}
        </ListGroup>

        <AddItemForm isOpen={this.state.isAddItemOpen} addTodoItem={this.addTodoItem} closeAddItemModal={this.closeAddItemModal} />
      </>
    );
  }
}

export { Items };
