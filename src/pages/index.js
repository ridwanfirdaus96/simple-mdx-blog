import React from 'react'
import { Container, FeatureImage, Content, ContentCard } from '../components'

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date='March 24, 2020'
          title='My Fourth Post... So Long For Now'
          excerpt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit nisl, leo et. Vitae hendrerit vivamus cum ullamcorper hendrerit et arcu, elit ornare.'
          slug='/test'
        />
      </Content>
    </Container>
  )
}

export default IndexPage
