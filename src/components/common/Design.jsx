import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `${
    level === 1
      ? "text-[45px] font-[700]"
      : level === 2
      ? "text-[40px] font-[700]"
      : level === 3
      ? "text-[35px] font-[700]"
      : level === 4
      ? "text-[30px] font-[600]"
      : level === 5
      ? "text-[25px] font-[600]"
      : "text-[18px] font-[500]"
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const Body = ({ children, className }) => {
  return <p className={`${className} text-base font-normal text-[rgb(107, 113, 119)]`}>{children}</p>;
};

const Caption = ({ children, className }) => {
  return <p className={`${className} text-[15px] font-[500] text-gray_100`}>{children}</p>;
};

const CustomNavLinkList = ({ href, className, isActive, children }) => {
  const linkStyles = "text-[17px] font-medium cursor-pointer list-none hover:text-green transition-all ease-in-out";
  const activeClass = isActive ? "text-green" : "";

  return (
    <>
      <NavLink to={href} className={`${className} ${linkStyles} ${activeClass}`}>
        {children}
      </NavLink>
    </>
  );
};

const CustomNavLink = ({ href, className, isActive, children }) => {
  const linkStyles = "text-[17px] font-medium cursor-pointer list-none hover:text-green transition-all ease-in-out";
  const activeClass = isActive ? "bg-green_100 text-green" : "";

  return (
    <>
      <NavLink to={href} className={`${className} ${linkStyles} ${activeClass}`}>
        {children}
      </NavLink>
    </>
  );
};

const CustomLink = ({ className, children }) => {
  const linkStyles = "text-[15px] font-medium text-gray-600 font-sans cursor-pointer list-none";

  return <NavLink className={`${className} ${linkStyles}`}>{children}</NavLink>;
};

const Container = ({ children, className }) => {
  return <div className={`${className} w-[85%] m-auto`}>{children}</div>;
};

const PrimaryButton = ({ children, className }) => {
  return (
    <button type="submit" className={`${className} text-white bg-green font-medium rounded-full text-lg px-16 py-3 hover:bg-primary transition ease-in-out`}>
      {children}
    </button>
  );
};

const ProfileCard = ({ children, className }) => {
  return <div className={`${className} w-12 h-12 bg-green_100 flex items-center justify-center rounded-full`}>{children}</div>;
};

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <Title level={4}>{title}</Title>
      <div className="w-1/2">
        <Caption>{subtitle}</Caption>
      </div>
    </>
  );
};

export { Title, Body, Caption, CustomLink, CustomNavLink, Container, PrimaryButton, ProfileCard, Heading, CustomNavLinkList };
export const commonClassNameOfInput = "w-full p-4 text-sm text-gray-900 border border-gray-200 focus:ring-green focus:border-green outline-none";

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.any,
  className: PropTypes.any,
};
CustomNavLink.propTypes = {
  href: PropTypes.any,
  className: PropTypes.any,
  children: PropTypes.any,
  isActive: PropTypes.any,
};
CustomNavLinkList.propTypes = {
  href: PropTypes.any,
  className: PropTypes.any,
  children: PropTypes.any,
  isActive: PropTypes.any,
};
CustomLink.propTypes = {
  href: PropTypes.any,
  className: PropTypes.any,
  children: PropTypes.any,
};
Body.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};
Caption.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};
Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};
PrimaryButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};
ProfileCard.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};
Heading.propTypes = {
  title: PropTypes.any,
  subtitle: PropTypes.any,
};
