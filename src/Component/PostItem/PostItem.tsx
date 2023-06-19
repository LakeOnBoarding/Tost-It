interface PostItemProps {
  children: string;
}

function PostItem({ children }: PostItemProps) {
  return (
    <li>
      <div className="w-50 h-32 bg-post_red px-1.5 shadow shadow-black">
        {children}
      </div>
    </li>
  );
}

export default PostItem;
