import CustomCursor from 'features/CustomCursor'
import Header from 'features/Header'

function Layout({ children }) {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
