import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoListPage from './pages/ToDoListPage'
import Layout from './layouts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <ToDoListPage />
    </Layout>
  </StrictMode>,
)
