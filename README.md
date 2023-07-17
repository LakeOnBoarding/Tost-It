# 투스트잇 Tost It !

- 🔗[배포URL](https://todolist-tostit.vercel.app/)
- 🔒서비스 이용을 위한 테스트 계정 (하지만 회원가입 기능도 동작한답니다!)<br/>  
  id : test4321@test.com <br/>
  pw : test123!
  <br/>

<details>
<summary>목차</summary>
<div markdown="1">
<br/>

1. [프로젝트 소개](#intro)
2. [사용기술 및 개발환경](#environments)
3. [프로젝트의 실행 방법](#execute)
4. [UI](#ui)
5. [프로젝트 구조](#tree)
6. [트러블 슈팅](#trouble)

</div>
</details>
<br/>

# 1. <span id="intro"> 프로젝트 소개 </span>
## Pain Point

할일은 쌓였고 무엇부터 일을 해치워야 할지 정신없을 때, 한가지 일에 시간을 잔뜩 빼앗겨 계획한 일들을 하지 못했던 적이 있나요?

## Let's improve the pain point
하루를 아침, 점심, 저녁으로 나누어 할일을 분배해 보세요 <br />
아침에는 아침의 할일에 집중합니다 <br />
점심에는 미련없이 점심의 할일을, 저녁에는 저녁의 할일을 실행합니다 <br />

# 2. <span id="environments"> 사용기술 및 개발환경 </span>
## 1) 개발기간 : 2023.05.25 ~ 2023.07.13

## 2) 기술
### FrontEnd
<div align=left>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<div/>
<br/>

### BackEnd 
제공된 API 사용

## 3) 협업 도구
<div align=left>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
<div/>
<br/>

- 🔗 [Notion](https://www.notion.so/To-Do-List-0f74a47b0d0b4d81becf6e50183bc584)

- 🔗 [Convention](https://github.com/LakeOnBoarding/todolist/wiki/Commit-Convetion)


## 4) 디자인
- 🔗 [Figma](https://www.figma.com/file/EuKK3FVb2Mr7mHN0sHwv8B/TodoList?type=design&node-id=0-1&mode=design)

<br/>

# 3. <span id="execute"> 프로젝트의 실행 방법 </span>

```
  npm install
  npm start
```

# 4. <span id="ui"> UI 시연 영상 </span>
https://github.com/EllaSEON/wanted-pre-onboarding-frontend/assets/107895498/3a455c7c-8a53-4c22-9c8e-160b5f82054b

# 5. <span id="tree"> 프로젝트 구조 </span>
```
📦src
 ┣ 📂API
 ┃ ┗ 📜customAxios.ts
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📜loadingSpinner.gif
 ┃ ┃ ┗ 📜logout.svg
 ┣ 📂Component
 ┃ ┣ 📂AuthForm
 ┃ ┃ ┗ 📜AuthForm.tsx
 ┃ ┣ 📂Button
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📂PostItem
 ┃ ┃ ┗ 📜PostItem.tsx
 ┃ ┗ 📂SelectInputBox
 ┃ ┃ ┗ 📜SelectInputBox.tsx
 ┣ 📂Pages
 ┃ ┣ 📂category
 ┃ ┃ ┗ 📜Category.tsx
 ┃ ┣ 📂context
 ┃ ┃ ┗ 📜UserContext.ts
 ┃ ┣ 📂Loading
 ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜NotFound.tsx
 ┃ ┣ 📂SignIn
 ┃ ┃ ┗ 📜Signin.tsx
 ┃ ┣ 📂SignUp
 ┃ ┃ ┗ 📜Signup.tsx
 ┃ ┣ 📂Splash
 ┃ ┃ ┗ 📜Splash.tsx
 ┃ ┗ 📂Todo
 ┃ ┃ ┗ 📜Todo.tsx
 ┣ 📂Router
 ┃ ┗ 📜Router.tsx
 ┣ 📂utils
 ┃ ┗ 📜baseUrl.ts
 ┣ 📜App.tsx
 ┣ 📜custom.d.ts
 ┣ 📜index.css
 ┗ 📜index.tsx
```

# 6. <span id="trouble"> 트러블 슈팅 </span>
## 1) Category 페이지 새로고침 시 예전 값으로 렌더링
### [문제상황] 
- 카테고리 페이지에서 할일 수정 API 를 호출하면 상태가 바로 반영이 되는데, Category 페이지를 새로고침하면 다시 예전 값으로 렌더링되는 문제가 있었다. 즉, 수정된 내용이 Category 페이지에서 새로고침하면 반영이 안되었다.

### [해결과정] 🔗 [깃허브 pr 링크](https://github.com/LakeOnBoarding/todolist/pull/16)
- 기존에는 useNavigate로 Todo 컴포넌트에서 Category 컴포넌트로 todolist state 를 전달해줬었다. 아침,점심,저녁 버튼을 눌러야지만 state가 넘어오는데 버튼을 누르지 않고, 새로고침을 하게되면 useNavigate 에 있던 state 값이 받아와지지 않기 때문에 화면에 렌더링 되지 않는 것이었다.
- 따라서, useNavigate 로 상태값을 전달하지 않고 Category 컴포넌트에서 get API 를 재 호출해서 다시 새로운 데이터를 불레오게 했다.
- 하지만, 이 방법은 수정사항이 생길 때마다 get API 를 호출하기에 서버 발생 비용이 증가한다. 더불어, Todo 컴포넌트의 todolist 와 Category 페이지의 categoryTodolist state가 서로 영향을 미치는 데이터인데 다른 state로 관리하기 때문에 상태관리의 어려움이 있어, 추후 전역상태관리로 리팩토링 할 예정이다. 


## 2) 토큰 여부에 따른 페이지 접근제한
### [문제상황]
- 로그인 정보에 따른 페이지 접근제한시 token 정보를 가져오지 못했다

### [해결과정] 🔗 [깃허브 pr 링크](https://github.com/LakeOnBoarding/todolist/pull/25)
- 기존에 Context 의 value 값에 localStorage 값만 넣었다. 즉, 동적으로 토큰이 있을때, 없을 때를 리액트가 감지하지 못했다.
- 따라서, 로컬 스토리지 값의 여부를 확인하여 setState 를 업데이트한다.
- context provider 를 사용해 setState를 props로 내려주고 로그인시에 localStorage에 있는 token 정보를 useState 이용해 저장한다


## 3) todo페이지 새로고침시 NotFound 페이지가 일시적으로 렌더링
### [문제상황]
- access_token 이 존재할때 /todo페이지로 이동하도록 Router설정을 했기에 바로 todo리스트가 렌더링될것으로 예상하였다. 
하지만, 토큰 여부 확인이 완료되기 전에는 토큰이 null 인 상태이므로 NotFound 페이지가 렌더링되었다

### [해결과정] 🔗 [깃허브 commit 링크](https://github.com/LakeOnBoarding/todolist/pull/28/commits/f14008cdfb023d52d9ef7ef10c16359f4cfe4e49)
- 기존에는 Router에서 token의 여부만 확인했기에 token이 없는 순간 일시적으로 NotFound 페이지가 렌더링 되었다. token값이 들어오기 전에 로딩 페이지를 보여줌으로써 UX를 개선했다.
- useState를 사용해 로딩상태를 관리, 토큰 여부 확인 후 setState를 변경해 준 후 Context Provider로 setState를 props로 내려주어 로딩 상태에 따라 로딩 페이지를 렌더링하였다.
