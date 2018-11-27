import { decks } from './data';

export default {
    fetch(path, timeout) {
        if (path === '/decks') {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(decks);
                }, timeout);
            });
        }
    }
};