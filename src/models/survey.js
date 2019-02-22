import PouchDB from 'pouchdb';
var db = new PouchDB('turtles');
var remoteCouch = false;

//PouchDB.debug.enable('*')

var Survey = {
    list: [],

    loadlist: function() {
        return db
            .allDocs({
                include_docs: true,
                startkey: 'survey_',
                endkey: 'survey_\uffff',
            })
            .then(function(result) {
                Survey.list = result.rows;
                console.log('survey.loadlist: returned ' + result.rows.length);
                m.redraw();
            })
            .catch(function(err) {
                console.log(err);
            });
    },

    current: {},

    load: function(id) {
        console.log('survey.load: id ' + id);
        if (id == 'new') {
            return (Survey.current = {});
        } else {
            return db
                .get(id)
                .then(function(doc) {
                    Survey.current = doc;
                    console.log(
                        'survey.load: returned :id ' +
                            doc._id +
                            ' rev: ' +
                            doc._rev,
                    );
                    m.redraw();
                })
                .catch(function(err) {
                    console.log(err);
                });
        }
    },

    // note: we must have the rev if we want to update an existing doc.  will this work with new?
    save: function() {
        if (!Survey.current._id) {
            // new entry
            // TODO: need to ensure beach is present and valid
            Survey.current._id =
                'survey_' +
                Survey.current.beach.trim().toLowerCase() +
                '_' +
                Survey.current.date.trim();
        }

        console.log(
            'survey.save: _id ' +
                Survey.current._id +
                ' rev ' +
                Survey.current._rev,
        );

        return db
            .put(Survey.current)
            .then(function(response) {
                console.log(
                    'survey.save: ok ' + response.ok + ' rev: ' + response.rev,
                );
            })
            .catch(function(err) {
                console.log(err);
            });
    },
};

export default Survey;
