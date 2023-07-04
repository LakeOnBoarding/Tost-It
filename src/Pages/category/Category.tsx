import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../../Component/Button/Button";
import PostItem from "../../Component/PostItem/PostItem";
import { TodoItem } from "../Todo/Todo";

function Category() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [categoryTodoList, setCategoryTodoList] = useState([...state.data]);

  const timeState = useRef("");
  console.log(timeState);

  useEffect(() => {
    if (state.type === "아침") {
      timeState.current = "morning";
      setCategoryTodoList(
        categoryTodoList.filter((postIt: TodoItem) => {
          return postIt.todo.slice(-1) === "1";
        })
      );
    } else if (state.type === "점심") {
      timeState.current = "afternoon";
      setCategoryTodoList(
        categoryTodoList.filter((postIt: TodoItem) => {
          return postIt.todo.slice(-1) === "2";
        })
      );
    } else if (state.type === "저녁") {
      timeState.current = "evening";
      setCategoryTodoList(
        categoryTodoList.filter((postIt: TodoItem) => {
          return postIt.todo.slice(-1) === "3";
        })
      );
    }
  }, []);

  return (
    <div className="bg-main_skyblue flex flex-col justify-center items-center h-screen">
      <section className="bg-main_bg_cloud max-w-7xl w-98 mb-5 rounded-xl h-600 relative">
        <div className="sticky top-0 pb-5 rounded-t-xl bg-main_bg_cloud ">
          <h1 className="font-mono pt-9 text-4xl text-center font-bold">
            {timeState.current}
          </h1>
          <ul className="h-fit max-h-450 pt-5 pb-5 pr-10 pl-10 grid grid-cols-2 gap-4 overflow-y-scroll">
            {categoryTodoList.map((postIt: TodoItem) => {
              return (
                <PostItem
                  key={postIt.id}
                  todoId={postIt.id}
                  todoList={categoryTodoList}
                  setTodoList={setCategoryTodoList}
                  isCompleted={state.data}
                >
                  {postIt.todo}
                </PostItem>
              );
            })}
          </ul>
        </div>
      </section>
      <Button
        size="large"
        onClick={() => {
          navigate("/todo");
        }}
      >
        이전으로
      </Button>
    </div>
  );
}

export default Category;
