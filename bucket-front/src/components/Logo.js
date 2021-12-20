const Logo = () => {
  return (
    <div className="header_logo">
      <img src={process.env.PUBLIC_URL + `/assets/bucketLogo.png`} />
      <span>버킷Note</span>
    </div>
  );
};

export default Logo;
