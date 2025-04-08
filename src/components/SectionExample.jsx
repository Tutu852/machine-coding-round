import  { useRef } from "react";

const ScrollExample = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={scrollToSection}>Scroll to Section</button>
      <div style={{ height: "100vh" }}>Some content</div>
      <div ref={sectionRef} style={{ height: "100vh", background: "lightblue" }}>
        Target Section
      </div>
    </div>
  );
};

export default ScrollExample;
