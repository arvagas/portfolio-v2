// library imports
import React from 'react'
import Helmet from 'react-helmet'

const UpdateTitle = ({ title }) => {
  const defaultTitle = 'Arvin Agas'

  const newTitleIs = () => {
    if (!title) return defaultTitle
    else if (title === 'Page Not Found') return `${title} | ${defaultTitle}`
    else return `${defaultTitle} | ${title}`
  }

  return (
    <Helmet>
      <title>{newTitleIs()}</title>
    </Helmet>
  )
}

export const withTitle = ({ component: Component, title }) => {
  return (props) => {
    return (
      <>
        <UpdateTitle title={title} />
        <Component {...props} />
      </>
    )
  }
}