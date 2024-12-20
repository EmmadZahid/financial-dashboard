import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../../store/currentUserSlice";
import { useEffect } from "react";

const ProfileImg = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.currentUser);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] rounded-full bg-gray shrink-0">
        {currentUser ? <img src={currentUser.imageUrl} alt="" /> : ""}
      </div>
    </>
  );
};

export default ProfileImg;
