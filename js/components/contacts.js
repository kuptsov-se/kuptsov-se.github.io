export const contacts = Vue.component('contacts', {
    template: `
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Contacts
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <div>
                        <span class="icon is-large">
                            <a :href="sendMailLink" target="_blank">
                                <i class="fas fa-envelope" style="font-size: 2.5em; color: #000000"></i>
                            </a>
                        </span>
                        <strong style="vertical-align: super;">{{ email }}</strong>
                    </div>
                    <div>
                        <span class="icon is-large">
                            <a :href="phoneLink" target="_blank">
                                <i class="fas fa-mobile-alt" style="font-size: 2.5em; color: #000000"></i>
                            </a>
                        </span>
                        <strong style="vertical-align: super;">{{ phone }}</strong>
                    </div>
                    <div style="vertical-align: center">
                        <span class="icon is-large">
                            <a :href="linkedInLink" target="_blank">
                                <i class="fab fa-linkedin" style="font-size: 2.5em; color: #000000"></i>
                            </a>
                        </span>
                        <strong style="vertical-align: super;">{{ linkedInNickname }}</strong>
                    </div>
                    <div>
                        <span class="icon is-large">
                            <a :href="telegramLink" target="_blank">
                                <i class="fab fa-telegram" style="font-size: 2.5em; color: #000000"></i>
                            </a>
                        </span>
                        <strong style="vertical-align: super;">{{ telegramNickname }}</strong>
                    </div>
                </div>
            </div>
        </div>`,
    data() {
        return {
            sendMailLink: 'mailto:dkuptsov.ua@gmail.com',
            email: 'dkuptsov.ua@gmail.com',
            phoneLink: 'tel:+380974278919',
            phone: '+38 (097) 427-89-19',
            linkedInLink: 'https://www.linkedin.com/in/dmytro-kuptsov/',
            linkedInNickname: 'dmytro-kuptsov',
            telegramLink: 'https://t.me/dkuptsov_ua',
            telegramNickname: 'dkuptsov_ua',
        };
    }
});
