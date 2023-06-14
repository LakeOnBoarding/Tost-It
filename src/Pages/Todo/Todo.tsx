// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
import { useState } from "react";
import Button from "../../Component/Button/Button";
import PostItem from "../../Component/PostItem/PostItem";
import SelectInputBox from "../../Component/SelectInputBox/SelectInputBox";

function Todo() {
  // const token = useContext(UserContext);
  const [showInp, setShowInp] = useState<boolean>(false);

  const handleShowInput = () => {
    setShowInp(true);
  };

  return (
    <div className="bg-main_skyblue flex flex-col justify-center items-center h-screen">
      <section className="bg-main_bg_cloud max-w-7xl w-98 rounded-xl">
        <h1 className="font-mono pl-10 pt-9 text-3xl font-semibold">Today</h1>
        <p className="font-mono  pl-10 pt-3 text-sm">
          What are you working on today?
        </p>
        <div className="p-10 grid grid-cols-2 gap-4">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </div>
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
