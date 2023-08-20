import React from "react";
import TypingEffect from "react-typing-effect";

const TypingHeading: React.FC = () => {
  return (
    <div>
      <h1 className="text-8xl font-bold text-[#312E81]">
        <TypingEffect
          text={["Shop Smarter", "Shop Trendier", "Shop FlipStore"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={1000}
        />
      </h1>
    </div>
  );
};

export default TypingHeading;
