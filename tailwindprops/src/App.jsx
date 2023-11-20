
import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite app with tailwind</h1>
      <Card userName='Muni' postName='Engineer'/>
      <Card userName='Muni' postName='Engineer'/>
      <Card />
    </>
  )
}

export default App
