import { useEffect } from 'react';
import './App.css'
import DebounceInput from './DebounceInput'
import DraggableList from './DraggableList';
import EventEmitter from './EventEmitter';
import all from './all';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3']

  useEffect(() => {
    // Первое задание
    const eventEmitter = new EventEmitter();

    function f1() {
      console.log('hello');
    }

    function f2() {
      console.log('world');
    }
    eventEmitter
      .subscribe('event1', f1)
      .subscribe('event1', f2)
      .emit('event1');

    eventEmitter.unsubscribe('event1', f1).emit('event1');

    // Второе задание
    const pr1 = new Promise<number>((res) => setTimeout(() => res(1), 100));
    const pr2 = new Promise<number>((res) => setTimeout(() => res(2), 200));
    const pr3 = new Promise<number>((res) => setTimeout(() => res(3), 500));
    all([pr1, pr2, pr3]).then(data => console.log(data)); 
  }, [])

  const handleOrderChange = (newOrder: string[]) => {
    console.log('Новый порядок:', newOrder)
  };

  return (
    <>
      <h1>Тестовое задание</h1>
      <DebounceInput />
      <h3>Draggable List</h3>
      <DraggableList items={items} onChange={handleOrderChange} />
    </>
  )
}

export default App
