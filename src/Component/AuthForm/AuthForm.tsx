import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { customAxios } from "../../API/customAxios";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../Pages/context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type MyFormData = {
  email: string;
  password: string;
  passwordConfirm: string;
};

function AuthForm() {
  const notify = (message: string) => toast.error(message);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<MyFormData>({ mode: "onChange" });

  const password = watch("password");

  const [inputType, setInputType] = useState("password");
  const [hasInput, setHasInput] = useState(false);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const userContext = useContext(UserContext);

  if (!userContext) {
    // Error handling code here. For example:
    throw new Error("UserContext is null");
  }

  const { setToken } = userContext;

  const onSubmitHandler: SubmitHandler<MyFormData> = async (data) => {
    try {
      if (location.pathname === "/signin") {
        const loginRes = await customAxios.post("auth/signin", data);
        if (loginRes) {
          const login_token = loginRes.data.access_token;
          localStorage.setItem("access_token", login_token);
          setToken(login_token);
          navigate("/todo");
        }
      } else {
        const signupRes = await customAxios.post("auth/signup", data);
        if (signupRes) {
          navigate("/signin");
        }
      }
    } catch (error: any) {
      let errMsg = error.response.data.message;
      if (errMsg === "Unauthorized") {
        errMsg = "비밀번호를 다시 확인해주세요.";
      }
      notify(errMsg);
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-10 h-7 font-medium text-2xl">
        {location.pathname === "/signin" ? "로그인" : "이메일로 회원가입"}
      </h1>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col">
        <fieldset className="block mb-4">
          <label className="text-xs block" htmlFor="email">
            이메일
          </label>
          <input
            className="w-80 text-sm px-2 py-2 border-b block outline-0 focus:border-sky-500"
            type="email"
            id="email"
            placeholder="todo@list.com"
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "이메일 형식에 맞춰주세요",
              },
            })}
          />
          {errors.email && (
            <span className="text-warn_red text-xsm ">
              {errors.email.message}
            </span>
          )}
        </fieldset>
        <fieldset className="block mb-4 relative">
          <label className="text-xs" htmlFor="password">
            비밀번호
          </label>
          <input
            className="w-80 text-sm px-2 py-2 border-b block outline-0 focus:border-sky-500"
            type={inputType}
            id="password"
            placeholder="특수문자,숫자,영문자 조합 8글자 이상"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                message:
                  "특수문자, 숫자, 영문자 조합 8글자 이상을 입력해주세요.",
              },
            })}
            onChange={(e) => {
              setHasInput(e.target.value !== "");
              register("password").onChange(e); // 통합된 onChange 이벤트 핸들러 실행
            }}
          />
          {hasInput &&
            (inputType === "password" ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                onClick={togglePasswordVisibility}
                className="cursor-pointer absolute right-2 top-9"
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                onClick={togglePasswordVisibility}
                className="cursor-pointer absolute right-2 top-9"
              />
            ))}
          {errors.password && (
            <span className="text-warn_red text-xsm">
              {errors.password.message}
            </span>
          )}
        </fieldset>
        {location.pathname === "/signup" ? (
          <fieldset>
            <label className="text-xs" htmlFor="passwordConfirm">
              비밀번호 확인
            </label>
            <input
              className="w-80 text-sm px-2 py-2 border-b block outline-0 focus:border-sky-500"
              type="password"
              id="passwordConfirm"
              placeholder="비밀번호 재입력"
              {...register("passwordConfirm", {
                required: "비밀번호를 한번 더 입력해주세요",
                validate: (value) =>
                  value === password || "입력한 비밀번호가 일치하지 않습니다.",
              })}
            />
            {errors.passwordConfirm && (
              <span className="text-warn_red text-xsm">
                {errors.passwordConfirm.message}
              </span>
            )}
          </fieldset>
        ) : null}

        <button
          type="submit"
          className={`text-white font-bold py-2 h-11 mt-8 mb-5 rounded-full text-sm ${
            isValid ? "bg-sky-500" : "bg-sky-200"
          } `}
          disabled={!isValid}
        >
          {location.pathname === "/signin" ? "로그인" : "다음"}
        </button>
        <Link to="/signup" className="text-sm text-center">
          {location.pathname === "/signin" ? "이메일로 회원가입" : null}
        </Link>
      </form>
      <ToastContainer />
    </section>
  );
}

export default AuthForm;
