import clsx from "clsx";

const Button = ({ className, children, ...props }) => {
  const classes = clsx({
    "bg-gray-800": props.disabled,
    "bg-black active:opacity-100 active:outline active:outline-2 active:outline-gray-400 hover:opacity-85":
      !props.disabled,
  });
  return (
    <>
      <button {...props} className={`${className} ${classes} text-white `}>
        {children}
      </button>
    </>
  );
};

export default Button;
