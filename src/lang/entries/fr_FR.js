/**
 * French locale
 */
import appLocaleData from 'react-intl/dist/react-intl';
import '@formatjs/intl-pluralrules/dist/locale-data/fr';
import saMessages from '../locales/fr_FR';

const saLang = {
    messages: {
        ...saMessages
    },
    locale: 'fr-FR',
    data: appLocaleData
};
export default saLang;
