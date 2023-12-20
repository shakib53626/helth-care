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
        
        async grayMode(){
            this.isDarkMode = 'gray'
            return this.isDarkMode;
        },
        
        async contrastMode(){
            this.isDarkMode = 'contrast'
            return this.isDarkMode;
        },
        
        async negativeContrastMode(){
            this.isDarkMode = 'negative-contrast'
            return this.isDarkMode;
        },
     },

})