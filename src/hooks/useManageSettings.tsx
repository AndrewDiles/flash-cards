import { useState, useEffect } from "react";
import type { Settings } from "../constants/types";

const STORAGE_KEY = "settings";

const DEFAULT_SETTINGS: Settings = {
  dark: window.matchMedia("(prefers-color-scheme: dark)").matches,
  theme: "default",
  layout: "num-pad",
  questions: 20,
  duration: 10,
  factor_1_min: 1,
  factor_1_max: 12,
  factor_2_min: 1,
  factor_2_max: 12,
};

const useManageSettings = () => {
  const [settings, setSettings] = useState<Settings>({ ...DEFAULT_SETTINGS });
  console.log({settings});
  

  useEffect(() => {
    const foundSettings = window.localStorage.getItem(STORAGE_KEY);
    if (foundSettings) {
      try {
        const parsedSettings = JSON.parse(foundSettings) as Partial<Settings>;
        const merged : Settings= { ...DEFAULT_SETTINGS, ...parsedSettings };
        return setSettings(merged);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log(err);
        }
      }
    }
    resetSettings();
  }, []);

  const updateSettings = (
    key: keyof Settings,
    value: Settings[keyof Settings]
  ) => {
    if (Object.keys(DEFAULT_SETTINGS).includes(key)) {
      const newSettings = { ...settings, [key]: value };
      setSettings(newSettings);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
    }
  };

  const resetSettings = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
    setSettings({ ...DEFAULT_SETTINGS });
  };

  return { settings, updateSettings, resetSettings };
};

export default useManageSettings;
