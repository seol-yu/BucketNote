import { React, useState } from "react";

const MyBucketListWrite = () => {
  return (
    <div>
      <div className="myBucketListTitle">
        {`창모보다 돈 많고 유명한 레전드 래퍼되기`}
      </div>
      <div className="myBucketListContents">
        <img
          src={process.env.PUBLIC_URL + `/assets/defaultBucketListImg.png`}
        />
        <div className="bucketContent">{`#래퍼 #머니앤페임`}</div>
      </div>
      <button className="myBucketListWriteBtn">
        <img src={process.env.PUBLIC_URL + `/assets/pencil.png`} />
      </button>
    </div>
  );
};

export default MyBucketListWrite;
