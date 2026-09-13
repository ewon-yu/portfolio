import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Theme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral/built'
import { VStack } from '@astryxdesign/core/Layout'
import { Text, Heading } from '@astryxdesign/core/Text'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './routes/Home'
import { Work } from './routes/Work'
import { CaseDetail } from './routes/CaseDetail'
import { SelectedWork } from './routes/SelectedWork'
import { SelectedWorkDetail } from './routes/SelectedWorkDetail'
import { Contact } from './routes/Contact'

function NotFound() {
  return (
    <section className="page section">
      <VStack gap={2}>
        <Heading level={1}>404</Heading>
        <Link to="/">
          <Text type="body" color="accent">
            ← 홈으로
          </Text>
        </Link>
      </VStack>
    </section>
  )
}

export default function App() {
  return (
    <Theme theme={neutralTheme} mode="dark">
      <BrowserRouter basename="/portfolio">
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<CaseDetail />} />
            <Route path="selected-work" element={<SelectedWork />} />
            <Route path="selected-work/:slug" element={<SelectedWorkDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}
