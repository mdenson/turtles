var m = require('mithril')
var PouchDB = require('pouchdb')
var db = new PouchDB('turtles')
var remoteCouch = false;

PouchDB.debug.enable('*')

var Beach = {
	list: [],

	loadlist: function() {
		return db.allDocs({
			include_docs: true,
			//descending: true,
			startkey: 'beach_',
			endkey: 'beach_\uffff'
		}).then(function(result) {
			Beach.list = result.rows
			console.log("beach.loadlist: returned " + result.rows.length)
			m.redraw()
		}).catch(function(err) {
			console.log(err)
		})

	},

	current: {},

	load: function(id) {
		console.log("load: id " + id)
		if (id == "new") {
			return Beach.current = {}
		} else {
			return db.get(id).then(function(doc) {
				Beach.current = doc
				console.log("beach.load: returned :id " + doc._id + " rev: " + doc._rev)
				m.redraw()
			}).catch(function(err) {
				console.log(err)
			})
		}
	},

	// note: we must have the rev if we want to update an existing doc.  will this work with new?
	save: function() {
		if (!Beach.current._id) {
			// new entry
			Beach.current._id = "beach_" + Beach.current.name.trim().toLowerCase()
		}

		console.log("beach.save: _id " + Beach.current._id + " name " + Beach.current._rev)

		return db.put(Beach.current).then(function(response) {
			console.log("beach.save: ok " + response.ok + " rev: " + response.rev)
		}).catch(function(err) {
			console.log(err)
		})
	}
}

module.exports = Beach