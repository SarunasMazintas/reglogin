import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toolbar } from './components/Toolbar';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import React, { useState } from 'react';
import { ProfilePage } from './pages/ProfilePage';
import { OtherUsers } from './pages/OtherUsers';
import { Profile } from './components/Profile';
import { Conversations } from './pages/Conversations';

function App() {
  const initialUsers = [
    {
      username: 'Antanas',
      email: 'antanas@gmail.com',
      password: 'antanas1',
      image: 'https://picsum.photos/id/5/200/300',
    },
    {
      username: 'Petras',
      email: 'petras@gmail.com',
      password: 'petras1',
      image: 'https://picsum.photos/id/50/200/300',
    },
    {
      username: 'Anupras',
      email: 'anupras@gmail.com',
      password: 'anupras1',
      image: 'https://picsum.photos/id/25/200/300',
    },
    {
      username: 'Kirslys',
      email: 'kirslys@gmail.com',
      password: 'kirslys1',
      image: 'https://picsum.photos/id/10/200/300',
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [messages, setMessages] = useState([]);
  const [counter, setCounter] = useState(1);

  function sendMessage(sender, receiver, message) {
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: counter,
        sender: sender,
        receiver: receiver,
        content: message,
      },
    ]);
    setCounter((current) => current + 1);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar
          userLoggedIn={userLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
        />
        <div className="page">
          <Routes>
            <Route
              path="/login"
              element={
                <Login users={users} setUserLoggedIn={setUserLoggedIn} />
              }
            ></Route>
            <Route
              path="/"
              element={<Register users={users} setUsers={setUsers} />}
            ></Route>
            <Route
              path="/profile"
              element={
                <ProfilePage
                  setUsers={setUsers}
                  userLoggedIn={userLoggedIn}
                  users={users}
                />
              }
            ></Route>
            <Route
              path="/otherusers"
              element={<OtherUsers user={userLoggedIn} users={users} />}
            ></Route>
            <Route
              path="/otherusers/:username"
              element={
                <Profile
                  messages={messages}
                  sendMessage={sendMessage}
                  userLoggedIn={userLoggedIn}
                  users={users}
                />
              }
            ></Route>
            <Route
              path="/conversations"
              element={
                <Conversations
                  messages={messages}
                  sendMessage={sendMessage}
                  userLoggedIn={userLoggedIn}
                  users={users}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
