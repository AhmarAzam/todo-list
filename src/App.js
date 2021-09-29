import React, { useState } from 'react';
import './App.css';
import Header from '../src/Components/Header'
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from './Components/AddTodo'
import About from './Components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import _ from 'lodash';

function App() {
  const [todolist, setTodoList] = useState([])

  const onDelete = (list) => {
  //  console.log('Delete List Item>>', list)
    setTodoList(todolist.filter((l) => {
      return l !== list
    }))
    //   let List = _.remove(todolist, function(l) {
    //     return (l === list.key); //remove item if list item key is matched
    // });
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todolist.length !== 0) {
      sno = todolist[todolist.length - 1].key + 1;
    } else {
      sno = 0
    }

    let todo = {
      key: sno,
      title: title,
      Description: desc
    }
    setTodoList([...todolist, todo])
  }

  return (
    <>
      <Router>
        <Header Title='My Todo List' />

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todolist} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
