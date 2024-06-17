function Button({ children, handleClick, disabled = false }) {
  return (
    <button disabled={disabled} onClick={handleClick}>
      {children.toUpperCase()}
    </button>
  );
}

export default Button;
