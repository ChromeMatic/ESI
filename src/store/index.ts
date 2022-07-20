import { defineStore } from 'pinia'

export const UseThemeStore = defineStore(
    'Theme',
    {
        state: () => ({
            isDark: false,
        }),
       getters:{
          getTheme: (state) => state.isDark,
       },
       actions:{
        changeTheme(){ this.isDark = !this.isDark; }
       }
    }
)