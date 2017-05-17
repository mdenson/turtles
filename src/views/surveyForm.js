var m = require("mithril")
var Survey = require("../models/survey")

module.exports = {
	oninit: function(vnode) { 
		console.log("surveyForm: oninit - vnode.attrs.id " + vnode.attrs.id)
		Survey.load(vnode.attrs.id) },
	view: function() {
		console.log("surveyForm.view: " + Survey.current._id + ", " + Survey.current.name + ", " + Survey.current.country)
		return m("form", {
			onsubmit: function(e) {
				e.preventDefault()
				Survey.save()
				m.route.set("/surveys/" + Survey.current._id)
				}
			}, [
				m(".w3-card w3-row-padding w3-padding", [
				m(".w3-container w3-black", [
					m("header.w3-container w3-black", 
						m("h4", "2017-03-12 Survey - MDMAP ID #120 Zero - Standing-Stock"),
						m("button.w3-button w3-black w3-padding-large w3-large w3-right[type=submit]", "Save")
					),
				]),
				m(".w3-container", [
					m(".w3-half w3-padding", [
						m("header.w3-container w3-dark-grey",
							m("h5", "General Info")
						),
						m(".w3-cell-row", [
							m(".w3-container w3-cell", [
								m("p", "Surveyor Name"),
								m("p", "Phone"),
								m("p", "Email"),
								m("p", "Date")
							]),
							m(".w3-container w3-cell", [
								m("input.w3-input[type=text][placeholder=Surveyor]", {oninput: m.withAttr("value", function(value) { Survey.current.surveyor = value }), value: Survey.current.surveyor}),
								m("input.w3-input[type=text][placeholder=Phone]", {oninput: m.withAttr("value", function(value) { Survey.current.phone = value }), value: Survey.current.phone}),
								m("input.w3-input[type=text][placeholder=Email]", {oninput: m.withAttr("value", function(value) { Survey.current.email = value }), value: Survey.current.email}),
								m("input.w3-input[type=text][placeholder=YYYYMMDD]", {oninput: m.withAttr("value", function(value) { Survey.current.date = value }), value: Survey.current.date})
							])
						]),
					]),
					m(".w3-half w3-padding", [
						m("header.w3-container w3-dark-grey",
							m("h5", "Additional Information")
						),
						m(".w3-cell-row", [
							m(".w3-container w3-cell", [
								m("p", "Transect ID"),
								m("p", "Start Coords"),
								m("p", "End Coords"),
								m("p", "Width of Beach (m)"),
								m("p", "Start Time"),
								m("p", "End Time"),
								m("p", "Time of Low Tide"),
								m("p", "Season"),
								m("p", "Date of Previous Survey"),
								m("p", "Storm Activity"),
								m("p", "Current Weather"),
								m("p", "Number of Surveyors"),
								m("p", "Large Items"),
								m("p", "Debris Behind Back Barrier"),
								m("p", "Debris Survey Datasheet > v2.0"),
								m("p", "Notes")
							]),
							m(".w3-container w3-cell", [
								m("input.w3-input[type=text][placeholder=Transect]", {oninput: m.withAttr("value", function(value) { Survey.current.transect = value }), value: Survey.current.transect}),
								m("input.w3-input[type=text][placeholder=start]", {oninput: m.withAttr("value", function(value) { Survey.current.startlat = value }), value: Survey.current.startlat}),
								m("input.w3-input[type=text][placeholder=end]", {oninput: m.withAttr("value", function(value) { Survey.current.endlat = value }), value: Survey.current.endlat}),
								m("input.w3-input[type=text][placeholder=in meters]", {oninput: m.withAttr("value", function(value) { Survey.current.beachwidth = value }), value: Survey.current.beachwidth}),
								m("input.w3-input[type=text][placeholder=start time]", {oninput: m.withAttr("value", function(value) { Survey.current.starttime = value }), value: Survey.current.starttime}),
								m("input.w3-input[type=text][placeholder=end time]", {oninput: m.withAttr("value", function(value) { Survey.current.endtime = value }), value: Survey.current.endtime}),
								m("input.w3-input[type=text][placeholder=low tide time]", {oninput: m.withAttr("value", function(value) { Survey.current.lowtide = value }), value: Survey.current.lowtide}),
								m("input.w3-input[type=text][placeholder=season]", {oninput: m.withAttr("value", function(value) { Survey.current.season = value }), value: Survey.current.season}),
								m("input.w3-input[type=text][placeholder=date]", {oninput: m.withAttr("value", function(value) { Survey.current.previous = value }), value: Survey.current.previous}),
								m("input.w3-input[type=text][placeholder=storm activity]", {oninput: m.withAttr("value", function(value) { Survey.current.storm = value }), value: Survey.current.storm}),
								m("input.w3-input[type=text][placeholder=current weather]", {oninput: m.withAttr("value", function(value) { Survey.current.weather = value }), value: Survey.current.weather}),
								m("input.w3-input[type=text][placeholder=number of people]", {oninput: m.withAttr("value", function(value) { Survey.current.npeople = value }), value: Survey.current.npeople}),
								m("input.w3-input[type=text][placeholder=y/n]", {oninput: m.withAttr("value", function(value) { Survey.current.largeitems = value }), value: Survey.current.largeitems}),
								m("input.w3-input[type=text][placeholder=y/n]", {oninput: m.withAttr("value", function(value) { Survey.current.debris = value }), value: Survey.current.debris}),
								m("input.w3-input[type=text][placeholder=y/n]", {oninput: m.withAttr("value", function(value) { Survey.current.v2 = value }), value: Survey.current.v2}),
								m("input.w3-input[type=text][placeholder=notes]", {oninput: m.withAttr("value", function(value) { Survey.current.notes = value }), value: Survey.current.notes}),
							])
						])
					]),
					m(".w3-half w3-padding", [
						m("header.w3-container w3-dark-grey",
							m("h5", "Debris Data")
						),
						m(".w3-container", [
							m(".w3-container w3-grey",
								m("h6", "Plastic")
							),
							m(".w3-cell-row", [
								m(".w3-container w3-cell", [
									m("p", "Hard plastic fragments"),
									m("p", "Foamed plastic"),
									m("p", "Film plastic"),
									m("p", "Beverage bottles"),
									m("p", "Other jugs or containers"),
									m("p", "Bottle or container caps"),
									m("p", "Cigar tips"),
									m("p", "Cigarettes"),
									m("p", "Disposable cigarette lighters"),
									m("p", "6-pack rings"),
									m("p", "Bags"),
									m("p", "Plastic rope small net pieces"),
									m("p", "Buoys & floats"),
									m("p", "Fishing lures or line"),
									m("p", "Cups (including polystyrene foamed plastic"),
									m("p", "Plastic utensils"),
									m("p", "Straws"),
									m("p", "Ballons - Mylar"),
									m("p", "Personal care products"),
									m("p", "Other"),
								]),
								m(".w3-container w3-cell", [
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.hardplastic = value }), value: Survey.current.hardplastic}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.foamedplastic = value }), value: Survey.current.foamedplastic}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.filmplastic = value }), value: Survey.current.filmplastic}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.foodwrapers = value }), value: Survey.current.foodwrappers}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.beverage = value }), value: Survey.current.beverage}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.jugs = value }), value: Survey.current.jugs}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.caps = value }), value: Survey.current.caps}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.cigars = value }), value: Survey.current.cigars}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.cigarettes = value }), value: Survey.current.cigarettes}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.lighters = value }), value: Survey.current.lighters}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.sixpacks = value }), value: Survey.current.sixpacks}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.bags = value }), value: Survey.current.bags}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.rope = value }), value: Survey.current.rope}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.bouys = value }), value: Survey.current.bouys}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.lures = value }), value: Survey.current.lures}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.cups = value }), value: Survey.current.cups}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.utensils = value }), value: Survey.current.utensils}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.straws = value }), value: Survey.current.straws}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.balloons = value }), value: Survey.current.balloons}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.personalcare = value }), value: Survey.current.personalcare}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.plasticother = value }), value: Survey.current.plasticother}),
								])
							])
						]),
						m(".w3-container", [
							m(".w3-container w3-grey",
								m("h6", "Metal")
							),
							m(".w3-cell-row", [
								m(".w3-container w3-cell", [
									m("p", "Aluminum or tin cans"),
									m("p", "Aerosol cans"),
									m("p", "Metal fragments"),
									m("p", "Other"),
								]),
								m(".w3-container w3-cell", [
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.metalcans = value }), value: Survey.current.metalcans}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.aerosolcans = value }), value: Survey.current.aerosolcans}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.metalfragments = value }), value: Survey.current.metalfragments}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.metalother = value }), value: Survey.current.metalother}),
								])
							])
						]),
						m(".w3-container", [
							m(".w3-container w3-grey",
								m("h6", "Glass")
							),
							m(".w3-cell-row", [
								m(".w3-container w3-cell", [
									m("p", "Beverage bottles"),
									m("p", "Jars"),
									m("p", "Glass fragments"),
									m("p", "Other"),
								]),
								m(".w3-container w3-cell", [
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.glassbottles = value }), value: Survey.current.glassbottles}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.glassjars = value }), value: Survey.current.glassjars}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.glassfragments = value }), value: Survey.current.glassfragments}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.glassother = value }), value: Survey.current.glassother}),
								])
							])
						]),
						m(".w3-container", [
							m(".w3-container w3-grey",
								m("h6", "Rubber")
							),
							m(".w3-cell-row", [
								m(".w3-container w3-cell", [
									m("p", "Flip flops"),
									m("p", "Gloves"),
									m("p", "Tires"),
									m("p", "Balloons latex"),
									m("p", "Rubber fragments"),
									m("p", "Other"),
								]),
								m(".w3-container w3-cell", [
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.flipflops = value }), value: Survey.current.flipflops}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.rubbergloves = value }), value: Survey.current.rubbergloves}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.tires = value }), value: Survey.current.tires}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.rubberballoons = value }), value: Survey.current.rubberballoons}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.rubberfragments = value }), value: Survey.current.rubberfragments}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.rubberother = value }), value: Survey.current.rubberother}),
								])
							])
						]),
						m(".w3-container", [
							m(".w3-container w3-grey",
								m("h6", "Processed Lumber")
							),
							m(".w3-cell-row", [
								m(".w3-container w3-cell", [
									m("p", "Cardboard cartons"),
									m("p", "Paper and cardboard"),
									m("p", "Paper bags"),
									m("p", "Lumber or building material"),
									m("p", "Other"),
								]),
								m(".w3-container w3-cell", [
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.cartons = value }), value: Survey.current.cartons}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.paper = value }), value: Survey.current.paper}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.paperbag = value }), value: Survey.current.paperbag}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.lumber = value }), value: Survey.current.lumber}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.lumberother = value }), value: Survey.current.lumberother}),
								])
							])
						]),
						m(".w3-container", [
							m(".w3-container w3-grey",
								m("h6", "Cloth or Fabric")
							),
							m(".w3-cell-row", [
								m(".w3-container w3-cell", [
									m("p", "Clothing or shoes"),
									m("p", "Gloves"),
									m("p", "Towels or rags"),
									m("p", "Rope or net pieces (non-nylon)"),
									m("p", "Fabric pieces"),
									m("p", "Other"),
								]),
								m(".w3-container w3-cell", [
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.clothing = value }), value: Survey.current.clothing}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.clothgloves = value }), value: Survey.current.clothgloves}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.towels = value }), value: Survey.current.towels}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.clothrope = value }), value: Survey.current.clothrope}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.clothpieces = value }), value: Survey.current.clothpieces}),
									m("input.w3-input[type=text][placeholder=0]", {oninput: m.withAttr("value", function(value) { Survey.current.clothother = value }), value: Survey.current.clothother}),
								])
							])
						])
					])
				])
			])
		])
	}
}
