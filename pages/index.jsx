import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

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
  padding-bottom: 1.25rem;
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

  a {
    font-weight: 500;
    text-decoration: none;
    transition: color 0.4s;
    :hover {
      color: #0074d9;
    }
    :visited {
      color: inherit;
    }
  }
`;

const Index = () => (
  <Container>
    <Title>
      <Name>Diego SPB</Name>
      <Name>Diego SPB</Name>
    </Title>
    <Links>
      <Link href="/resume"><a>resume</a></Link>
    </Links>
  </Container>
)

export default Index
