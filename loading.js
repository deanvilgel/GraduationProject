pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'none';

        var logo = document.createElement('img');
        logo.src = "data:image/png;base64,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";
        splash.appendChild(logo);
        logo.onload = function () {
            splash.style.display = 'block';
        };

        var container = document.createElement('div');
        container.id = 'progress-bar-container';
        splash.appendChild(container);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);

    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        splash.parentElement.removeChild(splash);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        if (bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    };

    var createCss = function () {
        var css = [
            'body {',
            '    background-color: #FFFFFF;',
            '}',

            '#application-splash-wrapper {',
            '    position: relative;',
            '    margin: 0 auto;',
            '    height: 100%;',
            '    width: 100%;',
            '    background-color: #FFFFFF;',
            '}',

            '#application-splash {',
            '    position: relative;',
            '    top: calc(50% - 96px);',
            '    width: 250px;',
            '    left: calc(50% - 125px);',
            '}',

            '#application-splash img {',
            '    width: 100%;',
            '}',

            '#progress-bar-container {',
            '    margin: 20px 0 auto 0;',
            '    height: 2px;',
            '    width: 100%;',
            '    background-color: #000000;',
            '}',

            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    background-color: #FFB40C;',
            '}',

            '@media (max-width: 480px) {',
            '    #application-splash {',
            '        position: relative;',
            '        top: calc(50% - 65px);',
            '        width: 170px;',
            '        left: calc(50% - 85px);',
            '    }',
            '    #progress-bar-container {',
            '        margin: 13px 0 auto 0;',
            '        height: 2px;',
            '        width: 100%;',
            '        background-color: #000000;',
            '}'

        ].join("\n");

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };


    createCss();

    showSplash();

    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});