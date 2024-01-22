import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";
import { useTheme as useNextTheme } from "next-themes";

export const DarkModeSwitcher = () => {

  const { setTheme, theme } = useNextTheme();

  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      isSelected={theme === "dark" ? false :true }
      onValueChange={(e) => setTheme(e ? "light" : "dark")}
    >
      
    </Switch>
  );
}
