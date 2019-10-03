import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { AddItemForm } from "./addItemForm";

const Items = () => {
  const [isCheck, setIsCheck] = useState(true);
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const [todoList, setTodoList] = useState([
    "Estudier React",
    "Laver Lévi",
    "Emener le pain-embolozo à YUMBA"
  ]);

  const handleInputChange = event => {
    setIsCheck(event.target.checked);
  };

  const openAddItemModal = () => {
    setIsAddItemOpen(true);
  };

  const closeAddItemModal = () => {
    setIsAddItemOpen(false);
  };

  const addTodoItem = item => {
    setTodoList([...todoList, item]);
  };

  const listGroupItem = () => {
    return todoList.map(item => {
      return (
        <ListGroupItem key={item}>
          <input
            type="checkbox"
            checked={isCheck}
            onChange={handleInputChange}
          />
          {item}
        </ListGroupItem>
      );
    });
  };

  return (
    <>
      <Button color="primary" onClick={openAddItemModal}>
        Ajouter
      </Button>
      <br />
      <br />
      <ListGroup>{listGroupItem()}</ListGroup>

      <AddItemForm
        isOpen={isAddItemOpen}
        addTodoItem={addTodoItem}
        closeAddItemModal={closeAddItemModal}
      />
    </>
  );
};

export { Items };
