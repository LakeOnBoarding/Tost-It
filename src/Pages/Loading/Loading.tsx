import Spinner from "../../assets/images/loadingSpinner.gif";

function Loading() {
  return (
    <div className="bg-main_skyblue flex justify-center items-center h-screen">
      <section className="rounded-md">
        <img src={Spinner} alt="로딩중" className="rounded-md" />
      </section>
    </div>
  );
}

export default Loading;
