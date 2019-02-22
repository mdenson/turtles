import Survey from '../models/survey';

var SurveyList = {
    oninit: Survey.loadlist,
    view: function() {
        console.log(
            'surveyList.view: survey.list length ' + Survey.list.length,
        );
        return m('.w3-container w3-padding-24', [
            m('.w3-container w3-black', [
                m('span.w3-xlarge w3-padding', 'Surveys'),
                m(
                    'button.w3-button w3-padding w3-right',
                    { href: '/surveys/edit/new', oncreate: m.route.link },
                    'New',
                ),
            ]),
            // each Survey - note '.id' is part of the result set, where '.doc.' is only there if the doc is included
            m('.w3-container w3-padding', [
                m('ul.w3-ul', [
                    Survey.list.map(function(s) {
                        console.log(
                            'surveyList.view: survey ' +
                                s.doc._id +
                                ' date ' +
                                s.doc.date,
                        );
                        return m('li', [
                            m(
                                'a.w3-button w3-right',
                                {
                                    href: '/surveys/' + s.doc._id,
                                    oncreate: m.route.link,
                                },
                                'View',
                            ),
                            m(
                                'a.w3-button w3-right',
                                {
                                    href: '/surveys/edit/' + s.doc._id,
                                    oncreate: m.route.link,
                                },
                                'Edit',
                            ),
                            m('span.w3-large', s.doc.date),
                            m('br'),
                            // TODO: need something meaningful here m("span", Survey.doc.state + ", " + Survey.doc.country),
                        ]);
                    }),
                ]),
            ]),
            m(
                '.w3-container w3-black w3-center',
                Survey.list.length +
                    (Survey.list.length == 1 ? ' survey' : ' surveys'),
            ),
        ]);
    },
};

export default SurveyList;
