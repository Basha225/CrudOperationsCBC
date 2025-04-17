import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CrudOperationEdit from './Component/CrudOperationEdit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <CrudOperationEdit />
     </StrictMode>,
)
