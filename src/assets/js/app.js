$(document).foundation();

//**## NEM NEWS FEED ##**/
//Pulls twitter feed using twitter fetcher.
// Also automatically hyperlinks URLS and user mentions and hashtags.
//@nemcoin
var config1 = {
  "id": '474290838172749825',
  "domId": 'newsFeed',
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": true,
  "showImages": true,
  "showTime": true,
  "dateFunction": '',
  "showRetweet": false,
  "showInteraction": false
};
twitterFetcher.fetch(config1);

// given registered post processor
// i18n.addPostProcessor("markdown", function(val, key, opts) {
//    return require("markdown").markdown.toHTML(val);
// });


$.i18n.init({
		ns: { namespaces: ['en', 'es'], defaultNs: 'en'},
		useLocalStorage: false,
		fallbackLng: 'en',
    resGetPath: 'assets/locales/__lng__.json',
    // postProcess: 'markdown',
		debug: true
	}, function(t) {
		$('#add').text($.t('ns.common:add'));
		$('#appname').text($.t('app.name'));
		$('#appclient').text($.t('app.client'));
		<!-- OURNEM HOMEPAGE -->
		$('#navclient').text($.t('sec'));
		$('#navbuy').text($.t('nav.buy'));
		$('#blog').text($.t('nav.blog'));
		$('#test123').i18n();
});
// i18nextJquery.init(i18nextInstance, $, {
//   tName: 't', // --> appends $.t = i18next.t
//   i18nName: 'i18n', // --> appends $.i18n = i18next
//   handleName: 'localize', // --> appends $(selector).localize(opts);
//   selectorAttr: 'data-i18n', // selector for translating elements
//   targetAttr: 'data-i18n-target', // element attribute to grab target element to translate (if diffrent then itself)
//   optionsAttr: 'data-i18n-options', // element attribute that contains options, will load/set if useOptionsAttr = true
//   useOptionsAttr: false, // see optionsAttr
//   parseDefaultValueFromContent: true // parses default values from content ele.val or ele.text
//   });
      // $(".nav").localize();
