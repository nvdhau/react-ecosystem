import React from 'react';
import styled from 'styled-components';

const ToDoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForDate = (startDate, currentDate) => {
  return (startDate > new Date(currentDate - 86400000 * 5)
    ? 'none'
    : '2px solid red');
}

const ToDoItemContainerWithWarning = styled(ToDoItemContainer)`
  border-bottom: ${props => 
    getBorderStyleForDate(new Date(props.createdAt), Date.now())
  };
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(Button)`
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
`;

const ToDoListItem = ({ todo, onRemovePressed, onMarkAsDonePressed }) => {

  const Container = todo.isCompleted ? ToDoItemContainer : ToDoItemContainerWithWarning;

  return ( 
    <Container createdAt={todo.createdAt}>
      <h3>{ todo.text }</h3>
      <p>
        Created at:&nbsp;
        {(new Date(todo.createdAt)).toLocaleDateString()}
      </p>
      <ButtonContainer>
        { todo.isCompleted
          ? null
          : <CompletedButton
              onClick={ () => onMarkAsDonePressed(todo.id) }
            >
              Mark as Done
            </CompletedButton>
        }
        <RemoveButton
          onClick={ () => onRemovePressed(todo.id) }
        >
          Remove
        </RemoveButton>
      </ButtonContainer>
    </Container>
  );
}

export default ToDoListItem;