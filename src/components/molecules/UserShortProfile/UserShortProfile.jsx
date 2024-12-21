import clsx from "clsx";

const UserShortProfile = ({ user, selected }) => {
  const classes = clsx({
    "font-bold": selected,
    "font-normal": !selected,
  });
  return (
    <>
      <div
        className={`${classes} flex flex-col items-center justify-center w-[70px] lg:max-w-[100px] font-inter text-center`}
      >
        <img
          className="rounded-full w-[50px] lg:w-[70px] mb-[12px] lg:mb-[15px]"
          src={user.imageUrl}
          alt=""
        />
        <div className="text-sm lg:text-base truncate">{user.name}</div>
        <div className="dim-text text-sm lg:text-[15px]">{user.role}</div>
      </div>
    </>
  );
};

export default UserShortProfile;
