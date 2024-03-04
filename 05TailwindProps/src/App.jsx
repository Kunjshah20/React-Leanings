import './App.css';
import Card from './components/Card';

function App() {

  let myObj = {
    username: "kunj",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className ="bg-green-400 text-black p-4 rounded-xl mb-4">Hello world!</h1>
      <Card username="Kunj" channel = "kunj" someObj = {myObj} myArr = {newArr} />
      <Card username="Chai" btnText = "Click me"/>
      <Card username="Hello" btnText= "Visit me" />
    </>
  )
}

export default App
