
import './taskform/form.css';
import TodoList from "./crudopt2/TodoList"
import { Todoapp } from "./crudopt/todoapp"
import {TaskProvider} from './Form/hook/context'
import {Container} from './Form/container'
function App() {
  return (
<TaskProvider>   
    <div>
<Container/>
    </div>
    </TaskProvider>
  );
}

export default App;

