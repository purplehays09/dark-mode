import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkStyle',true);

  const handleChanges = e => {
    setDarkMode(!darkMode);
  };


  return [darkMode, handleChanges];
};