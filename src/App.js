import React from "react";
import "./styles.css";
import { useSpring, animated } from "react-spring";
import Toggle from "./Toggle";

export default function App() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  //shorter
  // const fade = useSpring({ from: { opacity:0},opacity:1})

  return (
    <animated.div className="App" style={fade}>
      <h1>Hello CodeSandbox</h1>

      <Toggle />
    </animated.div>
  );
}
