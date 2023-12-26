// ==UserScript==
// @name         Get rid of EU Cookie Banners
// @namespace    http://blog.deobald.org/
// @description  Get rid of EU Cookie Banners
// @license      http://creativecommons.org/licenses/by-nc-sa/3.0/
// @downloadURL  https://gist.githubusercontent.com/BlaM/6d826d6e9d77d2d77bf9a92fdad55788/raw/cookiebanner-go-away.user.js
// @homepage     https://gist.github.com/BlaM/6d826d6e9d77d2d77bf9a92fdad55788
// @version      0.3.4
// @author       Dominik Deobald
// @match        http*://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    var config = {
        selectors: {
            rules: [
                // https://cookiesok.com/
                {hostname: /./, action: "click", target: ".CookiesOK"},

                {hostname: /./, action: "click", target: "#closeCookieBanner"},
                {hostname: /./, action: "click", target: ".CookieBanner-button"},
                {hostname: /./, action: "click", target: "#nts-set-cookie"},
                {hostname: /./, action: "click", target: ".cc_btn_accept_all"},
                {hostname: /./, action: "click", target: ".noticeCookiesContent .CustomDismissCtrl"},
                {hostname: /./, action: "click", target: ".cookie-consent .cookie-btn"},
                {hostname: /./, action: "click", target: "#accept-cookies"},
                {hostname: /./, action: "click", target: "#cookie_button_agree"},
                {hostname: /./, action: "click", target: "#cookies-agreement #agree-button"},
                {hostname: /./, action: "click", target: "#cookielayer .action-btn"},
                {hostname: /./, action: "click", target: ".cookie.nag .close"},
                {hostname: /./, action: "click", target: "#__tealiumGDPRecModal #consent_prompt_submit"},
                {hostname: /./, action: "click", target: 'button[data-selenium="CookiesAcceptButton"]'},
                {hostname: /./, action: "click", target: ".gdpr__button"},
                {hostname: /./, action: "click", target: ".eu-cookie-compliance-agree-button"},
                {hostname: /./, action: "click", target: ".cookie-notification .js-cookie-notification-hide"},
                {hostname: /./, action: "click", target: ".js-accept-cookie-policy"},

                // http://cookielawinfo.com/user-guide/
                {hostname: /./, action: "click", target: "#cookie-law-info-bar #cookie_action_close_header"},

                // https://www.jqueryscript.net/other/Minimal-EU-Cookies-Law-Notice-Plugin-For-jQuery-Cookiebar.html
                {hostname: /./, action: "click", target: "#cookie-bar .cb-enable"},
                {hostname: /./, action: "click", target: ".cookie-bar .cb-enable"},

                // medium.com
                {hostname: /./, action: "click", target: '.butterBar--privacy button[title*="I agree"]'},
                // blogspot.com
                {hostname: /./, action: "click", target: "#cookieChoiceDismiss"},
                // oath (Tumblr)
                {hostname: /./, action: "click", target: 'div[data-view="guce-gdpr"] button[data-submit="agree"]'},
                // HumbleBundle
                {hostname: /./, action: "click", target: "#_evidon-accept-button"},
                // WordPress
                {hostname: /./, action: "click", target: ".widget_eu_cookie_law_widget .accept"},
                // Doodle
                {hostname: /./, action: "click", target: "#d-dismissCookieBanner"},
                // Sivantos
                {hostname: /./, action: "click", target: ".cookie-confirmation-button"},
                // StackOverflow
                {hostname: /./, action: "click", target: "#js-gdpr-consent-banner .js-notice-close"},
                // DPD
                {hostname: /./, action: "click", target: "#btnCookieOK"},
                {hostname: /./, action: "click", target: ".cookiesOkButton"},
                // Payback
                {hostname: /./, action: "click", target: 'div[data-userhiddencontent-name="dsgvo"] .stripe__collapse-trigger'},

                // Paypal
                {hostname: /./, action: "click", target: "a#acceptAllButton"},

                // TK.de
                {hostname: /./, action: "click", target: '#dsgvoAccepted a[title="Cookie-Hinweis schließen"]'},

                {hostname: /soundcloud.com$/, action:"remove", "target":".announcements"},
                {hostname: /o2online.de$/, action: "click", target: "#need-to-close-quickly-true"},
                {hostname: /verivox.de$/, action: "click", target: ".gdpr-vx-consent-bar-button"},
                {hostname: /telekom.de$/, action: "click", target: 'input[name="/de/telekom/phoenix/checkout/controller/CookiesPolicyFormHandler.submit"]'},
                {hostname: /./, action: "click", target: 'button[data-gdpr-single-choice-accept]'},
                {hostname: /./, action: "click", target: '#CybotCookiebotDialogBodyLevelButtonAccept'},
                {hostname: /./, action: "click", target: '#cookieinfo-close'},
                {hostname: /./, action: "click", target: '#disclaimer-cookie-accept'},
                {hostname: /derstandard/, action: "click", target: '.js-privacywall-agree'},
                {hostname: /./, action: "click", target: '.optanon-allow-all'},
                {hostname: /./, action: "click", target: '.js-hide-cookie-message'},
                {hostname: /./, action: "click", target: '.cookies-message__close'},
                {hostname: /./, action: "click", target: '.js_gdpr_close'},
                {hostname: /./, action: "click", target: '#acceptCookieHint'},
                {hostname: /./, action: "click", target: '#btn-agree-cookie'},
                {hostname: /polygon.com$/, action: "remove", target: '#privacy-consent'},
                {hostname: /./, action: "remove", target: '.eupopup-container'},
                {hostname: /./, action: "remove", target: '.cookie_hint'},
                {hostname: /./, action: "remove", target: '.cookiebanner'},
                {hostname: /./, action: "remove", target: '#cookiebanner'},
                {hostname: /./, action: "click", target: '#cookieBarConfirm'},
                {hostname: /./, action: "remove", target: '#cookieBar'},
                {hostname: /./, action: "remove", target: '.cc_banner-wrapper'},
                {hostname: /./, action: "remove", target: '#js-eu-cookie'},
                {hostname: /./, action: "remove", target: '#AcceptCookiesBanner'},
                {hostname: /./, action: "remove", target: '.js-CookieBanner'},
                {hostname: /payback/, action: "remove", target: 'div[data-userhiddencontent-name="dsgvo"]'},
                {hostname: /(stern.de)/, action: "click", target: '.guj-cb__button'},
                {hostname: /./, action: "click", target: '#ck-close-cookie-statement'},
                {hostname: /./, action: "remove", target: '#ck-cookie-statement'},
                {hostname: /./, action: "remove", target: '.cc-window,.cc-banner,.cc-overlay'},

                // http://cookielawinfo.com/user-guide/
                {hostname: /./, action: "remove", target: '#cookie-law-info-bar'},
                {hostname: /blogspot.com/, action: "remove", target: '#cookieChoiceInfo'},
                {hostname: /sivantos/, action: "remove", target: '.cookie-confirmation'},
                {hostname: /ikea.com$/, action: "remove", target: '#cookieMsgBlock'},
                {hostname: /paypal.com$/, action: "remove", target: '#gdprCookieBanner'},
                {hostname: /tk.de$/, action: "remove", target: '#dsgvoAccepted'},

                {hostname: /planet.com/, action: "click", target: '.pl-cookies-cta .pl-accept'},

                {hostname: /./, action: "remove", target: '#cookie-banner'},

                // https://de.wordpress.org/plugins/cookie-notice/
                {hostname: /./, action: "remove", target: "#cookie-notice"},

                {hostname: /adobe/, action: "click", target: "#_evidon-accept-button"},
                {hostname: /dict.cc/, action: "click", target: "#sncmp-popup-ok-button"},
                {hostname: /basiszinssatz.de/, action: "remove", target: "#wrapperdiv"},

                {hostname: /citroen.de/, action: 'remove', target: "#_psaihm_main_div,_psaihm_overlay"}
            ],
            rulesdelay: [
//              {hostname: /./, action: "click", target: '.cc-banner .cc-dismiss'},
//              {hostname: /./, action: "click", target: '.cc-window .cc-dismiss'},
                {hostname: /./, action: "remove", target: '#cookie-banner'},
                {hostname: /./, action: "click", target: '#cookie-consent-accept-button'},
                {hostname: /./, action: "remove", target: ".cc_banner-wrapper"},

            ]
        }
    };

    function doClick(node, selector) {
        var didSomething = false;
        for (var i = 0; i < node.length; i++) {
	    if (!node[i].dataset.cookieAwayClicked) {
                node[i].click();
                node[i].dataset.cookieAwayClicked = true;
                didSomething = true;
            }
        }
        if (didSomething) {
            console.log('click', selector);
        }
    }

    function doRemove(node, selector) {
        for (var i = 0; i < node.length; i++) {
            node[i].remove();
        }
        if (node.length && selector) { console.log('remove', selector); }
    }

    function doRule(rule) {
        if (typeof rule.hostname == 'string' && rule.hostname !== location.hostname) { return; }
        if (typeof rule.hostname == 'object' && typeof rule.hostname.match == 'function' && !rule.hostname.match(location.hostname)) { return; }

        if (rule.action == 'remove') { doRemove($$(rule.target), rule.target); }
        if (rule.action == 'click') { doClick($$(rule.target), rule.target); }
    }

    var $$ = function(s) {
        return document.querySelectorAll(s);
    };

    function getObject(key, defValue) {
        var obj = window, keys;

        try {
            keys = key.split('.');

            for (var i = 0; i < keys.length; i++) {
                obj = obj[keys[i]];
            }
        } catch(e) {
            obj = defValue || null;
        }

        return typeof obj !== 'undefined'? obj : defValue;
    };

    function firstCall() {
        typeof getObject('Cookiebot.dialog.submitConsent') == 'function' && window.Cookiebot.dialog.submitConsent();
        typeof window.hideCookieHint == 'function' && window.hideCookieHint(true);
        typeof window.golemAcceptCookies == 'function' && window.golemAcceptCookies();
        typeof window.CookiesOK == 'function' && window.CookiesOK();
        typeof getObject('CookieControl.notifyAccept') == 'function' && window.CookieControl.notifyAccept();
    }

    function delayCall1() {
        config.selectors.rules = config.selectors.rules.concat(config.selectors.rulesdelay);
    }

    function delayCall2() {
    }

    function delayCall5() {
        typeof window.__cmpui == 'function' && window.__cmpui("setAndSaveAllConsent",!0); // SourceForge

        config.selectors.rules = config.selectors.rules.concat(config.selectors.rulesdelay);
    }

    function execute() {
        config.selectors.rules.forEach(doRule);
    }

    setTimeout(firstCall, 100);
    setTimeout(execute, 150);
    setTimeout(execute, 500);
    setTimeout(delayCall1, 1100);
    setTimeout(execute, 2000);
    setTimeout(delayCall2, 2100);
    setTimeout(execute, 5000);
    setTimeout(delayCall5, 5100);
    setTimeout(execute, 10000);
})();
