import { useState, createContext } from 'react';

export const pageTitleContext = createContext<any>('');

function PageTitleProvider(props: any) {
  const [title, setTitle] = useState('Home');

  return (
    <pageTitleContext.Provider value={{ title, setTitle }}>
      {props.children}
    </pageTitleContext.Provider>
  );
}

export default PageTitleProvider