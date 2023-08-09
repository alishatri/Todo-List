import AddNewTodo from "../components/add-new-todo";
import TodoList from "../components/todo-list";
import { styled } from "styled-components";
import FilterButton from "../components/filter-button";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import useTodoStore from "@/store/todoStore";
import { useState } from "react";

const Main = styled.div`
  width: 1200px;
  margin:80px auto;
`;

export default function Home() {
  const [filterMode, setFilterMode] = useState("all");
  const todo = useTodoStore((state) => state.todos);

  const allTodos = () => {
    setFilterMode("all");
  };

  const completedTodos = () => {
    setFilterMode("completed");
  };

  const incompleteTodos = () => {
    setFilterMode("incomplete");
  };

  const filteredTodos = filterMode === "all"
    ? todo
    : filterMode === "completed"
    ? todo.filter(item => item.completed)
    : todo.filter(item => !item.completed);

  return (
    <Main>
      <section>
        <AddNewTodo />
       <div style={{ display: "flex", gap: "20px"}}>
       <FilterButton
            label="All"
            clickEvent={allTodos}
          />
          <FilterButton
            label="Completed"
            clickEvent={completedTodos}
          />
          <FilterButton
            label="Incomplete"
            clickEvent={incompleteTodos}
          />
        </div>
      </section>
    {filteredTodos.length > 0 ? <TodoList /> :
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "60px",
        }}>
        <main style={{ textAlign: "center" }}>
          <h3>You don’t have any tasks</h3>
          <PlusCircleIcon width={109} color="gray" />
          <h3 style={{ color: "rgba(52,64,84,0.5)" }}>Create Task</h3>
        </main>
      </section>}
    </Main>
  );
}
