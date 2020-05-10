import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { FullLogo } from '../components/assets'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 43rem;
  min-height: calc(100vh - 5rem);
  padding: 1rem;
`;
const Title = styled.h1`
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
const Name = styled.span`
    display: inline-block;
    margin-left: 3rem;
`;

const Links = styled.p`
  font-weight: 300;
  margin-bottom: 1rem;
  margin-top: 0;
  text-align: right;
`;

const StyledLink = styled.a`
  color: #030303;
  font-weight: 500;
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

const Index = () => (
  <Container>
    <Title>
      <FullLogo />
    </Title>
    <Links>
      <Link href="/resume"><StyledLink href="/resume">Resumé </StyledLink></Link>
      |
      <StyledLink href="https://github.com/diegospb"> github/diegospb </StyledLink>
      |
      <StyledLink href="mailto:hello@theworkofdiego.com"> contact </StyledLink>
    </Links>
  </Container>
)

export default Index
