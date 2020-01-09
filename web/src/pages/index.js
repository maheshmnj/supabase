import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CodeBlock from '@theme/CodeBlock'

const subscribeExample = `
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://chat-room.supabase.io', '1a2b-3c4d-5e6f-7g8h')

// Listen to all new messages in your chat room
const listener = supabase
  .subscribe('messages')
  .on('INSERT', chatMessage => {
    console.log('New chat!', chatMessage)
  })
`
const features = [
  {
    title: <>Chat apps</>,
    imageUrl: '',
    description: <>Build a realtime chat application using PostgreSQL and Expo.</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Realtime dashboards</>,
    imageUrl: '',
    description: <>Build live dashboards using PostgreSQL and D3.js.</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Event sourcing</>,
    imageUrl: '',
    description: <>Log all your database changes to an immutable logging system.</>,
    href: '/docs/guides/examples',
  },
]

function Feature({ imageUrl, title, description, href }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col', styles.feature)}>
      <a className={classnames('card', styles.featureCard)} href={href}>
        <div className="card__body">
          {imgUrl && (
            <div className="">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
          )}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <header className={classnames('hero shadow--md', styles.heroBanner)}>
        <div className="container text--center">
          <h2 className="hero__title">{siteConfig.tagline}</h2>
          <p className="hero__subtitle">
            Add a Realtime API to your PostgreSQL database without a single line of code.
          </p>
          <div>
            {/* <img
              src="/img/hero.png"
              alt="Supabase"
              className={classnames(styles.heroImage)}
            /> */}
          </div>
          <Link
            className={classnames(
              'button button--outline button--md button--secondary',
              styles.button
            )}
            to={useBaseUrl('docs/about')}
          >
            Learn More
          </Link>
          <Link
            className={classnames(
              'button button--outline button--md button--primary',
              styles.button
            )}
            to={'https://app.supabase.io'}
          >
            Request Early Access
          </Link>
        </div>
      </header>

      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <h2 className="with-underline">Use Cases</h2>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.forDevelopers}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2 className="with-underline text--center">For Developers</h2>
                <p className="text--center">
                  We're a bunch of developers, building tools for developers. We're obsessed with solving your problems, 
                  because they solve our problems too. Our products prioritize performance and simplicity because sometimes 
                  doing less is better.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col col--9">
                <CodeBlock>{subscribeExample}</CodeBlock>
              </div>
              <div className="col col--3">
                <button className="button button--block button--primary">Realtime</button>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 40, padding: 20 }} className="hero is--dark">
          <div className="container text--right">
            <div className="">
              <strong>Try Supabase for free</strong>
              <Link
                className={classnames(
                  'button button--outline button--md button--primary',
                  styles.button
                )}
                to={'https://app.supabase.io'}
              >
                GO
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home