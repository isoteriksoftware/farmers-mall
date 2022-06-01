import styled from '@emotion/styled'
import Footer from './Footer'
import Header from './Header'

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
}))

const Layout = ({
  showHeader = true,
  showFooter = true,
  allowContentPadding = true,
  children,
}) => {
  const ContentWrap = styled('div')(({ theme }) => ({
    padding: allowContentPadding ? '0 3rem' : '',
    paddingBottom: showFooter ? '35rem' : '0',
    [theme.breakpoints.only('xs')]: {
      padding: allowContentPadding ? '0 1rem' : '',
      paddingBottom: showFooter ? '75rem' : '0',
    },
    [theme.breakpoints.only('sm')]: {
      padding: allowContentPadding ? '0 2rem' : '',
      paddingBottom: showFooter ? '70rem' : '0',
    },
    [theme.breakpoints.only('md')]: {
      paddingBottom: showFooter ? '60rem' : '0',
    },
  }))

  return (
    <Root>
      {showHeader && <Header />}

      <ContentWrap>{children}</ContentWrap>

      {showFooter && <Footer />}
    </Root>
  )
}

export default Layout
