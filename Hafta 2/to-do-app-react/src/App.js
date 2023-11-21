import './App.css';
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState('all');
  return (
      <div className="todoapp">
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
        <List todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} filter={filter}/>
        <Footer todos={todos} setTodos={setTodos} counter={counter} setCounter={setCounter} filter={filter}  setFilter={setFilter}/>
      </div>
  );
}

export default App;