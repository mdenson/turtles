import Survey from '../models/survey';
import SurveyFormData from './surveyFormData';

function headerTitle(survey) {
    let title = survey.date ? survey.date : 'New Survey';
    title += survey.beach ? ' - ' + survey.beach : '';
    return title;
}

var w3InputRow = {
    oninit: (vnode) => {
        if (!vnode.attrs.value && vnode.attrs.defaultValue) {
            vnode.attrs.value = vnode.attrs.defaultValue;
        }
    },
    view: (vnode) => {
        let placeholder = vnode.attrs.placeholder
            ? '[placeholder=' + vnode.attrs.placeholder + ']'
            : '';
        return m('div.w3-cell-row', [
            m('p.w3-cell.w3-third', vnode.attrs.label),
            m('input.w3-input.w3-cell.w3-twothird[type=text]' + placeholder, {
                oninput: m.withAttr('value', function(v) {
                    vnode.attrs.value = v;
                }),
                value: vnode.attrs.value,
            }),
        ]);
    },
};

var w3InputCounterRow = {
    oninit: (vnode) => {
        if (!vnode.attrs.value && vnode.attrs.defaultValue) {
            vnode.attrs.value = vnode.attrs.defaultValue;
        }
    },
    view: (vnode) => {
        let placeholder = vnode.attrs.placeholder
            ? '[placeholder=' + vnode.attrs.placeholder + ']'
            : '';
        return m(
            'div.w3-cell-row',
            {
                onclick: function(e) {
                    /* TODO: FRAGILE!!! id's would make more sense */
                    if (e.target.id === 'plus') {
                        this.childNodes[1].getElementsByTagName('input')[0]
                            .value++;
                    } else if (e.target.id === 'minus') {
                        this.childNodes[1].getElementsByTagName('input')[0]
                            .value--;
                    }
                },
            },
            [
                m('p.w3-cell.w3-third', vnode.attrs.label),
                m(
                    'input.w3-cell.w3-rest.w3-input[type=text]' +
                        vnode.attrs.placeholder,
                    {
                        oninput: m.withAttr('value', function(v) {
                            vnode.attrs.value = v;
                        }),
                        value: vnode.attrs.value,
                    },
                ),
                m(
                    'button.w3-button.w3-blue.w3-right.w3-cell.w3-col#plus[type=button]' /* default type is submit, which submitted the form each time */,
                    '+',
                ),
                m(
                    'button.w3-button.w3-red.w3-right.w3-cell.w3-col#minus[type=button]',
                    '-',
                ),
            ],
        );
    },
};

var w3Section = {
    view: (vnode) => {
        let titlecolor = vnode.attrs.titlecolor
            ? vnode.attrs.titlecolor
            : 'w3-dark-grey';
        return m(
            'div.w3-container',
            m('div.w3-content', [
                m('div.w3-container ' + titlecolor, m('h5', vnode.attrs.title)),
                vnode.attrs.content.map((item) => {
                    if (vnode.attrs.type === 'inputCount') {
                        return m(w3InputCounterRow, {
                            label: item.label,
                            value: item.value,
                            defaultValue: item.defaultValue,
                        });
                    } else {
                        return m(w3InputRow, {
                            label: item.label,
                            value: item.value,
                            placeholder: item.placeholder,
                            defaultValue: item.defaultValue,
                        });
                    }
                }),
            ]),
        );
    },
};

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
                    alert('oh no!' + e.target.class);
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
                            content: SurveyFormData.general,
                        }),
                        m(w3Section, {
                            title: 'Additional Info',
                            content: SurveyFormData.additionalInfo,
                        }),
                        m(w3Section, {
                            title: 'Debris Data',
                            content: [],
                        }),
                        m('.w3-container', [
                            m(w3Section, {
                                type: 'inputCount',
                                title: 'Plastic',
                                titlecolor: 'w3-grey',
                                content: SurveyFormData.debrisPlastic,
                            }),
                            m(w3Section, {
                                title: 'Metal',
                                titlecolor: 'w3-grey',
                                content: SurveyFormData.debrisMetal,
                            }),
                            m(w3Section, {
                                title: 'Glass',
                                titlecolor: 'w3-grey',
                                content: SurveyFormData.debrisGlass,
                            }),
                            m(w3Section, {
                                title: 'Rubber',
                                titlecolor: 'w3-grey',
                                content: SurveyFormData.debrisRubber,
                            }),
                            m(w3Section, {
                                title: 'Processed Lumber',
                                titlecolor: 'w3-grey',
                                content: SurveyFormData.debrisLumber,
                            }),
                            m(w3Section, {
                                title: 'Cloth or Fabric',
                                titlecolor: 'w3-grey',
                                content: SurveyFormData.debrisCloth,
                            }),
                        ]),
                    ]),
                ]),
            ],
        );
    },
};

export default SurveyForm;
