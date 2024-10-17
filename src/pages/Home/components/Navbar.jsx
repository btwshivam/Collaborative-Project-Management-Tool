import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 80px;
  padding: 0 20px;
  margin: 12px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg}; /* Change to theme.bg */
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 0px 15px !important;
  }
`;

const Logo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 28px;
  color: ${({ theme }) => theme.primary};
  background: linear-gradient(45deg, #4caf50, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    left: 0;
    bottom: -6px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Button = styled.button`
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

const MobileMenu = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 80px;
  right: 0;
  background-color: ${({ theme }) => theme.bgLighter}; /* Change to theme.bgLighter for better contrast */
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* Increase shadow for depth */
  z-index: 100; /* Ensure menu is above other content */
  @media (max-width: 768px) {
    width: 85%;
  }
  transition: all 0.3s ease;
`;

const MobileMenuItem = styled.a`
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.text}; // Ensure visibility
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = ({ setSignInOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Container>
        <Logo>Team Sync</Logo>
        <Menu>
          <MenuItem href="#home">Home</MenuItem>
          <MenuItem href="#features">Features</MenuItem>
          <MenuItem href="#benefits">Benefits</MenuItem>
          <MenuItem href="#about">About Us</MenuItem>
        </Menu>
        <Button onClick={() => setSignInOpen(true)}>
          <AccountCircleOutlinedIcon /> Sign In
        </Button>
        <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </HamburgerMenu>
      </Container>
      <MobileMenu open={menuOpen}>
        <MobileMenuItem href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </MobileMenuItem>
        <MobileMenuItem href="#features" onClick={() => setMenuOpen(false)}>
          Features
        </MobileMenuItem>
        <MobileMenuItem href="#benefits" onClick={() => setMenuOpen(false)}>
          Benefits
        </MobileMenuItem>
        <MobileMenuItem href="#about" onClick={() => setMenuOpen(false)}>
          About Us
        </MobileMenuItem>
        <Button onClick={() => setSignInOpen(true)}>
          <AccountCircleOutlinedIcon /> Sign In
        </Button>
      </MobileMenu>
    </>
  );
};

export default Navbar;
