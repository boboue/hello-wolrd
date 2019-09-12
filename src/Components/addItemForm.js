import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input,
  Form
} from "reactstrap";
import PropTypes from "prop-types";

class AddItemForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      item:""
    }
       
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }

  handleSubmit (){
    debugger
    this.props.addTodoItem(this.state.item);
    this.props.closeAddItemModal()
  }

  handelChange (event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <>
        <Modal isOpen={this.props.isOpen}>
          <ModalHeader >
            Vos informations:
          </ModalHeader>
          <ModalBody>
            <Form id="addItemForm" >
              <FormGroup>                
              <Label for="todoItem">Tâche: </Label>
                <Input type="text" name="item" id="todoItem" value={this.state.item} onChange={this.handelChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Valider
            </Button>
            <Button color="secondary" onClick={this.props.closeAddItemModal}>
              Annuler
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

AddItemForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  addTodoItem: PropTypes.func.isRequired,
  closeAddItemModal: PropTypes.func.isRequired,
};

export { AddItemForm };
