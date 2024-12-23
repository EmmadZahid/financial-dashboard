import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";
import { updateCurrentUserImage } from "../../../store/currentUserSlice";
const ProfileImg = ({ className, canUpload }) => {
  const { currentUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const onUploadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*"; // Restrict to image files
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          // Dispatch action to update user's image URL
          dispatch(updateCurrentUserImage(reader.result));
        };
        reader.readAsDataURL(file);
      }
    };
    fileInput.click();
  };
  return (
    <>
      <div className={`${className} rounded-full bg-gray shrink-0 relative`}>
        {currentUser ? (
          <img
            className={`${className} rounded-full`}
            src={currentUser.imageUrl}
            alt=""
          />
        ) : (
          ""
        )}
        {canUpload ? (
          <div
            onClick={onUploadClick}
            className="w-[30px] h-[30px] bg-black absolute flex items-center justify-center rounded-full right-[-12px] bottom-[1px] cursor-pointer"
          >
            <PencilIcon></PencilIcon>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProfileImg;
