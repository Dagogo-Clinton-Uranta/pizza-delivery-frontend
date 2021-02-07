import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaPizzaSlice
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {

    return (
    <FooterContainer>
      <FooterWrap>
          <SocialMedia>
              <SocialMediaWrap>
              <SocialLogo to = '/'> <FaPizzaSlice/> Mama John's Pizza</SocialLogo>
                  <SocialIcons>
                Facebook
                  <SocialIconLink href = "https://www.facebook.com/" target='Facebook' aria-label= "Facebook" rel='noopener noreferrer'>
                        <FaFacebook/>
                      </SocialIconLink>
               Twitter
                      <SocialIconLink href = "https://www.twitter.com/" target='_Twitter' aria-label= "Twitter" rel='noopener noreferrer'>
                        <FaTwitter/>
                      </SocialIconLink>
                Instagram
                      <SocialIconLink href = "https://www.instagram.com/" target='_Twitter' aria-label= "Instagram" rel='noopener noreferrer'>
                        <FaInstagram/>
                      </SocialIconLink>
               LinkedIn
                      <SocialIconLink href = "https://www.linkedin.com/" target='_LinkedIn' aria-label= "Linkedin" rel='noopener noreferrer'>
                        <FaLinkedin/>
                      </SocialIconLink>

                  </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
    </FooterContainer>

    )
}

export default Footer;
