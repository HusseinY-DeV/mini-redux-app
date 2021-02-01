import './App.css';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {useState} from 'react';
import {addBlog} from './action';



const EachBlog = styled.div`
  width : 80%;
  margin: 10px auto;
  background-color : ${({status}) => status ? 'cornflowerblue' : 'blue'};
  padding: 5px 10px;

  p {
    color : white;
    font-family : monospace;
    font-size : 18px;
  }
`;

function App(props) {
  const {status,blogs} = props;
  const [blog,setBlog] = useState('');
  const [desc,setDesc] = useState('');
  return (
    <div className="App">
      <h1>Redux Baby!</h1>
      <div className="addBlog">
        <input type="text" placeholder="Blog title"
        onChange = {e => {
          setBlog(e.target.value);
        } }
        value ={blog}
        /><br/>
        <textarea 
        style={{width:'500px',height:'250px',resize:'none',padding:'10px',
      fontSize:'20px'}}
        onChange = {e => {
          setDesc(e.target.value);
        }}
        value = {desc}
        type="text" placeholder="Blog description"/><br/>
        <button
        onClick={e => {
          props.addBlog(blog,desc);
          setBlog('');
          setDesc('');
        }}
        >ADD BLOG</button>
      </div>
      {blogs.map((b,i) => {
        return (
          <EachBlog key={i} status={status}>
            <h2>{b.title}</h2>
            <p>{b.desc}</p>
          </EachBlog>
        )
      })}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    blogs : [...state.blogs]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBlog : (title,desc) => {
      dispatch(addBlog(title,desc));
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
