import Survey from '../models/survey';

function headerTitle(survey) {
    let title = survey.date ? survey.date : 'New Survey';
    title += survey.beach ? ' - ' + survey.beach : '';
    return title;
}

var w3InputRow = {
    view: (vnode) => {
        return m('div.w3-cell-row', [
            m('p.w3-cell.w3-third', vnode.attrs.label),
            m(
                'input.w3-input.w3-cell.w3-twothird[type=text][placeholder=' +
                    vnode.attrs.placeholder +
                    ']',
                {
                    oninput: m.withAttr('value', function(v) {
                        vnode.attrs.value = v;
                    }),
                    value: vnode.attrs.value,
                },
            ),
        ]);
    },
};

var w3Section = {
    view: (vnode) => {
        return m(
            'div.w3-container',
            m('div.w3-content', [
                m(
                    'header.w3-container w3-dark-grey',
                    m('h5', vnode.attrs.title),
                ),
                vnode.attrs.content.map((item) => {
                    console.log('w3Section: item ' + item.label);
                    return m(w3InputRow, {
                        label: item.label,
                        value: item.value,
                        placeholder: item.placeholder,
                    });
                }),
            ]),
        );
    },
};

var GeneralSection = [
    {
        label: 'Surveyor Name',
        value: Survey.current.surveyor,
        placeholder: 'Joe Dirt',
    },
    {
        label: 'Phone',
        value: Survey.current.phone,
        placeholder: '+15558765309',
    },
    {
        label: 'Email',
        value: Survey.current.email,
        placeholder: 'joe@yahoo.com',
    },
    {
        label: 'Date',
        value: Survey.current.date,
        placeholder: 'yyyymmdd',
    },
];

var AdditionalInfoSection = [
    {
        label: 'Beach',
        value: Survey.current.beach,
        placeholder: 'beach',
    },
    {
        label: 'Transect ID',
        value: Survey.current.transect,
        placeholder: 'transect number',
    },
    {
        label: 'Start Coords',
        value: Survey.current.startlat,
        placeholder: 'start',
    },
    {
        label: 'End Coords',
        value: Survey.current.endlat,
        placeholder: 'end',
    },
    {
        label: 'Width of Beach',
        value: Survey.current.beachwidth,
        placeholder: 'width in meters',
    },
    {
        label: 'Start Time',
        value: Survey.current.starttime,
        placeholder: '10:00am',
    },
    {
        label: 'End Time',
        value: Survey.current.endtime,
        placeholder: '12:00am',
    },
    {
        label: 'Time of Low Tide',
        value: Survey.current.lowtide,
        placeholder: '12:00am',
    },
    {
        label: 'Season',
        value: Survey.current.season,
        placeholder: 'summer',
    },
    {
        label: 'Date of Previous Survey',
        value: Survey.current.previous,
        placeholder: 'yyyymmdd',
    },
    {
        label: 'Storm Activity',
        value: Survey.current.storm,
        placeholder: 'calm',
    },
    {
        label: 'Current Weather',
        value: Survey.current.weather,
        placeholder: 'clean',
    },
    {
        label: 'Number of Surveyors',
        value: Survey.current.npeople,
        placeholder: '1',
    },
    {
        label: 'Large Items',
        value: Survey.current.largeitems,
        placeholder: 'count of large items',
    },
    {
        label: 'Debris Behind Back Barrier',
        value: Survey.current.debris,
        placeholder: 'count of items',
    },
    {
        label: 'Debris Survey Datasheet > v2.0',
        value: Survey.current.v2,
        placeholder: 'yes',
    },
    {
        label: 'Notes',
        value: Survey.current.notes,
        placeholder: 'notes',
    },
];

