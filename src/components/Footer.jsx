import styled from "styled-components";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { links } from "../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  background: linear-gradient(
    100.26deg,
    rgba(0, 102, 255, 0.05) 42.33%,
    rgba(150, 0, 225, 0.05) 127.07%
  );
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #f2f3f4;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #f2f3f4;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: gray;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMediaIcons>
          <SocialMediaIcon href={links.instgram} target="_blank">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={links.github} target="_blank">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={links.linkedin} target="_blank">
            <LinkedInIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2026 Prayag N. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
