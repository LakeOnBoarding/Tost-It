import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus as plus } from "@fortawesome/free-solid-svg-icons";

function SelectInputBox() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRegisterInput = () => {
    if (selectedOption === "") {
      alert("시간을 선택해주세요.");
    }
    // else {
    //   try {
    //     const todoCreateRes = await customAuthAxios.post("todos", selectedOption);
    //   } catch (error) {

    //   }
    // }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
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