var SurveyForm = {
    oninit: function(vnode) {
        console.log('surveyForm: oninit - vnode.attrs.id ' + vnode.attrs.id);
        Survey.load(vnode.attrs.id);
    },
    view: function() {
        console.log(
            'surveyForm.view: ' +
                Survey.current._id +
                ', ' +
                Survey.current.name +
                ', ' +
                Survey.current.country,
        );
        return m(
            'form',
            {
                onsubmit: function(e) {
                    e.preventDefault();
                    Survey.save();
                    m.route.set('/surveys/' + Survey.current._id);
                },
            },
            [
                m('.w3-card w3-row-padding w3-padding', [
                    m('.w3-container w3-black', [
                        m(
                            'header.w3-container w3-black',
                            m('h4', headerTitle(Survey.current)),
                            m(
                                'button.w3-button w3-black w3-padding-large w3-large w3-right[type=submit]',
                                'Save',
                            ),
                        ),
                    ]),
                    m('.w3-container', [
                        m(w3Section, {
                            title: 'General',
                            content: GeneralSection,
                        }),
                        m(w3Section, {
                            title: 'Additional Info',
                            content: AdditionalInfoSection,
                        }),
                        m('.w3-half w3-padding', [
                            m(
                                'header.w3-container w3-dark-grey',
                                m('h5', 'Debris Data'),
                            ),
                            m('.w3-container', [
                                m('.w3-container w3-grey', m('h6', 'Plastic')),
                                m('.w3-cell-row', [
                                    m('.w3-container w3-cell', [
                                        m('p', 'Hard plastic fragments'),
                                        m('p', 'Foamed plastic'),
                                        m('p', 'Film plastic'),
                                        m('p', 'Beverage bottles'),
                                        m('p', 'Other jugs or containers'),
                                        m('p', 'Bottle or container caps'),
                                        m('p', 'Cigar tips'),
                                        m('p', 'Cigarettes'),
                                        m('p', 'Disposable cigarette lighters'),
                                        m('p', '6-pack rings'),
                                        m('p', 'Bags'),
                                        m('p', 'Plastic rope small net pieces'),
                                        m('p', 'Buoys & floats'),
                                        m('p', 'Fishing lures or line'),
                                        m(
                                            'p',
                                            'Cups (including polystyrene foamed plastic',
                                        ),
                                        m('p', 'Plastic utensils'),
                                        m('p', 'Straws'),
                                        m('p', 'Ballons - Mylar'),
                                        m('p', 'Personal care products'),
                                        m('p', 'Other'),
                                    ]),
                                    m('.w3-container w3-cell', [
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.hardplastic = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.hardplastic,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.foamedplastic = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current
                                                        .foamedplastic,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.filmplastic = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.filmplastic,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.foodwrapers = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.foodwrappers,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.beverage = value;
                                                    },
                                                ),
                                                value: Survey.current.beverage,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.jugs = value;
                                                    },
                                                ),
                                                value: Survey.current.jugs,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.caps = value;
                                                    },
                                                ),
                                                value: Survey.current.caps,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.cigars = value;
                                                    },
                                                ),
                                                value: Survey.current.cigars,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.cigarettes = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.cigarettes,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.lighters = value;
                                                    },
                                                ),
                                                value: Survey.current.lighters,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.sixpacks = value;
                                                    },
                                                ),
                                                value: Survey.current.sixpacks,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.bags = value;
                                                    },
                                                ),
                                                value: Survey.current.bags,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.rope = value;
                                                    },
                                                ),
                                                value: Survey.current.rope,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.bouys = value;
                                                    },
                                                ),
                                                value: Survey.current.bouys,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.lures = value;
                                                    },
                                                ),
                                                value: Survey.current.lures,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.cups = value;
                                                    },
                                                ),
                                                value: Survey.current.cups,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.utensils = value;
                                                    },
                                                ),
                                                value: Survey.current.utensils,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.straws = value;
                                                    },
                                                ),
                                                value: Survey.current.straws,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.balloons = value;
                                                    },
                                                ),
                                                value: Survey.current.balloons,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.personalcare = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.personalcare,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.plasticother = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.plasticother,
                                            },
                                        ),
                                    ]),
                                ]),
                            ]),
                            m('.w3-container', [
                                m('.w3-container w3-grey', m('h6', 'Metal')),
                                m('.w3-cell-row', [
                                    m('.w3-container w3-cell', [
                                        m('p', 'Aluminum or tin cans'),
                                        m('p', 'Aerosol cans'),
                                        m('p', 'Metal fragments'),
                                        m('p', 'Other'),
                                    ]),
                                    m('.w3-container w3-cell', [
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.metalcans = value;
                                                    },
                                                ),
                                                value: Survey.current.metalcans,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.aerosolcans = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.aerosolcans,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.metalfragments = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current
                                                        .metalfragments,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.metalother = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.metalother,
                                            },
                                        ),
                                    ]),
                                ]),
                            ]),
                            m('.w3-container', [
                                m('.w3-container w3-grey', m('h6', 'Glass')),
                                m('.w3-cell-row', [
                                    m('.w3-container w3-cell', [
                                        m('p', 'Beverage bottles'),
                                        m('p', 'Jars'),
                                        m('p', 'Glass fragments'),
                                        m('p', 'Other'),
                                    ]),
                                    m('.w3-container w3-cell', [
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.glassbottles = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.glassbottles,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.glassjars = value;
                                                    },
                                                ),
                                                value: Survey.current.glassjars,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.glassfragments = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current
                                                        .glassfragments,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.glassother = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.glassother,
                                            },
                                        ),
                                    ]),
                                ]),
                            ]),
                            m('.w3-container', [
                                m('.w3-container w3-grey', m('h6', 'Rubber')),
                                m('.w3-cell-row', [
                                    m('.w3-container w3-cell', [
                                        m('p', 'Flip flops'),
                                        m('p', 'Gloves'),
                                        m('p', 'Tires'),
                                        m('p', 'Balloons latex'),
                                        m('p', 'Rubber fragments'),
                                        m('p', 'Other'),
                                    ]),
                                    m('.w3-container w3-cell', [
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.flipflops = value;
                                                    },
                                                ),
                                                value: Survey.current.flipflops,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.rubbergloves = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.rubbergloves,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.tires = value;
                                                    },
                                                ),
                                                value: Survey.current.tires,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.rubberballoons = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current
                                                        .rubberballoons,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.rubberfragments = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current
                                                        .rubberfragments,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.rubberother = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.rubberother,
                                            },
                                        ),
                                    ]),
                                ]),
                            ]),
                            m('.w3-container', [
                                m(
                                    '.w3-container w3-grey',
                                    m('h6', 'Processed Lumber'),
                                ),
                                m('.w3-cell-row', [
                                    m('.w3-container w3-cell', [
                                        m('p', 'Cardboard cartons'),
                                        m('p', 'Paper and cardboard'),
                                        m('p', 'Paper bags'),
                                        m('p', 'Lumber or building material'),
                                        m('p', 'Other'),
                                    ]),
                                    m('.w3-container w3-cell', [
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.cartons = value;
                                                    },
                                                ),
                                                value: Survey.current.cartons,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.paper = value;
                                                    },
                                                ),
                                                value: Survey.current.paper,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.paperbag = value;
                                                    },
                                                ),
                                                value: Survey.current.paperbag,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.lumber = value;
                                                    },
                                                ),
                                                value: Survey.current.lumber,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.lumberother = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.lumberother,
                                            },
                                        ),
                                    ]),
                                ]),
                            ]),
                            m('.w3-container', [
                                m(
                                    '.w3-container w3-grey',
                                    m('h6', 'Cloth or Fabric'),
                                ),
                                m('.w3-cell-row', [
                                    m('.w3-container w3-cell', [
                                        m('p', 'Clothing or shoes'),
                                        m('p', 'Gloves'),
                                        m('p', 'Towels or rags'),
                                        m(
                                            'p',
                                            'Rope or net pieces (non-nylon)',
                                        ),
                                        m('p', 'Fabric pieces'),
                                        m('p', 'Other'),
                                    ]),
                                    m('.w3-container w3-cell', [
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.clothing = value;
                                                    },
                                                ),
                                                value: Survey.current.clothing,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.clothgloves = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.clothgloves,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.towels = value;
                                                    },
                                                ),
                                                value: Survey.current.towels,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.clothrope = value;
                                                    },
                                                ),
                                                value: Survey.current.clothrope,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.clothpieces = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.clothpieces,
                                            },
                                        ),
                                        m(
                                            'input.w3-input[type=text][placeholder=0]',
                                            {
                                                oninput: m.withAttr(
                                                    'value',
                                                    function(value) {
                                                        Survey.current.clothother = value;
                                                    },
                                                ),
                                                value:
                                                    Survey.current.clothother,
                                            },
                                        ),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]),
                ]),
            ],
        );
    },
};

export default SurveyForm;
