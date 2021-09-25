import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments(){
  const [comments, setComments] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setComments(data))
  }, [])

  return (
    <div>
      <h2>Load Comments</h2>
      {
        comments.map(comment => <Comment title={comment.title} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props){
  const commentStyle = {
    backgroundColor: '',
    backgroundColor: '#61dafb',
    margin: '20px',
    border: '3px solid blue',
    borderRadius: '10px'
  }
  return (
    <div style={commentStyle}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default App;
