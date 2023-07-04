import { MouseEvent } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../Component/Button/Button";
import PostItem from "../../Component/PostItem/PostItem";
import SelectInputBox from "../../Component/SelectInputBox/SelectInputBox";
import { customAuthAxios } from "../../API/customAxios";

export interface TodoItem {
  id: number;
  todo: string;
  isCompleted: boolean;
  useId: number;
}

function Todo() {
  const [showInp, setShowInp] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const navigate = useNavigate();
  const token = useContext(UserContext);
  // console.log("todo페이지 토큰확인", token);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  const handleShowInput = () => {
    setShowInp(true);
  };

  const getTodo = async () => {
    try {
      const todoRes = await customAuthAxios.get("todos");
      setTodoList(todoRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleViewCategory = (e: MouseEvent<HTMLButtonElement>) => {
    const timeCategory = e.currentTarget.innerText;
    navigate("/todo/category", {
      state: {
        type: timeCategory,
        data: todoList,
      },
    });
  };

  return (
    <div className="bg-main_skyblue flex flex-col justify-center items-center h-screen">
      <section className="bg-main_bg_cloud max-w-7xl w-98 rounded-xl h-600 relative">
        <div className="sticky top-0 pb-5 rounded-t-xl bg-main_bg_cloud ">
          <h1
            className="font-mono pl-10 pt-9 text-3xl font-semibold cursor-pointer"
            onClick={() => {
              location.reload();
            }}
          >
            Today
          </h1>
          <p className="font-mono  pl-10 pt-3 text-sm">
            What are you working on today?
          </p>
        </div>
        <ul className="h-fit max-h-450 pt-5 pb-5 pr-10 pl-10 grid grid-cols-2 gap-4 overflow-y-scroll">
          {todoList.map((postIt) => {
            return (
              <PostItem
                key={postIt.id}
                todoId={postIt.id}
                todoList={todoList}
                setTodoList={setTodoList}
                isCompleted={postIt.isCompleted}
              >
                {postIt.todo}
              </PostItem>
            );
          })}
        </ul>
      </section>
      {!showInp && (
        <section className="w-96  mt-5 flex-row text-lx">
          <Button size="small" onClick={handleViewCategory}>
            아침
          </Button>
          <Button size="small" onClick={handleViewCategory}>
            점심
          </Button>
          <Button size="small" onClick={handleViewCategory}>
            저녁
          </Button>
          <Button size="medium" onClick={handleShowInput}>
            오늘의 할 일
          </Button>
        </section>
      )}

      {showInp && (
        <section className="w-96  mt-5 flex-row text-lx">
          <SelectInputBox todoList={todoList} setTodoList={setTodoList} />{" "}
        </section>
      )}
    </div>
  );
}

export default Todo;
