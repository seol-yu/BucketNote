const Login = () => {
  return (
    <div className="login">
      <div className="login_modal">
        <input type="text" className="login_id" placeholder="아이디" />
        <input
          type="password"
          className="login_password"
          placeholder="비밀번호"
        />
        <button className="login_button">
          <img src={process.env.PUBLIC_URL + `/assets/login.png`} />
        </button>
      </div>
      <button className="signin_column_button">
        <img src={process.env.PUBLIC_URL + `/assets/signin_column.png`} />
      </button>
    </div>
  );
};

export default Login;
