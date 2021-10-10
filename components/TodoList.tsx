import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import palette from "../styles/palette";
import { TodoType } from "../types/todo";

const Container = styled.div`
  width: 100%;

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
  }
`;

interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  const getTodoColorNums = useCallback(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach((todo) => {
      if (todo.color === "red") {
        red += 1;
      }
      if (todo.color === "orange") {
        orange += 1;
      }
      if (todo.color === "yellow") {
        yellow += 1;
      }
      if (todo.color === "green") {
        green += 1;
      }
      if (todo.color === "blue") {
        blue += 1;
      }
      if (todo.color === "navy") {
        navy += 1;
      }
    });

    return {
      red,
      orange,
      yellow,
      green,
      blue,
      navy,
    };
  }, [todos]);

  const todoColorNums = useMemo(getTodoColorNums, [todos]);

  type ObjectIndexType = {
    [key: string]: number | undefined;
  };

  const todoColorNum2 = useMemo(() => {
    const colors: ObjectIndexType = {};
    todos.forEach((todo) => {
      const value = colors[todo.color];
      if (!value) {
        colors[`${todo.color}`] = 1;
      } else {
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);
  console.log("TODO 2", todoColorNum2);

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO<span>{todos.length}</span>
        </p>
      </div>
    </Container>
  );
};

export default TodoList;
