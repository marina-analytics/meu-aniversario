// Funcionalidades da página pública do convite.

const eventDate = new Date('2025-03-08T14:00:00');
const countdownElement = document.getElementById('countdown');
const countdownTitle = document.getElementById('countdown-title');
const rsvpForm = document.getElementById('rsvp-form');
const formNotice = document.getElementById('form-notice');

function updateCountdown() {
    if (!countdownElement || !countdownTitle) return;

    const now = new Date();
    const timeDifference = eventDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
        countdownTitle.textContent = 'Uma lembrança especial';
        countdownElement.textContent = 'Este evento já aconteceu. Obrigada por fazer parte da história!';
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.replaceChildren(
        createCountdownItem(days, 'Dias'),
        createCountdownItem(hours, 'Horas'),
        createCountdownItem(minutes, 'Minutos'),
        createCountdownItem(seconds, 'Segundos')
    );
}

function createCountdownItem(value, label) {
    const item = document.createElement('div');
    item.className = 'countdown-item';

    const number = document.createElement('span');
    number.className = 'countdown-number';
    number.textContent = String(value);

    const lineBreak = document.createElement('br');

    const text = document.createElement('span');
    text.className = 'countdown-label';
    text.textContent = label;

    item.append(number, lineBreak, text);
    return item;
}

if (rsvpForm && formNotice) {
    rsvpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formNotice.textContent = 'Esta versão ainda não está conectada a um banco de dados. Nenhuma confirmação foi salva ou enviada.';
    });
}

updateCountdown();
if (eventDate.getTime() > Date.now()) {
    window.setInterval(updateCountdown, 1000);
}
