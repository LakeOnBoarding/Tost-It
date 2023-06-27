import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Component/Button/Button";
import PostItem from "../../Component/PostItem/PostItem";
import SelectInputBox from "../../Component/SelectInputBox/SelectInputBox";
import { customAuthAxios } from "../../API/customAxios";

interface TodoItem {
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
  console.log(token);

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
      console.log(todoRes);
      setTodoList(todoRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="bg-main_skyblue flex flex-col justify-center items-center h-screen">
      <section className="bg-main_bg_cloud max-w-7xl w-98 rounded-xl h-600 relative">
        <div className="sticky top-0 pb-5 rounded-t-xl bg-main_bg_cloud ">
          <h1 className="font-mono pl-10 pt-9 text-3xl font-semibold">Today</h1>
          <p className="font-mono  pl-10 pt-3 text-sm">
            What are you working on today?
          </p>
        </div>
        <ul className="h-450 pt-5 pb-5 pr-10 pl-10 grid grid-cols-2 gap-4 overflow-y-scroll">
          {todoList.map((postIt) => {
            return <PostItem key={postIt.id}>{postIt.todo}</PostItem>;
          })}
          {/* <PostItem>포스트잇1개</PostItem> */}
          {/* <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem> */}
        </ul>
      </section>
      {!showInp && (
        <section className="w-96  mt-5 flex-row text-lx">
          <Button size="small" onClick={() => console.log("아침")}>
            아침
          </Button>
          <Button size="small" onClick={() => console.log("점심")}>
            점심
          </Button>
          <Button size="small" onClick={() => console.log("저녁")}>
            저녁
          </Button>
          <Button size="medium" onClick={handleShowInput}>
            오늘의 할 일
          </Button>
        </section>
      )}

      {showInp && (
        <section className="w-96  mt-5 flex-row text-lx">
          <SelectInputBox />{" "}
        </section>
      )}
    </div>
  );
}

export default Todo;
