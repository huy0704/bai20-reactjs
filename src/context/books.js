import { createContext, useState } from "react";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [count, setCount] = useState(5);

  const shareValueContext = {
    count,
    incrementCount: () => setCount(count + 1),
  };
  return (
    <BooksContext.Provider value={shareValueContext}>{children}</BooksContext.Provider>
  );
};
export { Provider };
export default BooksContext;
