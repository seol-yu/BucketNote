import { Outlet } from "react-router-dom";

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
