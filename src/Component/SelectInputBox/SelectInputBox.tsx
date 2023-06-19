import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus as plus } from "@fortawesome/free-solid-svg-icons";
import { customAuthAxios } from "../../API/customAxios";

function SelectInputBox() {
  const [selectedOption, setSelectedOption] = useState("");
  const [todoText, setTodoText] = useState("");

  const handleRegisterInput = async () => {
    if (selectedOption === "") {
      alert("시간을 선택해주세요.");
    } else {
      try {
        const testRes = await customAuthAxios.post("todos", {
          todo: todoText + selectedOption,
        });
        console.log(testRes);
      } catch (error) {
        console.log("error");
      }
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <form className="text-center mt-2">
      <select
        className="w-30 h-10 text-white rounded-xl shadow shadow-black bg-point_blue font-semibold p-2"
        defaultValue=""
        onChange={handleSelectChange}
      >
        <option disabled value="">
          시간선택
        </option>
        <option value="1">아침❤️</option>
        <option value="2">점심💛</option>
        <option value="3">저녁💙</option>
      </select>
      <label className="w-fit h-fit inline-block relative">
        <input
          type="text"
          className="ml-4 w-64 rounded-xl shadow shadow-black bg-point_blue font-semibold p-2 pr-10 placeholder-white "
          placeholder="할 일 입력"
          value={todoText}
          onChange={handleChange}
        />
        <FontAwesomeIcon
          icon={plus}
          size="2xl"
          style={{ color: "#ffff" }}
          className="absolute top-1 right-2 cursor-pointer pl-2"
          onClick={handleRegisterInput}
        />
      </label>
    </form>
  );
}

export default SelectInputBox;
