var Beach = require('../models/beach');

module.exports = {
    oninit: function(vnode) {
        console.log('beachForm: oninit - vnode.attrs.id ' + vnode.attrs.id);
        Beach.load(vnode.attrs.id);
    },
    view: function() {
        console.log(
            'beachForm.view: ' +
                Beach.current._id +
                ', ' +
                Beach.current.name +
                ', ' +
                Beach.current.country,
        );
        return m(
            'form',
            {
                onsubmit: function(e) {
                    e.preventDefault();
                    Beach.save();
                    m.route.set('/beaches/' + Beach.current._id);
                },
            },
            [
                m('.w3-card w3-row-padding w3-padding', [
                    m('.w3-container w3-black', [
                        m(
                            'header.w3-container w3-black',
                            m('h4', 'MDMAP ID #120 Zero - Standing-Stock'),
                            m(
                                'button.w3-button w3-black w3-padding-large w3-large w3-right[type=submit]',
                                'Save',
                            ),
                        ),
                    ]),
                    m('.w3-container', [
                        m('.w3-half w3-padding', [
                            m(
                                'header.w3-container w3-dark-grey',
                                m('h5', 'General Info'),
                            ),
                            m('.w3-cell-row', [
                                m('.w3-container w3-cell', [
                                    m('p', 'Organization'),
                                    m('p', 'Surveyor Name'),
                                    m('p', 'Phone'),
                                    m('p', 'Date'),
                                ]),
                                m('.w3-container w3-cell', [
                                    m(
                                        'input.w3-input[type=text][placeholder=Organization]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.organization = value;
                                                },
                                            ),
                                            value: Beach.current.organization,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Surveyor]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.surveyor = value;
                                                },
                                            ),
                                            value: Beach.current.surveyor,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Phone]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.phone = value;
                                                },
                                            ),
                                            value: Beach.current.phone,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Date]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.date = value;
                                                },
                                            ),
                                            value: Beach.current.date,
                                        },
                                    ),
                                ]),
                            ]),
                        ]),
                        m('.w3-half w3-padding', [
                            m(
                                'header.w3-container w3-dark-grey',
                                m('h5', 'Shoreline Characteristics'),
                            ),
                            m('.w3-cell-row', [
                                m('.w3-container w3-cell', [
                                    m('p', 'Length of Sample Area (m)'),
                                    m('p', 'Substratum Type'),
                                    m('p', 'Substratum Uniformity'),
                                    m('p', 'Tidal Range (f)'),
                                    m('p', 'Tidal Distance (m)'),
                                    m('p', 'Back of Shoreline'),
                                    m('p', 'Aspect'),
                                    m('p', 'Slope'),
                                ]),
                                m('.w3-container w3-cell', [
                                    m(
                                        'input.w3-input[type=text][placeholder=in meters]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.length = value;
                                                },
                                            ),
                                            value: Beach.current.length,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=sand, gravel, rock]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.substratum = value;
                                                },
                                            ),
                                            value: Beach.current.substratum,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=percentage]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.coverage = value;
                                                },
                                            ),
                                            value: Beach.current.coverage,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=in feet]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.vtidalrange = value;
                                                },
                                            ),
                                            value: Beach.current.vtidalrange,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=in meters]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.htidalrange = value;
                                                },
                                            ),
                                            value: Beach.current.htidalrange,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=sand, vegetation, etc.]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.shorelineback = value;
                                                },
                                            ),
                                            value: Beach.current.shorelineback,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=direction]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.aspect = value;
                                                },
                                            ),
                                            value: Beach.current.aspect,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=slope]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.slope = value;
                                                },
                                            ),
                                            value: Beach.current.slope,
                                        },
                                    ),
                                ]),
                            ]),
                        ]),
                        m('.w3-half w3-padding', [
                            m(
                                'header.w3-container w3-dark-grey',
                                m('h5', 'Sampling Area'),
                            ),
                            m('.w3-cell-row', [
                                m('.w3-container w3-cell', [
                                    m('p', 'MDMAP ID#'),
                                    m('p', 'Shoreline Name'),
                                    m('p', 'Country'),
                                    m('p', 'State'),
                                    m('p', 'County'),
                                    m('p', 'Start Coords (Lat, Long)'),
                                    m('p', 'End Coords (Lat, Long)'),
                                ]),
                                m('.w3-container w3-cell', [
                                    m('input.w3-input[type=text]', {
                                        oninput: m.withAttr('value', function(
                                            value,
                                        ) {
                                            Beach.current.mdmapid = value;
                                        }),
                                        value: Beach.current.mdmapid,
                                    }),
                                    m(
                                        'input.w3-input[type=text][placeholder=Name]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.name = value;
                                                },
                                            ),
                                            value: Beach.current.name,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Country]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.country = value;
                                                },
                                            ),
                                            value: Beach.current.country,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=State]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.state = value;
                                                },
                                            ),
                                            value: Beach.current.state,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=County]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.county = value;
                                                },
                                            ),
                                            value: Beach.current.county,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Start]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.startlat = value;
                                                },
                                            ),
                                            value: Beach.current.startlat,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=End]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.endlat = value;
                                                },
                                            ),
                                            value: Beach.current.endlat,
                                        },
                                    ),
                                ]),
                            ]),
                        ]),
                        m('.w3-half w3-padding', [
                            m(
                                'header.w3-container w3-dark-grey',
                                m('h5', 'Land-Use Characteristics'),
                            ),
                            m('.w3-cell-row', [
                                m('.w3-container w3-cell', [
                                    m('p', 'Location'),
                                    m('p', 'Major Usage'),
                                    m('p', 'Access'),
                                    m('p', 'Nearest Town'),
                                    m('p', 'Nearest Town Distance (mi)'),
                                    m('p', 'Nearest Town Direction'),
                                    m('p', 'Nearest River'),
                                    m('p', 'Nearest River Distance (mi)'),
                                    m('p', 'Nearest River Direction'),
                                    m('p', 'River/Creek Input'),
                                    m('p', 'Pipe or Drain Input'),
                                ]),
                                m('.w3-container w3-cell', [
                                    m(
                                        'input.w3-input[type=text][placeholder=Rural, Urban]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.location = value;
                                                },
                                            ),
                                            value: Beach.current.location,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Usage]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.usage = value;
                                                },
                                            ),
                                            value: Beach.current.usage,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Access]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.access = value;
                                                },
                                            ),
                                            value: Beach.current.access,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Town]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.town = value;
                                                },
                                            ),
                                            value: Beach.current.town,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=in miles]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.towndis = value;
                                                },
                                            ),
                                            value: Beach.current.towndis,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Direction]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.towndir = value;
                                                },
                                            ),
                                            value: Beach.current.towndir,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=River]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.river = value;
                                                },
                                            ),
                                            value: Beach.current.river,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=in miles]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.riverdis = value;
                                                },
                                            ),
                                            value: Beach.current.riverdis,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Direction]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.riverdir = value;
                                                },
                                            ),
                                            value: Beach.current.riverdir,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Yes/No]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.riverinput = value;
                                                },
                                            ),
                                            value: Beach.current.riverinput,
                                        },
                                    ),
                                    m(
                                        'input.w3-input[type=text][placeholder=Yes/No]',
                                        {
                                            oninput: m.withAttr(
                                                'value',
                                                function(value) {
                                                    Beach.current.draininput = value;
                                                },
                                            ),
                                            value: Beach.current.draininput,
                                        },
                                    ),
                                ]),
                            ]),
                        ]),
                    ]),
                ]),
            ],
        );
    },
};
