import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { customAxios } from "../../API/customAxios";

type MyFormData = {
  email: string;
  password: string;
};

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<MyFormData>({ mode: "onChange" });

  const onSubmitHandler: SubmitHandler<MyFormData> = async (data) => {
    try {
      const loginRes = await customAxios.post("auth/signin", data);
      console.log(loginRes);
    } catch (err) {
      console.error(err);
    }
    console.log(data);
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-10 h-7 font-medium text-2xl">로그인</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col">
        <fieldset className="block mb-4">
          <label className="text-xs block" htmlFor="email">
            이메일
          </label>
          <input
            className="w-80 text-sm px-2 py-2 border-b block"
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
            <span className="text-red text-xsm">{errors.email.message}</span>
          )}
        </fieldset>
        <fieldset className="block mb-4">
          <label className="text-xs" htmlFor="password">
            비밀번호
          </label>
          <input
            className="w-80 text-sm px-2 py-2 border-b block"
            type="password"
            id="password"
            placeholder="특수문자,숫자,영문자 조합 8글자 이상"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[*!@#$%^&+=()-_])(?=.*[a-zA-Z\d@#$%^&+=]).{8,}$/,
                message:
                  "특수문자, 숫자, 영문자 조합 8글자 이상을 입력해주세요.",
              },
            })}
          />
          {errors.password && (
            <span className="text-red text-xsm">{errors.password.message}</span>
          )}
        </fieldset>
        <button
          type="submit"
          className={`text-white font-bold py-2 h-11 mt-8 mb-5 rounded-full text-sm ${
            isValid ? "bg-sky-500" : "bg-sky-200"
          } `}
          disabled={!isValid}
        >
          로그인
        </button>
        <Link to="/signUp" className="text-sm text-center">
          이메일로 회원가입
        </Link>
      </form>
    </section>
  );
}

export default SignIn;
