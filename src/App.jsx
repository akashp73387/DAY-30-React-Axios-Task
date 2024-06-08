 import React, { useState } from "react";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Home from "./Pages/Home";
 import Navbar from "./Components/Navbar";
 import Footer from "./Components/Footer";
 import Details from "./Pages/Details";
 import Create from "./Pages/Create";
 import Edit from "./Pages/Edit";

 const App = () => {
   //initializing id for updating id from api
   const [id, setId] = useState(0);

   return (
     <div>
       <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/details" element={<Details setId={setId} />} />
           <Route path="/create" element={<Create />} />
           <Route path="/edit/:id" element={<Edit id={id} />} />
         </Routes>
         <Footer />
       </BrowserRouter>
     </div>
   );
 };

 export default App;