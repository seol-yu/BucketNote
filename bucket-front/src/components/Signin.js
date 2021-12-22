const Signin = () => {
  return (
    <div className="signin">
      <div className="signin_modal">
        <input type="text" className="signin_id" placeholder="아이디" />
        <input
          type="password"
          className="signin_password"
          placeholder="비밀번호"
        />
        <input
          type="password"
          className="signin_password"
          placeholder="비밀번호 확인"
        />
        <input type="email" className="signin_id" placeholder="이메일 주소" />
        <button className="signin_button">
          <img src={process.env.PUBLIC_URL + `/assets/signin.png`} />
        </button>
      </div>
      <button className="login_column_button">
        <img src={process.env.PUBLIC_URL + `/assets/login_column.png`} />
      </button>
    </div>
  );
};

export default Signin;
