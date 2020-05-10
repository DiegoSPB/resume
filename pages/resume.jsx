import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { FullLogo } from '../components/assets'

const experiences = [
  {
    company: 'ShareGrid',
    city: 'Seattle',
    years: '2018 - 2020',
    title: 'Senior Software Engineer',
    description: [
      'Worked alongside a small full-stack team to develop new features and keep the app growing.',
    ] 
  },
  {
    company: 'Propopen',
    city: 'Portland',
    years: '2017 - 2018',
    title: 'Lead Developer',
    description: [
      'First line of code to launch.',
      'Responsible for full-stack app development.',
      'Handled everything from custom configured DevOps setup on Digital Ocean to back-end architecture build-out using Ruby on Rails, to full front-end development.',
      'Technologies used: Ruby on Rails, Postgres, Stripe, Sendgrid, Rspec, Capistrano, Nokogiri.',
    ] 
  },
  {
    company: 'Produpdate',
    city: 'Portland',
    years: '2017 - 2017',
    title: 'Lead Developer',
    description: [
      'Worked in a small team as a full-stack developer, with emphasis as the lead back- end engineer.',
      'Responsible for building the main app in Rails, in addition to the client side embeddable JS app communication with a Node back-end.',
      'Technologies used: Ruby on Rails, NodeJs, Express, Redis, Resque, Stripe, Rspec.',
    ] 
  },
  {
    company: 'Max2Maya',
    city: 'Portland',
    years: '2015 - 2016',
    title: 'Python Developer',
    description: [
      "Developed custom tools to import custom 3ds Max's data to Maya.",
    ] 
  },
  {
    company: 'Caramel VFX',
    city: 'Guadalajara',
    years: '2013 - 2015',
    title: 'Co-Founder / CG Supervisor',
    description: [
      'Oversaw all phases of the 3D production of the studio, from modeling, rigging, animation, to compositing.',
    ] 
  },
]


const Container = styled.div`
  position: relative;
  max-width: 52rem;
  margin-right: auto;
  margin-left: auto;
  padding: 4rem 1rem 2rem;
`;

const LogoContainer = styled.h1`
  align-items: baseline;
  border-bottom: 1px solid;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 1.25rem;
  font-weight: 300;
  justify-content: space-between;
  line-height: 1;
  min-width: 15rem;
  width: 100%;
`;

const Title = styled.p`
  font-weight: 300;
  margin-bottom: 0;
  position: relative;
  top: -13px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Links = styled.p`
  font-weight: 300;
  margin-bottom: 1rem;
  margin-top: 0;
`;

const StyledLink = styled.a`
  color: #030303;
  font-weight: 300;
  text-decoration: none;
  transition: color 0.4s;
  cursor: pointer;

  :hover {
    color: #0074d9 !important;
  }

  :visited {
    color: inherit;
  }
`;

const SectionTitle = styled.h2`
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 10px;
`;

const SectionParagraph = styled.p`
  font-weight: 300;
  margin-bottom: 1rem;
  margin-top: 0;
  font-size: 0.875rem;
  line-height: 18px;
`;

const SectionSubtitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.25;
  margin: 0;
`;

const Divider = styled.hr`
  margin: 1rem 0 2rem;
  font-size: 1.25rem;
  border: 0;
  border-bottom: 1px solid #c0c0c0;
  width: 22%;
`;


const Resume = () => (
  <Container>
    <LogoContainer>
      <Link href="/"><a><FullLogo /></a></Link>
      <Title>Senior Software Engineer</Title>
    </LogoContainer>
    <Links>
      <StyledLink href="mailto:hello@theworkofdiego.com"> contact </StyledLink>
      |
      <StyledLink href="https://github.com/diegospb"> github </StyledLink>
      |
      <StyledLink href="https://www.linkedin.com/in/diegospb/"> linkedin </StyledLink>
    </Links>
    <SectionTitle>About me</SectionTitle>
    <SectionParagraph>
      A Web Developer with a background in 3D and visual effects. 
      Learning and utilizing new tech has been the cornerstone of my career.
    </SectionParagraph>
    <SectionTitle>Tools</SectionTitle>
    <SectionParagraph>
      Ruby, and of course - Rails. 
      <br />
      React - hooks!!!.
      <br />
      GraphQL + Apollo FTW!. 
      <br />
      Vim - all day, everyday!
      <br />
      And much more in between!
    </SectionParagraph>
    <SectionTitle>Experience</SectionTitle>
    {experiences.map((experience) => (
      <>
        <SectionSubtitle> {experience.company} </SectionSubtitle>
        <SectionParagraph>
          {experience.title} - {experience.city}, {experience.years}
          <br />
          <br />
          {experience.description.map((item) => (
            <>
              {item}
              <br />
            </>
          ))}
        </SectionParagraph>
        <Divider />
      </>
    ))}
  </Container>
)

export default Resume
