import React from 'react'

// Local
import { Space } from '../shared/Space'
import Header from '../home/Header'
import { WithPhotoSection } from '../home/WithPhotoSection'
import { Community } from '../home/Community'
import { Subscribe } from '../home/Subscribe'
import { Speakers } from '../home/Speakers'
import { StarsBackground } from '../home/StarsBackground'
import { Highlights } from '../home/Highlights'
import { Sponsors } from '../home/Sponsors'
import { Tickets } from '../home/Tickets'
import { Upcoming } from '../home/Upcoming'
import { Organizers } from '../home/Organizers'
import { Footer } from '../shared/Footer'

export default () => (
  <>
    <StarsBackground opacity={0.4}>
      <Header />
    </StarsBackground>

    <Space height={80} heightOnMobile={50} />

    <WithPhotoSection imageSrc="/static/graphql2.jpg" imageFirstOnMobile={true}>
      {({ Title, Description }) => (
        <>
          <Title>Attend Europe’s biggest GraphQL- dedicated conference</Title>
          <Description addMarginTop>
            GraphQL Conf is a non-profit GraphQL conference in Europe with
            speakers from all around the world. Learn about GraphQL best
            practices from industry experts and become part of the thriving
            GraphQL community. GraphQL Conf is organized by Prisma and Honeypot.
          </Description>
        </>
      )}
    </WithPhotoSection>

    <Space height={70} heightOnMobile={50} />

    <Community />

    <Space height={90} heightOnMobile={50} />

    <Subscribe />

    <Space height={105} heightOnMobile={80} />

    <Speakers />

    <Space height={150} heightOnMobile={110} />

    <StarsBackground>
      <Highlights />

      <Space height={144} heightOnMobile={120} />

      <Sponsors />
    </StarsBackground>

    <Tickets />

    <Space height={144} heightOnMobile={110} />

    <Upcoming />

    <Space height={134} heightOnMobile={100} />

    <Organizers />

    <Space height={114} heightOnMobile={90} />

    <Footer />
  </>
)
