'use strict';

import $ from 'jquery';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
    faFolder,
    faUser,
    faCalendar,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faEnvelope,
    faRss,
    faTag,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faGithub,
    faGitlab,
    faInstagram,
    faKeybase,
    faLinkedin,
    faMastodon,
    faMedium,
    faPinterest,
    faReddit,
    faStackOverflow,
    faTwitter,
    faWeibo,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faFolder,
    faUser,
    faCalendar,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faEnvelope,
    faFacebook,
    faGithub,
    faGitlab,
    faInstagram,
    faKeybase,
    faLinkedin,
    faMastodon,
    faMedium,
    faPinterest,
    faReddit,
    faRss,
    faStackOverflow,
    faTag,
    faTwitter,
    faWeibo,
);

export default {
    loadFontAwesome: () => {
        dom.watch();
    },
};
