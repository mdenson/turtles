var Beach = require('../models/beach');

module.exports = {
    oninit: Beach.loadlist,
    view: function() {
        Beach.current = {};
        console.log('beachList.view: Beach.list length ' + Beach.list.length);
        return m('.w3-container w3-padding-24', [
            m('.w3-container w3-black', [
                m('span.w3-xlarge w3-padding', 'Sites'),
                m(
                    'button.w3-button w3-padding w3-right',
                    { href: '/beaches/edit/new', oncreate: m.route.link },
                    'New',
                ),
            ]),
            // each beach - note '.id' is part of the result set, where '.doc.' is only there if the doc is included
            m('.w3-row-padding', [
                Beach.list.map(function(b) {
                    return m('.w3-col m4 w3-padding-16', [
                        m('.w3-container w3-card-4 w3-dark-grey', [
                            m(
                                '.w3-container w3-center',
                                [
                                    //								m("h1", "Pic"),
                                    m('h1', b.doc.name),
                                    m('h5', b.doc.state + ', ' + b.doc.country),
                                ],
                                m(
                                    'a.w3-button w3-green',
                                    {
                                        href: '/beaches/' + b.doc._id,
                                        oncreate: m.route.link,
                                    },
                                    'View',
                                ),
                                m(
                                    'a.w3-button w3-red',
                                    {
                                        href: '/beaches/edit/' + b.doc._id,
                                        oncreate: m.route.link,
                                    },
                                    'New Debris',
                                ),
                            ),
                        ]),
                    ]);
                }),
            ]),
            m(
                '.w3-container w3-black w3-center',
                Beach.list.length +
                    (Beach.list.length == 1 ? ' site' : ' sites'),
            ),
        ]);
    },
};
