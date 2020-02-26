// library imports
import React from 'react'
import Helmet from 'react-helmet'

const UpdateTitle = ({ title }) => {
  const defaultTitle = 'Arvin Agas'

  return (
    <Helmet>
      <title>{title ? `${defaultTitle} | ${title}` : defaultTitle}</title>
    </Helmet>
  )
}

export const withTitle = ({ component: Component, title }) => {
  return () => {
    return (
      <>
        <UpdateTitle title={title} />
        <Component />
      </>
    )
  }
}