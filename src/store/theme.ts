import { defineStore } from 'pinia';

const theme = defineStore({
  // 这里的 id 必须为唯一 ID，将所使用的 store 连接到 devtools
  id: 'theme',
  state: () => {
    return {
      themeType: '亮蓝色',
      themeColor: '#2080F0FF',
    };
  },
  getters: {
    getThemeType: (state) => state.themeType,
    getThemeColor: (state) => state.themeColor,
  },
  actions: {
    setThemeType(type: string) {
      this.themeType = type;
    },
  },
});

export default theme;
