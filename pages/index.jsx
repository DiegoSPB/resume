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

const Index = () => (
  <Container>
    <h1>
      hello
    </h1>
    <Link href="/resume"><a>resume</a></Link>
  </Container>
)

export default Index
