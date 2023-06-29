import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { customAuthAxios } from "../../API/customAxios";
import { TodoItem } from "../../Pages/Todo/Todo";

interface PostItemProps {
  children: string;
  todoId: number;
  todoList: TodoItem[];
  setTodoList: (newState: TodoItem[]) => void;
}

function PostItem({ children, todoId, todoList, setTodoList }: PostItemProps) {
  const len = children.length;
  const timeType = children.slice(-1);
  const content = children.slice(0, len - 1);

  const handleTodoDelete = () => {
    const deleteConfirm = confirm("정말로 삭제하시겠습니까?");

    if (deleteConfirm) {
      const deleteTodo = async () => {
        try {
          await customAuthAxios.delete(`/todos/${todoId}`);
          setTodoList(
            [...todoList].filter((todoItem) => todoItem.id != todoId)
          );
        } catch (error) {
          console.log(error);
        }
      };
      deleteTodo();
    }
  };

  return (
    <li className="font-semibold tracking-widest relative h-fit">
      <div
        className={`${
          timeType === "1"
            ? "bg-post_red"
            : timeType === "2"
            ? "bg-post_yellow"
            : "bg-post_blue"
        } w-50 h-32 p-1 shadow shadow-black `}
      >
        <button
          onClick={handleTodoDelete}
          className="absolute right-2 bottom-1"
        >
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </button>

        {content}
      </div>
    </li>
  );
}

export default PostItem;
