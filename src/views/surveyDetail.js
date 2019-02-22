import Survey from '../models/survey';

function drawSurveyTable(survey, rows) {
    return m('table.w3-table', [
        rows.map(function(r) {
            return m('tr', [m('td', r[0]), m('td', survey[r[1]])]);
        }),
    ]);
}

var SurveyDetail = {
    oninit: function(vnode) {
        console.log('surveyDetail: oninit - vnode.attrs.id ' + vnode.attrs.id);
        Survey.load(vnode.attrs.id);
    },
    view: function() {
        console.log(
            'surveyDetail.view: ' +
                Survey.current._id +
                ', ' +
                Survey.current.date,
        );
        return m('.w3-card w3-row-padding w3-padding', [
            m('.w3-container w3-black', [
                m(
                    'header.w3-container w3-black',
                    m(
                        'h4',
                        (Survey.current.mdmapid
                            ? 'MDMAP ID #' + Survey.current.mdmapid + ' - '
                            : '') + Survey.current.name,
                    ),
                    m(
                        'button.w3-button w3-black w3-padding-large w3-large w3-right',
                        {
                            href: '/survey/edit/' + Survey.current._id,
                            oncreate: m.route.link,
                        },
                        'Edit',
                    ),
                ),
            ]),
            m('.w3-container', [
                m('.w3-half w3-padding', [
                    m(
                        'header.w3-container w3-dark-grey',
                        m('h5', 'General Info'),
                    ),
                    drawSurveyTable(Survey.current, [
                        ['Surveyor Name', 'surveyor'],
                        ['Phone', 'phone'],
                        ['Email', 'email'],
                        ['Date', 'date'],
                    ]),
                ]),
                m('.w3-half w3-padding', [
                    m(
                        'header.w3-container w3-dark-grey',
                        m('h5', 'Additional Information'),
                    ),
                    drawSurveyTable(Survey.current, [
                        ['Transect ID', 'transect'],
                        ['Start Coords', 'startlat'],
                        ['End Coords', 'endlat'],
                        ['Width of Beach (m)', 'beachwidth'],
                        ['Start Time', 'starttime'],
                        ['End Time', 'endtime'],
                        ['Time of Low Tide', 'lowtide'],
                        ['Season', 'season'],
                        ['Date of Previous Survey', 'previous'],
                        ['Storm Activity', 'storm'],
                        ['Current Weather', 'weather'],
                        ['Number of Surveyors', 'npeople'],
                        ['Large Items', 'largeitems'],
                        ['Debris Behind Back Barrier', 'debris'],
                        ['Debris Survey Datasheet > v2.0', 'v2'],
                        ['Notes', 'notes'],
                    ]),
                ]),
                m('.w3-half w3-padding', [
                    m('header.w3-container w3-dark-grey', m('h5', 'Plastic')),
                    drawSurveyTable(Survey.current, [
                        ['Hard plastic fragments', 'hardplastic'],
                        ['Foamed plastic', 'foamedplastic'],
                        ['Film plastic', 'filmplastic'],
                        ['Food wrappers', 'foodwrappers'],
                        ['Beverage bottles', 'beverage'],
                        ['Other jugs or containers', 'jugs'],
                        ['Bottle or container caps', 'caps'],
                        ['Cigar tips', 'cigars'],
                        ['Cigarettes', 'cigarettes'],
                        ['Disposable cigarette lighters', 'lighters'],
                        ['6-pack rings', 'sixpacks'],
                        ['Bags', 'bags'],
                        ['Plastic rope small net pieces', 'rope'],
                        ['Buoys & floats', 'bouys'],
                        ['Fishing lures or line', 'lures'],
                        ['Cups (including polystyrene foamed plastic', 'cups'],
                        ['Plastic utensils', 'utensils'],
                        ['Straws', 'straws'],
                        ['Ballons - Mylar', 'baloons'],
                        ['Personal care products', 'personalcare'],
                        ['Other', 'plasticother'],
                    ]),
                ]),
                m('.w3-half w3-padding', [
                    m('header.w3-container w3-dark-grey', m('h5', 'Metal')),
                    drawSurveyTable(Survey.current, [
                        ['Aluminum or tin cans', 'metalcans'],
                        ['Aerosol cans', 'metalaerosol'],
                        ['Metal fragments', 'metalfragments'],
                        ['Other', 'metalother'],
                    ]),
                ]),
                m('.w3-half w3-padding', [
                    m('header.w3-container w3-dark-grey', m('h5', 'Glass')),
                    drawSurveyTable(Survey.current, [
                        ['Beverage bottles', 'glassbottles'],
                        ['Jars', 'glassjars'],
                        ['Glass fragments', 'glassfragments'],
                        ['Other', 'glassother'],
                    ]),
                ]),
                m('.w3-half w3-padding', [
                    m('header.w3-container w3-dark-grey', m('h5', 'Rubber')),
                    drawSurveyTable(Survey.current, [
                        ['Flip flops', 'flipflops'],
                        ['Rubber gloves', 'rubbergloves'],
                        ['Tires', 'tires'],
                        ['Balloons - Latex', 'rubberballoons'],
                        ['Rubber fragments', 'rubberfragments'],
                        ['Other', 'rubberother'],
                    ]),
                ]),
                m('.w3-half w3-padding', [
                    m(
                        'header.w3-container w3-dark-grey',
                        m('h5', 'Processed Lumber'),
                    ),
                    drawSurveyTable(Survey.current, [
                        ['Cardboard cartons', 'cartons'],
                        ['Paper and cardboard', 'paper'],
                        ['Paper bags', 'paperbags'],
                        ['Lumber/building material', 'lumber'],
                        ['Other', 'lumberother'],
                    ]),
                ]),
                m('.w3-half w3-padding', [
                    m(
                        'header.w3-container w3-dark-grey',
                        m('h5', 'Cloth or Fabric'),
                    ),
                    drawSurveyTable(Survey.current, [
                        ['Clothing and shoes', 'clothing'],
                        ['Gloves (non-rubber)', 'clothgloves'],
                        ['Towels or rags', 'towels'],
                        ['Rope or net pieces', 'clothrope'],
                        ['Fabric pieces', 'clothpieces'],
                        ['Other', 'clothother'],
                    ]),
                ]),
            ]),
        ]);
    },
};

export default SurveyDetail;
