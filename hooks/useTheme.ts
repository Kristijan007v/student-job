import { useLocalStorage } from "@mantine/hooks";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">({
    key: "theme",
    defaultValue: "light",
  });

  const toogleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(`Theme changed to ${theme}`);

  return {
    theme,
    toogleTheme,
  };
};
