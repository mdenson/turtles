var Beach = require('../models/beach');

module.exports = {
    oninit: Beach.loadlist,
    view: function() {
        console.log('beachList.view: Beach.list length ' + Beach.list.length);
        return m('.w3-black', [
            Beach.list.map(function(beach) {
                // each beach - note '.id' is part of the result set, where '.doc.' is only there if the doc is included
                console.log(
                    'beachList.view: Beach ' +
                        beach.doc._id +
                        ' name ' +
                        beach.doc.name,
                );
                return m(
                    'a.w3-button w3-black w3-padding-large w3-large',
                    {
                        href: '/beaches/' + beach.doc._id,
                        oncreate: m.route.link,
                    },
                    beach.doc.name,
                );
            }),
            // add new beach
            m(
                'button.w3-button w3-black w3-padding-large w3-large w3-right',
                { href: '/beaches/edit/new', oncreate: m.route.link },
                '+',
            ),
        ]);
    },
};
