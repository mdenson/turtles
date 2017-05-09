var m = require("mithril")
var Beach = require("../models/beach")

module.exports = {
	oninit: Beach.loadlist,
	view: function() {
		console.log("beachList.view: Beach.list length " + Beach.list.length)
		return m(".w3-container w3-padding-24", [
			m(".w3-container w3-black", [
				m("span.w3-xlarge w3-padding", "Sites"),
				m("button.w3-button w3-padding w3-right", { href: "/beaches/edit/new", oncreate: m.route.link }, "New")
			]),
			// each beach - note '.id' is part of the result set, where '.doc.' is only there if the doc is included
			m(".w3-container w3-padding", [
				m("ul.w3-ul", [ Beach.list.map(function(beach) {
					console.log("beachList.view: Beach " + beach.doc._id + " name " + beach.doc.name)
					return m("li", [
						m("a.w3-button w3-right", { href: "/beaches/" + beach.doc._id, oncreate: m.route.link }, "View"),
						m("a.w3-button w3-right", { href: "/beaches/edit/" + beach.doc._id, oncreate: m.route.link }, "Edit"),
						m("span.w3-large", beach.doc.name),m("br"),
						m("span", beach.doc.state + ", " + beach.doc.country),
					])
				})]),
			]),
			m(".w3-container w3-black w3-center", Beach.list.length + ((Beach.list.length == 1) ? " site" : " sites"))
		])
	}
}