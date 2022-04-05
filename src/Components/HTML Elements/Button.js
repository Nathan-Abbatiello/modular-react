// HTML Element Button
function Button({ content, clickEvent, className }) {
  return (
    <button
      onClick={(e) => {
        handleClick(e.target, clickEvent);
      }}
      className={className}
    >
      {content}
    </button>
  );
}

export default Button;
