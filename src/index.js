var m = require("mithril")

var BeachList = require("./views/beachList")
var BeachForm = require("./views/beachForm")
var BeachDetail = require("./views/beachDetail")
var Layout = require("./views/layout")

m.route(document.body, "/", {
	"/": {
		render: function() {
			return m(Layout, null)
		}
	},
	"/beaches": {
		render: function() {
			return m(Layout, m(BeachList))
		}
	},
	"/beaches/:id": {
		render: function(vnode) {
			return m(Layout, [
				//m(BeachList, vnode.attrs),
				m(BeachDetail, vnode.attrs)
			])
		}
	},
	"/beaches/edit/:id": {
		render: function(vnode) {
			return m(Layout, m(BeachForm, vnode.attrs))
		}
	}
})