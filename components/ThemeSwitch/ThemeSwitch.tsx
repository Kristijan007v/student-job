import { useTheme } from "next-themes";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button className="flex items-center space-x-2" onClick={toogleTheme}>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      <span>{theme === "dark" ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
