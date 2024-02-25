import React from "react";
import Home from "./pages/Home";
import Ladkewale from "./pages/Ladkewale";
import Ladkiwale from "./pages/Ladkiwale";
import NoPage from "./pages/NoPage";
// import SideMenu from "./components/SideMenu";
import AnimatedCursor from "react-animated-cursor";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

function App() {
  const {scrollYProgress} = useScroll();
  const location = useLocation()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div className="page-progress" style={{scaleX}}></motion.div>
        <AnimatedCursor 
          innerSize={9} 
          outerSize={18} 
          color='108, 67, 106' 
          outerAlpha={0.2} 
          innerScale={0.7} 
          outerScale={4} 
          trailingSpeed={10} />
        
          <Routes key={location.pathname} location={location}>
            <Route index element={<Home/>}></Route>
            <Route path="ladkewale" element={<Ladkewale/>}></Route>
              <Route path="ladkiwale" element={<Ladkiwale/>}></Route>
            {/* <Route path="/" element={<SideMenu/>}>
              <Route path="ladkewale" element={<Ladkewale/>}></Route>
              <Route path="ladkiwale" element={<Ladkiwale/>}></Route>
            </Route> */}
            <Route path="*" element={<NoPage/>}></Route>
          </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
