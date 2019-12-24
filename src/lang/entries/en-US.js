/**
 * English locale
 */
import appLocaleData from 'react-intl/dist/react-intl';
import '@formatjs/intl-pluralrules/dist/locale-data/en';
import enMessages from '../locales/en_US';

const EnLang = {
    messages: {
        ...enMessages
    },
    locale: 'en-US',
    data: appLocaleData
};
export default EnLang;