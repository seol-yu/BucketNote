import React from "react";
import MyBucketList from "./MyBucketList";

const MyBucketlists = () => {
  const myBucketLists = [
    {
      id: 1,
      wish: `창모보다 돈 많고 유명한 레전드 래퍼되기`,
    },
    {
      id: 2,
      wish: `코딩 카페 만들기`,
    },
    {
      id: 3,
      wish: `데프콘 1등하기`,
    },
    {
      id: 4,
      wish: `재산 350조 세계 1위 부자 되기`,
    },
    {
      id: 5,
      wish: `버킷Note 제작하기`,
    },
    {
      id: 6,
      wish: `애플 인수하기`,
    },
    {
      id: 7,
      wish: `구글 인수하기`,
    },
    {
      id: 8,
      wish: `마이크로소프트 인수하기`,
    },
  ];

  return (
    <div className="myBucketLists">
      {myBucketLists.map((myBucketList) => (
        <MyBucketList myBucketList={myBucketList} key={myBucketList.id} />
      ))}
    </div>
  );
};

export default MyBucketlists;
