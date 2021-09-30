import Layout from 'components/Layout'
import HomeAbout from 'features/HomeAbout'
import HomeBanner from 'features/HomeBanner'
import HomeContent from 'features/HomeContent'
import HomeFeatured from 'features/HomeFeatured'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <HomeBanner />
      <HomeContent />
      <HomeFeatured />
      <HomeAbout />
    </Layout>
  )
}
