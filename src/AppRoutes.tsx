import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import useRoute from '@/hooks/useRoute'

import HomePage from '@/pages/HomePage'
import CatDetailsPage from '@/pages/CatDetailsPage'

const AppRoutes = () => {
  const { routes } = useRoute()

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path={routes.home.path} element={<HomePage />} />
          <Route path={routes.showCat.path} element={<CatDetailsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
