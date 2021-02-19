import { useState, useEffect } from "react";

const ToggleActive = (element, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  
  useEffect(() => {
    const onClick = e => {
      // If element exists and is clicked outside of, then toggle isActive
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If element is active (ie open), then listen for clicks outside of element
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, element]);

  return [isActive, setIsActive];
};

export default ToggleActive