import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-10 h-7 font-medium text-2xl">로그인</h1>
      <form action="" className="flex flex-col w-80">
        <label className="text-xs" htmlFor="email">
          이메일
        </label>
        <input
          className="text-sm px-2 py-2 mb-4 border-b"
          type="email"
          id="email"
          placeholder="todo@list.com"
        />
        <label className="text-xs" htmlFor="password">
          비밀번호
        </label>
        <input
          className="text-sm px-2 py-2 border-b"
          type="password"
          id="password"
          placeholder="특수문자,숫자,영문자 조합 8글자 이상"
        />
        <button className="text-white font-bold py-2 h-11 bg-sky-400 mt-8 mb-5 rounded-full text-sm">
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
