export const skills = Vue.component('skills', {
    template: `
        <div class="card" style="margin-top: 10px;">
            <header class="card-header">
                <p class="card-header-title">
                    Skills
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <div class="tags are-medium">
                        <span v-for="skill in skills" class="tag is-black">{{ skill }}</span>
                    </div>
                </div>
            </div>
        </div>`,
    data() {
        return {
            skills: [
                'PHP', 'MySQL', 'Symfony', 'Laravel', 'Design patterns',
                'OOP', 'Vue', 'HTML5', 'JavaScript', 'Bootstrap', 'jQuery',
                'Git', 'CSS', 'REST', 'Docker', 'PHPUnit', 'Kohana', 'MongoDB',
                'RabbitMQ'
            ],
        };
    }
});