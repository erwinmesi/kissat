import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import useRoute from '@/hooks/useRoute'

import HomePage from '@/pages/HomePage'
import BreedDetailsPage from '@/pages/BreedDetailsPage'

const AppRoutes = () => {
  const { routes } = useRoute()

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path={routes.home.path} element={<HomePage />} />
          <Route path={routes.showBreed.path} element={<BreedDetailsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
