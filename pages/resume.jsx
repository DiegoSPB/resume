import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { FullLogo } from '../components/assets'

const experiences = [
  {
    company: 'QuickNode',
    city: 'Seattle',
    years: '2022 - current',
    title: 'Tech Lead - Senior Software Engineer',
    description: [
      'Designed and implemented a new Billing System',
      'Built migration tools to inform and gradually migrate users to the new Billing System',
      'Worked with revenue teams to generate custom revenue recognition reports Wrote, tested and maintained Internal & external APIs',
    ]
  },
  {
    company: 'ShareGrid',
    city: 'Seattle',
    years: '2020 - 2022',
    title: 'Lead Software Engineer',
    description: [
      'Served as team leader, making decisions on goals, assignments, standups and retros.',
      'Interviewed, onboarded and trained new engineers.',
      'Lead the effort to support complex itemized tax rules within the marketplace.',
      'Regularly evaluated and optimized aws configurations.',
      'Maintained complex SQL queries, views and dashboards for financial/business analysis.',
    ]
  },
  {
    company: 'ShareGrid',
    city: 'Seattle',
    years: '2018 - 2020',
    title: 'Senior Software Engineer',
    description: [
      'Worked alongside a full-stack team, some of my key contributions were:',
      'Within a team of 2, rewrote the search experience - moved core sections into a Single Page Application, created multiple services to enable a back-end driven system to allow a smarter multi-item search experience.',
      'Completely revamped the verification system into an admin driven react app.',
      'Implemented the shipping functionality within their buy&sell marketplace.',
      'Centralized the multiple communication streams into a Messaging Service.',
      'Setup the CI/CD pipeline.'
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
    ]
  },
  {
    company: 'Produpdate',
    city: 'Portland',
    years: '2017 - 2017',
    title: 'Lead Developer',
    description: [
      'Worked in a team as a full-stack developer, with emphasis as the lead back- end engineer.',
      'Responsible for building the main app in Rails, in addition to the client side embeddable JS app communication with a Node back-end.',
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

const LineUl = styled.ul`
	font-size: 13px;
	line-height: 1.5em;
	margin: 5px 0 5px;
	padding: 0;
	li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 9px;
			width: 8px;
      display: block;
			border-top: 2px solid #bbbbbb;
		}
	}
`;

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
  margin-top: 2rem;
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
  line-height: 2.25;
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
      <Link href="/" legacyBehavior><FullLogo /></Link>
      <Title>Tech Lead - Senior Software Engineer</Title>
    </LogoContainer>
    <Links>
      <div>
        <StyledLink href="https://github.com/diegospb"> github </StyledLink>
        |
        <StyledLink href="https://www.linkedin.com/in/diegospb/"> linkedin </StyledLink>
        |
        <StyledLink href="mailto:hello@theworkofdiego.com"> contact </StyledLink>
      </div>
    </Links>
    <SectionTitle>About me</SectionTitle>
    <SectionParagraph>
      A software engineer with a background in VFX. Learning and utilizing new
      tech has been the cornerstone of my career.
    </SectionParagraph>
    <SectionTitle>Tools</SectionTitle>
    <SectionParagraph>
      Ruby, Rails, Node, Sidekiq, ElasticSearch, SQL
      <br />
      Typescript, React, GraphQL, Apollo
      <br />
      AWS
      <br />
      Neovim ❤️
      <br />
      Dabbling Go, Rust
      <br />
      and others
    </SectionParagraph>
    <SectionTitle>Experience</SectionTitle>
    {experiences.map((experience) => (
      <>
        <SectionSubtitle> {experience.company} </SectionSubtitle>
        <SectionParagraph>
          {experience.title}
          <br />
          {experience.city}, {experience.years}
          <br />
          {experience.description.map((item) => (
            <>
              <LineUl>
                <li>
                  {item}
                </li>
              </LineUl>
            </>
          ))}
        </SectionParagraph>
        <Divider />
      </>
    ))}
  </Container>
)

export default Resume
