import { useSetTheme } from "./TaskProvider";
// this component would toggle between dark and light
function DarkToggle() {
  const { theme, setTheme } = useSetTheme();

  return (
    <div className="flex justify-center">
      <div className="m-auto pt-9">
        <div className="text-center">{theme === "dark" ? "dark" : "light"}</div>
        <input
          type="checkbox"
          className="toggle toggle-lg"
          onChange={(e) => {
            if (e.target.checked) {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        />
      </div>
    </div>
  );
}

export default DarkToggle;
