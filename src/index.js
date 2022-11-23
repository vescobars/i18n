import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobsList";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

//Select the locale dynamicaly
const userLocale = (navigator.language && navigator.languages.length) ? navigator.languages[0] : navigator.language;

ReactDOM.render(
        <IntlProvider locale={userLocale} messages= {localeEsMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);