import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx"
import Newbutton from './NewButton.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import Seeing from "./seeing.jsx";
import MySecondComponent from './MySecondComponent.jsx'
import ColourPicker from './ColourPicker.jsx'
import UpdatingCounter from './UpdatingCounter.jsx'
import UpdateObjects from './UpdateObjects.jsx'
import UpdateArrays from './UpdateArrays.jsx'
import UpdateArrOfObj from './UpdateArrOfObj.jsx'
import ToDoList from './ToDoList.jsx'
import UseEffectComponent from './UseEffectComponent.jsx'
import UseEffectWandH from './UseEffectWandH.jsx'
import DigitalClock from './DigitialClock.jsx'
import ComponentA from './ComponentA.jsx'
import Stopwatch from './Stopwatch.jsx'



function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "melon", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "carrot", calories: 195 },
    { id: 7, name: "potato", calories: 145 },
    { id: 8, name: "celery", calories: 1105 },
    { id: 9, name: "onion", calories: 1159 },
    { id: 10, name: "corn", calories: 137 },
  ];
  
  return (
    <>
      <Header />
      <Food />
      <Footer />
      <Card />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <UserGreeting isLoggedIn={true} userName="Lizzieeee" />
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null}
      <Newbutton />
      <ProfilePicture />
      <MyComponent />
      <Counter />
      <Seeing />
      <MySecondComponent />
      <ColourPicker />
      <UpdatingCounter />
      <UpdateObjects />
      <UpdateArrays />
      <UpdateArrOfObj />
      <ToDoList />
      <UseEffectComponent />
      <UseEffectWandH />
      <DigitalClock />
      <DigitalClock />
      <DigitalClock />
      <ComponentA />
      <Stopwatch />
      <Stopwatch />
    </>
  );
}

export default App
