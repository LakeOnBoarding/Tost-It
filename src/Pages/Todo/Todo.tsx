// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
import Button from "../../Component/Button/Button";

function Todo() {
  // const token = useContext(UserContext);

  return (
    <div className="bg-main_skyblue flex flex-col justify-center items-center h-screen">
      <section className="bg-main_bg_cloud max-w-7xl w-98 rounded-xl">
        <h1 className="font-mono pl-10 pt-9 text-3xl font-semibold">Today</h1>
        <p className="font-mono  pl-10 pt-3 text-sm">
          What are you working on today?
        </p>
        <div className="p-10 grid grid-cols-2 gap-4">
          <div className="w-50 h-32 bg-post_red">포스트잇1개</div>
          <div className="w-50 h-32 bg-post_red">포스트잇1개</div>
          <div className="w-50 h-32 bg-post_red">포스트잇1개</div>
          <div className="w-50 h-32 bg-post_red">포스트잇1개</div>
          <div className="w-50 h-32 bg-post_red">포스트잇1개</div>
          <div className="w-50 h-32 bg-post_red">포스트잇1개</div>
        </div>
      </section>
      <section className="w-96  mt-5 flex-row text-lx ">
        <Button size="small" onClick={() => console.log("아침")}>
          아침
        </Button>
        <Button size="small" onClick={() => console.log("점심")}>
          점심
        </Button>
        <Button size="small" onClick={() => console.log("저녁")}>
          저녁
        </Button>
        <Button size="medium" onClick={() => console.log("gkfdlf")}>
          오늘의 할 일
        </Button>
      </section>
    </div>
  );
}

export default Todo;
