import logo from './logo.svg';
import './App.css';
import Matter from 'matter-js';

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

const engine = Engine.create();
const world = engine.world;
engine.world.gravity.y = 0.1;

const circle = Bodies.circle(windowWidth/2, 50, 10, {
  friction: 0.2,
  restitution: 0.8,
  render: {
    fillStyle: '#000',
    strokeStyle: '#000',
    lineWidth: 1
  }
});
const ground = Bodies.rectangle(0, windowHeight-50, 1920, 10, {
  isStatic: true
});

World.add(engine.world, [circle, ground]);

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: windowWidth,
      height: windowHeight,
      wireframes: false,
      background: '#fff'
    }
});

Engine.run(engine);
Render.run(render);

document.body.addEventListener("keyup", function(e) {
  const box = Bodies.circle(windowWidth/2, 50, 10, {
    friction: 0.2,
    restitution: 0.8
  });
  World.add(engine.world, box);
}, false);

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
