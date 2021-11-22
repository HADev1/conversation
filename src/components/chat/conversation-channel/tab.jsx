import {useDispatch} from "react-redux";
import {onSwitchTab} from "../../../store/tab";

export default function Tab({title, tabName, currentTab}) {
  const dispatch = useDispatch();

  const handleTabChange = () => {
    dispatch(onSwitchTab(tabName));
  };

  const isActive = () => {
    return currentTab === tabName;
  };

  return (
    <button
      className={`btn filterDiscussionsBtn ${isActive() ? "active show" : ""}`}
      // data-toggle="list"
      // data-filter="all"
      onClick={handleTabChange}
    >
      {title}
    </button>
  );
}