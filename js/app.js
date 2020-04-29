import { heroSection } from './components/hero.js';
import { contacts } from './components/contacts.js';
import { skills } from './components/skills.js';
import { languages } from './components/languages.js';

const app =new Vue({
    el: '#app',
    data(){
        return {
            message: 'hello',
        }
    },
    components: {
        heroSection,
        contacts,
        skills,
        languages,
    }
});