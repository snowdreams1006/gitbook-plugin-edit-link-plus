require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind('start', function (e, config) {
        var conf = config['edit-link-plus'];
        var label = conf.label;
        var base = conf.base;

        // Add slash at the end if not present
        if (base.slice(-1) != "/") {
            base = base + "/";
        }

        var lang = gitbook.state.innerLanguage;
        console.log('1 lang: '+lang);

        if (lang) {
            // label can be a unique string for multi-languages site
            if (typeof label === 'object') label = label[lang];

            lang = lang + '/';
        }
        console.log('2 lang: '+lang);

        

        gitbook.toolbar.createButton({
            icon: 'fa fa-edit',
            text: label,
            onClick: function() {
                var filepath = gitbook.state.filepath;
                console.log('filepath: '+filepath);

                window.open(base + lang + filepath);
            }
        });
    });
});



// {% extends template.self %}
// {% block head %}
//     {{ super() }}
//     {% if config.pluginsConfig['favicon-absolute'].favicon %}
//         <link rel="shortcut icon" href="{{ config.pluginsConfig['favicon-absolute'].favicon}}" type="image/x-icon">
//     {% endif %}
//     {% if config.pluginsConfig['favicon-absolute'].bookmark %}
//         <link rel="bookmark" href="{{ config.pluginsConfig['favicon-absolute'].bookmark}}" type="image/x-icon">
//     {% endif %}
//     {% if config.pluginsConfig['favicon-absolute'].appleTouchIcon152 %}
//         <link rel="apple-touch-icon" sizes="152x152" href="{{ config.pluginsConfig['favicon-absolute'].appleTouchIcon152}}">
//     {% endif %}
//     {% if config.pluginsConfig['favicon-absolute'].appleTouchIconPrecomposed152 %}
//         <link rel="apple-touch-icon-precomposed" sizes="152x152" href="{{ config.pluginsConfig['favicon-absolute'].appleTouchIconPrecomposed152}}">
//     {% endif %}
//     {% if config.pluginsConfig['favicon-absolute'].appleTouchIconMore %}
//         {% for s,p in config.pluginsConfig['favicon-absolute'].appleTouchIconMore %}
//         <link rel="apple-touch-icon" sizes="{{ s }}" href="{{ p }}">
//         {%  endfor %}
//     {% endif %}
//     {% if config.pluginsConfig['favicon-absolute'].appleTouchIconPrecomposedMore %}
//         {% for s,p in config.pluginsConfig['favicon-absolute'].appleTouchIconPrecomposedMore %}
//         <link rel="apple-touch-icon-precomposed" sizes="{{ s }}" href="{{ p }}">
//         {%  endfor %}
//     {% endif %}
// {% endblock %}