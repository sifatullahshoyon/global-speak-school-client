import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="example-container">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>
  );
};

export default App;
