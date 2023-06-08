// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

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
      <section className="w-96  m-5 flex-row text-lx ">
        <button className="w-12 px-1.5 py-3 mx-2 rounded-3xl bg-point_blue text-white">
          아침
        </button>
        <button className="w-12 px-1.5 py-3 mx-2 rounded-3xl bg-point_blue text-white">
          점심
        </button>
        <button className="w-12 px-1.5 py-3 mx-2 rounded-3xl bg-point_blue text-white ">
          저녁
        </button>
        <button className="w-32 px-1.5 py-3 mx-2 rounded-3xl bg-point_blue text-white">
          오늘의 할일
        </button>
      </section>
    </div>
  );
}

export default Todo;
