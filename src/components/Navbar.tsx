import logo_white from '../../public/assets/images/white-logo.png';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="w-full bg-green-700 py-5 lg:px-20 text-white">
        <div className="flex justify-between items-center">
          <img
            src={logo_white}
            alt=""
            className="w-10"
          />
          <div>lo</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
