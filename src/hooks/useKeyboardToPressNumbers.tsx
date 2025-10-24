import { useEffect } from "react";

const clickElementOfIdIfFound = (id: string) => {
  const foundBackButton: HTMLElement | null = document.getElementById(id);
  return foundBackButton && foundBackButton.click();
};

const useKeyboardToPressNumbers = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key: string = event.key;
      const foundElement: HTMLElement | null = document.getElementById(
        key.toUpperCase()
      );
      if (foundElement) {
        return foundElement.click();
      }
      if (key === "Delete") {
        clickElementOfIdIfFound("C");
      } else if (key === "Backspace") {
        clickElementOfIdIfFound("<");
      } else if (key === " " || key === "Enter") {
        event.preventDefault();
        clickElementOfIdIfFound("=");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
};

export default useKeyboardToPressNumbers;
