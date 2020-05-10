import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

class Index extends Component {
  static async getInitialProps({ query }) {
    return { source: query.source }
  }

  render() {
    const { source } = this.props

    return (
      <>
        <h1>
          hello
        </h1>
        <Link href="/resume"><a>resume</a></Link>
      </>
    )
  }
}

export default Index
