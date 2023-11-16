export const heroSection = Vue.component('hero-section', {
    template: `
        <section class="hero">
            <div class="hero-body">
                <div class="tile is-ancestor">
                    <div class="container">
                        <h1 class="title">
                             {{ fullName }}
                        </h1>
                        <h2 class="subtitle">
                            {{ position }}
                        </h2>
                    </div>
                </div>
            </div>
        </section>`,
    data() {
        return {
            fullName: 'Dmytro Kuptsov',
            position: 'Software Engineer (PHP & Golang)',
        };
    }
});
