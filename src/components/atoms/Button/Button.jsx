import clsx from "clsx";

const Button = ({ className, children, ...props }) => {
  const classes = clsx({
    "bg-gray-800 cursor-not-allowed": props.disabled, // Disabled state
    "bg-black active:opacity-100 active:outline-gray-400 hover:opacity-75 active:ring-2 active:ring-gray-400":
      !props.disabled, // Styles for active, focus, and hover states
  });

  return (
    <button {...props} className={`${className} ${classes} text-white`}>
      {children}
    </button>
  );
};

export default Button;
