import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  document.title='TO DO APP'
  return (
    <div className='min-w-screen min-h-screen flex-cols bg-gray-300  '>
   
  <TaskForm/>
  <TaskList/>
    </div>
  )
}

export default App
