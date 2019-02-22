var Layout = {
    view: function(vnode) {
        return m('main.layout', [
            m('.w3-top', [
                m('nav.w3-bar w3-red w3-card-2 w3-left-align w3-large', [
                    m(
                        'a.w3-bar-item w3-button w3-padding-large w3-white',
                        { href: '/', oncreate: m.route.link },
                        'Home',
                    ),
                    m(
                        'a.w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red',
                        {
                            href: 'javascript:void(0);',
                            onclick: 'myFunction()',
                            title: 'Toggle Navigation Menu',
                        },
                        '...',
                    ),
                    m(
                        'a.w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white',
                        { href: '/beaches', oncreate: m.route.link },
                        'Sites',
                    ),
                    m(
                        'a.w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white',
                        { href: '/surveys', oncreate: m.route.link },
                        'Surveys',
                    ),
                ]),
                m(
                    '#navDemo.w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large',
                    [
                        m(
                            'a.w3-bar-item w3-button w3-padding-large',
                            { href: '/beaches', oncreate: m.route.link },
                            'Sites',
                        ),
                        m(
                            'a.w3-bar-item w3-button w3-padding-large',
                            { href: '/surveys', oncreate: m.route.link },
                            'Surveys',
                        ),
                    ],
                ),
            ]),
            m('br'),
            m('br'),
            m('section', vnode.children),
            m(
                'footer.w3-container w3-padding-64 w3-center w3-opacity',
                m('.w3-xlarge w3-padding-32', [
                    m(
                        'p',
                        'A data entry web application for  The Science Exchange',
                    ),
                ]),
            ),
        ]);
    },
};

export default Layout;
