import { useSelector } from "react-redux";

const ProfileImg = ({ className }) => {
  const { currentUser } = useSelector((state) => state.currentUser);
  return (
    <>
      <div
        className={`${className} rounded-full overflow-hidden bg-gray shrink-0`}
      >
        {currentUser ? (
          <img className={className} src={currentUser.imageUrl} alt="" />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProfileImg;
