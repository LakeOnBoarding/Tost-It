import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../../Component/Button/Button";
import PostItem from "../../Component/PostItem/PostItem";
import { TodoItem } from "../Todo/Todo";
import { customAuthAxios } from "../../API/customAxios";

function Category() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [categoryTodoList, setCategoryTodoList] = useState<TodoItem[]>([]);

  const timeState = useRef("");

  const getTodo = async () => {
    try {
      const todoRes = await customAuthAxios.get("todos");
      if (state === "아침") {
        setCategoryTodoList(
          todoRes.data.filter((postIt: TodoItem) => {
            return postIt.todo.slice(-1) === "1";
          })
        );
      } else if (state === "점심") {
        setCategoryTodoList(
          todoRes.data.filter((postIt: TodoItem) => {
            return postIt.todo.slice(-1) === "2";
          })
        );
      } else if (state === "저녁") {
        setCategoryTodoList(
          todoRes.data.filter((postIt: TodoItem) => {
            return postIt.todo.slice(-1) === "3";
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  // 카테고리 분류 로직
  useEffect(() => {
    if (state === "아침") {
      timeState.current = "morning";
    } else if (state === "점심") {
      timeState.current = "afternoon";
    } else if (state === "저녁") {
      timeState.current = "evening";
    }
  }, [state]);

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
                  isCompleted={postIt.isCompleted}
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
