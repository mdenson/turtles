import NewBeachList from './views/newbeachList';
import BeachForm from './views/beachForm';
import BeachDetail from './views/beachDetail';
import SurveyList from './views/surveyList';
import SurveyForm from './views/surveyForm';
import SurveyDetail from './views/surveyDetail';
import Layout from './views/layout';

if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

m.route(document.body, '/', {
    '/': {
        render: function(vnode) {
            console.log('vnode attrs: ' + vnode.attrs.id);
            return m(Layout, null);
        },
    },
    '/beaches': {
        render: function() {
            return m(Layout, m(NewBeachList));
        },
    },
    '/beaches/:id': {
        render: function(vnode) {
            return m(Layout, [
                //m(BeachList, vnode.attrs),
                m(BeachDetail, vnode.attrs),
                m(SurveyList, m(SurveyList)),
            ]);
        },
    },
    '/beaches/edit/:id': {
        render: function(vnode) {
            return m(Layout, m(BeachForm, vnode.attrs));
        },
    },
    '/surveys': {
        render: function() {
            return m(Layout, m(SurveyList));
        },
    },
    '/surveys/:id': {
        render: function(vnode) {
            return m(Layout, [m(SurveyDetail, vnode.attrs)]);
        },
    },
    '/surveys/edit/:id': {
        render: function(vnode) {
            return m(Layout, m(SurveyForm, vnode.attrs));
        },
    },
});
