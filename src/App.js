import './App.css';
import Header from './Header';
import Nav from './Nav';
import Conteiner from './Container';

const headerMenu = {
  nav: [
    {'text': 'Головна', 'link' : '#'},
    {'text': 'Пошук товарів', 'link' : '#'},
    {'text': 'Кошик', 'link' : '#'},
    {'text': 'Обліковий запис', 'link' : '#'},               
  ]
}
  
const navData = {
  nav: [
    {'text': 'Головна', 'link' : '#'},
    {'text': 'Пошук товарів', 'link' : '#'},
    {'text': 'Кошик', 'link' : '#'},
    {'text': 'Обліковий запис', 'link' : '#'},
  ]
}
function App() {
  return (
    <>
    <Header data={headerMenu}></Header>
    <div className='content'>
    <Nav data={navData}></Nav>
    <Conteiner>контент</Conteiner>
    
    </div>

    </>
  );
}

export default App;
