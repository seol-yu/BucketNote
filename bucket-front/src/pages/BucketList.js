import { Outlet } from "react-router-dom";
import MyBucketLists from "../components/MyBucketLists";

const BucketList = () => {
  return (
    <div className="bucketList">
      <div className="board">
        <Outlet />
      </div>
    </div>
  );
};

export default BucketList;
