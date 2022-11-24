import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import './less/style.less';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Первая задача todo',
      description: 'Описание задачи 1',
      dataLoading: '01:54:04 19-11-2022',
      image: 'https://cdn.dribbble.com/userupload/4052169/file/original-ee96fd3ed3800111ab35bb082a53e9b9.jpg?compress=1&resize=1200x900',
      status: true
    },
    {
      id: 2,
      title: 'Вторая задача todo',
      description: 'Описание задачи 2',
      dataLoading: '04:20:01 15-11-2022',
      image: 'https://cdn.dribbble.com/users/2140475/screenshots/15216274/media/55e1042bb088cfd81dc6bb1fbe8a2687.jpg?compress=1&resize=1000x750&vertical=top',
      status: true
    },
    {
      id: 3,
      title: 'Третья задача todo',
      description: 'Описание задачи 3',
      dataLoading: '07:14:01 02-09-2022',
      image: 'https://cdn.dribbble.com/userupload/2918186/file/original-1d0c5429cc67562cde85c7ade36fd182.jpg?compress=1&resize=1200x900',
      status: false
    }
  ])

  return (
    <div className="container">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
