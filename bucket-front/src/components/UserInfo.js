const UserInfo = () => {
  return (
    <div className="header_userInfo">
      <img src={process.env.PUBLIC_URL + `/assets/defaultProfileImg.png`} />
      <span>seolyu</span>
    </div>
  );
};

export default UserInfo;
