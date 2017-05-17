var m = require("mithril")

var BeachList = require("./views/newbeachList")
var BeachForm = require("./views/beachForm")
var BeachDetail = require("./views/beachDetail")
var SurveyList = require("./views/surveyList")
var SurveyForm = require("./views/surveyForm")
var SurveyDetail = require("./views/surveyDetail")
var Layout = require("./views/layout")

m.route(document.body, "/", {
	"/": {
		render: function(vnode) {
			console.log("vnode attrs: " + vnode.attrs.id)
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
				m(BeachDetail, vnode.attrs),
				m(SurveyList, m(SurveyList))
			])
		}
	},
	"/beaches/edit/:id": {
		render: function(vnode) {
			return m(Layout, m(BeachForm, vnode.attrs))
		}
	},
	"/surveys": {
		render: function() {
			return m(Layout, m(SurveyList))
		}
	},
	"/surveys/:id": {
		render: function(vnode) {
			return m(Layout, [
				m(SurveyDetail, vnode.attrs)
			])
		}
	},
	"/surveys/edit/:id": {
		render: function(vnode) {
			return m(Layout, m(SurveyForm, vnode.attrs))
		}
	}
})