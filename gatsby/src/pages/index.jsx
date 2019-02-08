import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/me.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero>
        <BigTitle>
          Hello, <br /> I'm Aswin VB.
        </BigTitle>
        <Subtitle>Full Stack Developer.</Subtitle>
        <ContactText>
            {/* <a href="mailto:aswinvb.aswin6@gmail.com">Gmail</a> &nbsp;&nbsp;
            <a href="https://www.facebook.com/aswinvb">Facebook</a> &nbsp;&nbsp;
            <a href="https://www.twitter.com/aswinvb1">Twitter</a> &nbsp;&nbsp;
            <a href="https://github.com/aswinzz">Github</a>&nbsp;&nbsp; */}
            Wanna Hire Me ? Here's <a target="_blank" href="https://drive.google.com/file/d/1gV5GxMubwdU7l3oakv-HZ45Lba1w3Onm/view?usp=sharing">My Resume</a>
          </ContactText>
      </Hero>
      <Projects>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Tweezy"
            link="https://github.com/aswinzz/Tweezy"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Classify the Anomality level of Twitter Users.
          </ProjectCard>
          <ProjectCard
            title="Video Summarization"
            link="https://github.com/aswanthkoleri/Project-Video-Summarization"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Summarizes a video having speech.
          </ProjectCard>
          <ProjectCard
            title="Datlizer"
            link="https://github.com/Datlizer"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Visualize data from a database
          </ProjectCard>
          <ProjectCard
            title="Omega Bot"
            link="https://github.com/mubaris/omega_bot"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
          A single zulip bot having 18 integrations
          </ProjectCard>
          <ProjectCard
            title="Lucid CV"
            link="https://github.com/aswinzz/LucidCV"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A Simple CV Maker.
          </ProjectCard>
          <ProjectCard
            title="Passerine"
            link="https://github.com/aviary-apps/Passerine"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Un-Official ProductHunt Desktop Client.
          </ProjectCard>
          <ProjectCard
            title="Road Link"
            link="https://github.com/aswanthkoleri/RoadLink"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Fleet Management
          </ProjectCard>
          <ProjectCard
            title="Summe"
            link="https://github.com/aswinzz/summe"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Summarizes any pdf.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
          I am a pre final year undergrad at Indian Institute Of Information Technology Allahabad. I have been doing web development for the last 3 years. I am from Kerala also known as the God Own Country.
          </AboutSub>
        </AboutHero>
        
      </About>
      <Contact>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:aswinvb.aswin6@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.facebook.com/aswinvb">Facebook</a> &{' '}
            <a href="https://github.com/aswinzz">Github</a><br/>
            Wanna hire me ? Here's <a href="https://drive.google.com/file/d/1gV5GxMubwdU7l3oakv-HZ45Lba1w3Onm/view?usp=sharing">My Resume</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; Powered by Gatsby.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
