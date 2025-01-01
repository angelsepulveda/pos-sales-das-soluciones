import { create } from 'zustand';
import { Dark, Light } from '@/styles';

type TThemeState = {
  theme: 'light' | 'dark';
  themeStyle: typeof Light | typeof Dark;
  setTheme: () => void;
};

export const useThemeStore = create<TThemeState>((set, get) => ({
  theme: 'light',
  themeStyle: Light,
  setTheme: () => {
    const { theme } = get();
    set({
      theme: theme === 'light' ? 'dark' : 'light',
      themeStyle: theme === 'light' ? Dark : Light,
    });
  },
}));
