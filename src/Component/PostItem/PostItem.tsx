import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { customAuthAxios } from "../../API/customAxios";
import { TodoItem } from "../../Pages/Todo/Todo";

interface PostItemProps {
  children: string;
  todoId: number;
  todoList: TodoItem[];
  isCompleted: boolean;
  setTodoList: (newState: TodoItem[]) => void;
}

function PostItem({
  children,
  todoId,
  todoList,
  setTodoList,
  isCompleted,
}: PostItemProps) {
  const len = children.length;
  const timeType = children.slice(-1);
  const content = children.slice(0, len - 1);

  const [updateToggle, setUpdateToggle] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(content);
  const [isCompletedTodo, setIsCompletedTodo] = useState(isCompleted);
  const todoInput = useRef<HTMLTextAreaElement>(null);

  const handleTodoDelete = () => {
    const deleteConfirm = confirm("정말로 삭제하시겠습니까?");

    if (deleteConfirm) {
      const deleteTodo = async () => {
        try {
          await customAuthAxios.delete(`todos/${todoId}`);
          setTodoList(
            [...todoList].filter((todoItem) => todoItem.id !== todoId)
          );
        } catch (error) {
          console.log(error);
        }
      };
      deleteTodo();
    }
  };

  const handleTodoUpdate = async () => {
    if (updateToggle) {
      const updateData = {
        todo: updatedContent + timeType,
        isCompleted: isCompletedTodo,
      };

      try {
        await customAuthAxios.put(`todos/${todoId}`, updateData);
      } catch (error) {
        console.log(error);
      }
    }
    setUpdateToggle((prev) => !prev);
  };

  const handleTodoCompleted = async () => {
    const updateData = {
      todo: updatedContent + timeType,
      isCompleted: true,
    };
    try {
      await customAuthAxios.put(`todos/${todoId}`, updateData);
    } catch (error) {
      console.log(error);
    }
    setIsCompletedTodo((prev) => !prev);
  };

  useEffect(() => {
    todoInput.current?.focus();
  }, [updateToggle]);

  return (
    <li className="font-semibold tracking-widest relative h-fit">
      <div
        className={`${
          timeType === "1"
            ? "bg-post_red"
            : timeType === "2"
            ? "bg-post_yellow"
            : "bg-post_blue"
        } w-50 h-32 p-1 shadow shadow-black break-all`}
      >
        {!updateToggle ? (
          <p
            className={`${isCompletedTodo ? "line-through" : ""} h-24`}
            onClick={handleTodoCompleted}
          >
            {updatedContent}
          </p>
        ) : (
          <textarea
            ref={todoInput}
            className="w-32 h-24 bg-transparent tracking-widest resize-none"
            value={updatedContent}
            onChange={(e) => {
              setUpdatedContent(e.target.value);
            }}
            maxLength={30}
          />
        )}
        <button
          onClick={handleTodoDelete}
          className="absolute right-2 bottom-1"
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer hover:opacity-80"
            opacity={0.2}
          />
        </button>
        <button onClick={handleTodoUpdate} className="absolute left-2 bottom-1">
          <FontAwesomeIcon
            icon={!updateToggle ? faPenToSquare : faCheck}
            className="cursor-pointer hover:opacity-80"
            opacity={0.2}
          />
        </button>
      </div>
    </li>
  );
}

export default PostItem;
