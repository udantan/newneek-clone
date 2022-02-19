import { useSelector } from "react-redux";

function useUser() {
  const user = useSelector((state) => state.userReducer);
  return user;
}

export default useUser;
