import React, { Component } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

class Resume extends Component {
  static async getInitialProps({ query }) {
    return { source: query.source }
  }

  render() {
    const { source } = this.props

    return (
      <>
        <ReactMarkdown skipHtml source={source} />
        <Link href="/"><a>home</a></Link>
      </>
    )
  }
}

export default Resume
