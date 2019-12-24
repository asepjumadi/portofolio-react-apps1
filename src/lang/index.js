import IntlRelativeTimeFormat from '@formatjs/intl-relativetimeformat';
import enLang from './entries/en-US';
import frLang from './entries/fr_FR';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/dist/locale-data/en';
const AppLocale = {
    en: enLang,
    if: frLang
};
if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/dist/locale-data/en'); // Add locale data for de
  }
  
  if (!Intl.RelativeTimeFormat) {
    require('@formatjs/intl-relativetimeformat/polyfill');
    require('@formatjs/intl-relativetimeformat/dist/locale-data/en'); // Add locale data for de
  }

export default AppLocale;