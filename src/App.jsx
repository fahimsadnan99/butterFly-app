import React, { useEffect } from "react";
import { ScrollControls, Scroll, Environment ,Float, Sparkles,PositionalAudio} from "@react-three/drei";
import { Butterfly } from "./models/Butterfly";
import { EffectComposer, DepthOfField, Bloom, Vignette } from "@react-three/postprocessing";
// import Sound1 from "./sounds/ambient-2.mp3"
// import Sound2 from "./sounds/ambient.mp3"
// import Sound3 from "./sounds/ambient-rain.mp3"


const App = () => {

  
  return (
    <>
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
        <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>
      <ambientLight intensity={1}></ambientLight>
      <Environment preset="sunset"></Environment>
      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          {/* top */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Butterfly rotation-x={Math.PI * 0.05} scale={0.05} position={[0,-2.5,0]}/>
        <Butterfly scale={0.05} position={[-10,-3,-6]}/>
        <Butterfly scale={0.05} position={[10,-4,-10]}/>   
        </Float>
        {/* top */}

        {/* middle */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Butterfly scale={0.05} position={[-1,-12.5,0]}/>
        <Butterfly scale={0.05} position={[12,-14,-10]}/>   
        </Float>        
        {/* middle */}

        {/* middle */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Butterfly scale={0.05} position={[-3,-19.5,2]}/>
        <Butterfly scale={0.05} position={[8,-23,-10]}/>
        <Butterfly scale={0.05} position={[4,-24,2]}/>  
        </Float>  
        {/* middle */}   

         {/* middle */}
         <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Butterfly scale={0.05} position={[-4,-8,4]}/>
        <Butterfly scale={0.05} position={[8,-7,-5]}/>
        <Butterfly scale={0.05} position={[4,-24,2]}/>  
        </Float>  
        {/* middle */}   

         <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
        <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>   



        {/* <group position={[0, 0, 0]}>
          <PositionalAudio  autoplay loop url={Sound1} distance={1.2} />
        </group>    
        <group position={[0, -20, 0]}>
          <PositionalAudio  autoplay loop url={Sound2} distance={3} />
        </group>  
        <group position={[0, -40, 0]}>
          <PositionalAudio  autoplay loop url={Sound3} distance={1.2} />
        </group>    */}
        </Scroll>
        <Scroll html style={{ width: "100%", height: "100%" }}>
          <div className="relative">
            <div className="flex justify-center items-center h-full w-full">
              <p className=" font-italiano text-6xl text-white text-center mt-96">
                Hi..! I Am Fahim Sadnan
              </p>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <p style={{lineHeight : "50px"}} className=" font-italiano text-2xl text-white text-center mt-80">
              “Never too old, never too bad, never too late, never too sick to start from scratch once again.” 
              <br></br>– Bikram Choudhury
              </p>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <p style={{lineHeight : "50px"}}  className=" font-italiano text-2xl text-white text-center mt-80">
              “If you run you stand a chance of losing, but if you don’t run you’ve already lost.” 
              <br></br>
              – Barack Obama
              </p>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <p style={{lineHeight : "50px"}} className=" font-italiano text-2xl text-white text-center mt-80">“If work were so pleasant, the rich would keep it for themselves.” 
              <br></br>
              – Mark Twain</p>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <p style={{lineHeight : "50px"}} className=" font-italiano text-2xl text-white text-center mt-80">
              “By changing nothing, nothing changes.” 
              <br></br>
              – Tony Robbins
              </p>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <p style={{lineHeight : "50px"}} className=" font-italiano text-2xl text-white text-center mt-80">“The greatest mistake you can make in life is to be continually fearing you will make one.”
              <br></br>
               – Elbert Hubbard</p>
            </div>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default App;
