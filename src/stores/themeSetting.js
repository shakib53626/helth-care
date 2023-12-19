import { defineStore } from 'pinia';

export const useThemeSetting = defineStore("themeSetting", {
    state:() => ({ 
        isDarkMode : '',
     }),

     persist:['isDarkMode'],

     getters:{},
     
     actions:{
        async toggleDarkMode(){
            this.isDarkMode = 'dark'
            return this.isDarkMode;
        },
        
        async lightMode(){
            this.isDarkMode = ''
            return this.isDarkMode;
        },
     },

})