interface PostItemProps {
  children: string;
}

function PostItem({ children }: PostItemProps) {
  const len = children.length;
  const timeType = children.slice(-1);
  const content = children.slice(0, len - 1);

  return (
    <li className="font-semibold tracking-widest">
      <div
        className={`${
          timeType === "1"
            ? "bg-post_red"
            : timeType === "2"
            ? "bg-post_yellow"
            : "bg-post_blue"
        } w-50 h-32 p-1 shadow shadow-black `}
      >
        {content}
      </div>
    </li>
  );
}

export default PostItem;
