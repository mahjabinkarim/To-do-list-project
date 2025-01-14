
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Todo from './Todo'

function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(


    <Route> 
      <Route path='/' element={<Todo/>}/>
    </Route>

  ))
  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App
