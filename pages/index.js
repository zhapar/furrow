import Layout from 'components/Layout'
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
    </Layout>
  )
}
