chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {
            redirectUrl: 'http://thinkchecksubmit.org/'
        }
    },
    {
        urls: [
            '*://ees.elsevier.com/*',
            '*://editorial.elsevier.com/*'
        ],
        types: ['main_frame']
    },
    ['blocking']
)

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {
            redirectUrl: details.url.replace(
                /^http:\/\/www\.sciencedirect\.com\//,
                'http://www.sciencedirect.com.sci-hub.io/'
            )
        }
    },
    {
        urls: [
            '*://www.sciencedirect.com/science/article/pii/*'
        ],
        types: ['main_frame']
    },
    ['blocking']
)
