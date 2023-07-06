import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Component/Button/Button";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="bg-main_skyblue flex flex-col justify-center items-center h-screen">
      <section className="bg-main_bg_cloud max-w-7xl w-80 rounded-xl h-600  flex flex-col justify-center items-center">
        <h1 className="font-black text-9xl font-mono">404</h1>
        <p className="text-xl font-mono mt-4 mb-4">Page Not Found</p>
        <FontAwesomeIcon
          icon={faBan}
          beat
          className="text-9xl mt-11"
          color="#2a416a"
        />
        <div className="mt-20">
          <Button
            onClick={() => {
              navigate("/");
            }}
            size="medium"
          >
            Go Home
          </Button>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
