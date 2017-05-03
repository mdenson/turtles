var m = require("mithril")
var Beach = require("../models/beach")

module.exports = {
	oninit: function(vnode) { 
		console.log("beachDetail: oninit - vnode.attrs.id " + vnode.attrs.id)
		Beach.load(vnode.attrs.id) },
	view: function() {
		console.log("beachDetail.view: " + Beach.current._id + ", " + Beach.current.name + ", " + Beach.current.country)
		return m(".w3-card w3-row-padding w3-padding", [
			m(".w3-container w3-black", [
				m("header.w3-container w3-black", 
					m("h4", ((Beach.current.mdmapid) ? "MDMAP ID #" + Beach.current.mdmapid + " - " : "") + Beach.current.name),
					m("button.w3-button w3-black w3-padding-large w3-large w3-right", { href: "/beaches/edit/" + Beach.current._id, oncreate: m.route.link }, "Edit")
				),
			]),
			m(".w3-container", [
				m(".w3-half w3-padding", [
					m("header.w3-container w3-dark-grey",
						m("h5", "General Info")
					),
					m("table.w3-table", [
						m("tr", [
							m("td", "Organization"),
							m("td", Beach.current.organization)
						]),
						m("tr", [
							m("td", "Surveyor Name"),
							m("td", Beach.current.surveyor)
						]),
						m("tr", [
							m("td", "Phone"),
							m("td", Beach.current.phone)
						]),
						m("tr", [
							m("td", "Date"),
							m("td", Beach.current.date)
						])
					])
				]),
				m(".w3-half w3-padding", [
					m("header.w3-container w3-dark-grey",
						m("h5", "Shoreline Characteristics")
					),
					m("table.w3-table", [
						m("tr", [
							m("td", "Length of Sample Area (m)"),
							m("td", Beach.current.length)
						]),
						m("tr", [
							m("td", "Substratum Type"),
							m("td", Beach.current.substratum)
						]),
						m("tr", [
							m("td", "Substratum Uniformity"),
							m("td", Beach.current.coverage)
						]),
						m("tr", [
							m("td", "Tidal Range (f)"),
							m("td", Beach.current.vtidalrange)
						]),
						m("tr", [
							m("td", "Tidal Distance (m)"),
							m("td", Beach.current.htidalrange)
						]),
						m("tr", [
							m("td", "Back of Shoreline"),
							m("td", Beach.current.shorelineback),
						]),
						m("tr", [
							m("td", "Aspect"),
							m("td", Beach.current.aspect)
						]),
						m("tr", [
							m("td", "Slope"),
							m("td", Beach.current.slope)
						])
					])
				]),
				m(".w3-half w3-padding", [
					m("header.w3-container w3-dark-grey",
						m("h5", "Sampling Area")
					),
					m(".w3-table", [
						m("tr", [
							m("td", "MDMAP ID#"),
							m("td", Beach.current.mdmapid)
						]),
						m("tr", [
							m("td", "Shoreline Name"),
							m("td", Beach.current.name)
						]),
						m("tr", [
							m("td", "Country"),
							m("td", Beach.current.country)
						]),
						m("tr", [
							m("td", "State"),
							m("td", Beach.current.state)
						]),
						m("tr", [
							m("td", "County"),
							m("td", Beach.current.county)
						]),
						m("tr", [
							m("td", "Start Coords (Lat, Long)"),
							m("td", Beach.current.startlat)
						]),
						m("tr", [
							m("td", "End Coords (Lat, Long)"),
							m("td", Beach.current.endlat)
						])
					])
				]),
				m(".w3-half w3-padding", [
					m("header.w3-container w3-dark-grey",
						m("h5", "Land-Use Characteristics")
					),
					m(".w3-table", [
						m("tr", [
							m("td", "Location"),
							m("td", Beach.current.location)
						]),
						m("tr", [
							m("td", "Major Usage"),
							m("td", Beach.current.usage)
						]),
						m("tr", [
							m("td", "Access"),
							m("td", Beach.current.access)
						]),
						m("tr", [
							m("td", "Nearest Town"),
							m("td", Beach.current.town)
						]),
						m("tr", [
							m("td", "Nearest Town Distance"),
							m("td", Beach.current.towndis)
						]),
						m("tr", [
							m("td", "Nearest Town Direction"),
							m("td", Beach.current.towndir)
						]),
						m("tr", [
							m("td", "Nearest River"),
							m("td", Beach.current.river)
						]),
						m("tr", [
							m("td", "Nearest River Distance"),
							m("td", Beach.current.riverdis)
						]),
						m("tr", [
							m("td", "Nearest River Direction"),
							m("td", Beach.current.riverdir)
						]),
						m("tr", [
							m("td", "River/Creek Input"),
							m("td", Beach.current.riverinput)
						]),
						m("tr", [
							m("td", "Pipe or Drain Input"),
							m("td", Beach.current.draininput)
						])
					])
				])
			])
		])
	}
}
