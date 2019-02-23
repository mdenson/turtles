import Survey from '../models/survey';

var GeneralSection = [
    {
        label: 'Surveyor Name',
        value: Survey.current.surveyor,
        placeholder: 'Joe Dirt',
    },
    {
        label: 'Phone',
        value: Survey.current.phone,
        placeholder: '+15558765309',
    },
    {
        label: 'Email',
        value: Survey.current.email,
        placeholder: 'joe@yahoo.com',
    },
    {
        label: 'Date',
        value: Survey.current.date,
        placeholder: 'yyyymmdd',
    },
];

var AdditionalInfoSection = [
    {
        label: 'Beach',
        value: Survey.current.beach,
        placeholder: 'beach',
    },
    {
        label: 'Transect ID',
        value: Survey.current.transect,
        placeholder: 'transect number',
    },
    {
        label: 'Start Coords',
        value: Survey.current.startlat,
        placeholder: 'start',
    },
    {
        label: 'End Coords',
        value: Survey.current.endlat,
        placeholder: 'end',
    },
    {
        label: 'Width of Beach',
        value: Survey.current.beachwidth,
        placeholder: 'width in meters',
    },
    {
        label: 'Start Time',
        value: Survey.current.starttime,
        placeholder: '10:00am',
    },
    {
        label: 'End Time',
        value: Survey.current.endtime,
        placeholder: '12:00am',
    },
    {
        label: 'Time of Low Tide',
        value: Survey.current.lowtide,
        placeholder: '12:00am',
    },
    {
        label: 'Season',
        value: Survey.current.season,
        placeholder: 'summer',
    },
    {
        label: 'Date of Previous Survey',
        value: Survey.current.previous,
        placeholder: 'yyyymmdd',
    },
    {
        label: 'Storm Activity',
        value: Survey.current.storm,
        placeholder: 'calm',
    },
    {
        label: 'Current Weather',
        value: Survey.current.weather,
        placeholder: 'clear',
    },
    {
        label: 'Number of Surveyors',
        value: Survey.current.npeople,
        placeholder: '1',
    },
    {
        label: 'Large Items',
        value: Survey.current.largeitems,
        placeholder: 'count of large items',
    },
    {
        label: 'Debris Behind Back Barrier',
        value: Survey.current.debris,
        placeholder: 'count of items',
    },
    {
        label: 'Debris Survey Datasheet > v2.0',
        value: Survey.current.v2,
        placeholder: 'yes',
    },
    {
        label: 'Notes',
        value: Survey.current.notes,
        placeholder: 'notes',
    },
];

var DebrisPlasticSection = [
    {
        label: 'Hard plastic fragments',
        value: Survey.current.hardplastic,
        defaultValue: 0,
    },
    {
        label: 'Foamed plastic',
        value: Survey.current.foamedplastic,
        defaultValue: 0,
    },
    {
        label: 'Film plastic',
        value: Survey.current.filmplastic,
        defaultValue: 0,
    },
    {
        label: 'Food wrappers',
        value: Survey.current.foodwrappers,
        defaultValue: 0,
    },
    {
        label: 'Beverage bottles',
        value: Survey.current.beverage,
        defaultValue: 0,
    },
    {
        label: 'Other jugs or containers',
        value: Survey.current.jugs,
        defaultValue: 0,
    },
    {
        label: 'Bottle or container caps',
        value: Survey.current.caps,
        defaultValue: 0,
    },
    {
        label: 'Cigar tips',
        value: Survey.current.cigars,
        defaultValue: 0,
    },
    {
        label: 'Cigarettes',
        value: Survey.current.cigarettes,
        defaultValue: 0,
    },
    {
        label: 'Disposable cigarette lighters',
        value: Survey.current.lighters,
        defaultValue: 0,
    },
    {
        label: '6-pack rings',
        value: Survey.current.sixpacks,
        defaultValue: 0,
    },
    {
        label: 'Bags',
        value: Survey.current.bags,
        defaultValue: 0,
    },
    {
        label: 'Plastic rope small net pieces',
        value: Survey.current.ropes,
        defaultValue: 0,
    },
    {
        label: 'Buoys & floats',
        value: Survey.current.bouys,
        defaultValue: 0,
    },
    {
        label: 'Fishing lures or line',
        value: Survey.current.lures,
        defaultValue: 0,
    },
    {
        label: 'Cups (including polystyrene foamed plastic',
        value: Survey.current.cups,
        defaultValue: 0,
    },
    {
        label: 'Plastic utensils',
        value: Survey.current.utensils,
        defaultValue: 0,
    },
    {
        label: 'Straws',
        value: Survey.current.straws,
        defaultValue: 0,
    },
    {
        label: 'Ballons - Mylar',
        value: Survey.current.baloons,
        defaultValue: 0,
    },
    {
        label: 'Personal care products',
        value: Survey.current.personalcare,
        defaultValue: 0,
    },
    {
        label: 'Other',
        value: Survey.current.plasticother,
        defaultValue: 0,
    },
];

var DebrisMetalSection = [
    {
        label: 'Aluminum or tin cans',
        value: Survey.current.metalcans,
        defaultValue: 0,
    },
    {
        label: 'Aerosol cans',
        value: Survey.current.aerosolcans,
        defaultValue: 0,
    },
    {
        label: 'Metal fragments',
        value: Survey.current.metalfragments,
        defaultValue: 0,
    },
    {
        label: 'Other',
        value: Survey.current.metalother,
        defaultValue: 0,
    },
];

var DebrisGlassSection = [
    {
        label: 'Beverage bottles',
        value: Survey.current.glassbottles,
        defaultValue: 0,
    },
    {
        label: 'Jars',
        value: Survey.current.glassjars,
        defaultValue: 0,
    },
    {
        label: 'Glass fragments',
        value: Survey.current.glassfragments,
        defaultValue: 0,
    },
    {
        label: 'Other',
        value: Survey.current.glassother,
        defaultValue: 0,
    },
];

var DebrisRubberSection = [
    {
        label: 'Flip flops',
        value: Survey.current.flipflops,
        defaultValue: 0,
    },
    {
        label: 'Gloves',
        value: Survey.current.rubbergloves,
        defaultValue: 0,
    },
    {
        label: 'Tires',
        value: Survey.current.tires,
        defaultValue: 0,
    },
    {
        label: 'Balloons latex',
        value: Survey.current.rubberbaloons,
        defaultValue: 0,
    },
    {
        label: 'Rubber fragments',
        value: Survey.current.rubberfragments,
        defaultValue: 0,
    },
    {
        label: 'Other',
        value: Survey.current.rubberother,
        defaultValue: 0,
    },
];

var DebrisLumberSection = [
    {
        label: 'Cardboard cartons',
        value: Survey.current.cartons,
        defaultValue: 0,
    },
    {
        label: 'Paper and cardboard',
        value: Survey.current.paper,
        defaultValue: 0,
    },
    {
        label: 'Paper bags',
        value: Survey.current.paperbag,
        defaultValue: 0,
    },
    {
        label: 'Lumber or building material',
        value: Survey.current.lumber,
        defaultValue: 0,
    },
    {
        label: 'Other',
        value: Survey.current.lumberother,
        defaultValue: 0,
    },
];

var DebrisClothSection = [
    {
        label: 'Clothing or shoes',
        value: Survey.current.clothing,
        defaultValue: 0,
    },
    {
        label: 'Gloves',
        value: Survey.current.clothgloves,
        defaultValue: 0,
    },
    {
        label: 'Towels or rags',
        value: Survey.current.towels,
        defaultValue: 0,
    },
    {
        label: 'Rope or net pieces (non-nylon)',
        value: Survey.current.clothrope,
        defaultValue: 0,
    },
    {
        label: 'Fabric pieces',
        value: Survey.current.clothpieces,
        defaultValue: 0,
    },
    {
        label: 'Other',
        value: Survey.current.clothother,
        defaultValue: 0,
    },
];

var SurveyFormData = {
    general: GeneralSection,
    additionalInfo: AdditionalInfoSection,
    debrisPlastic: DebrisPlasticSection,
    debrisMetal: DebrisMetalSection,
    debrisGlass: DebrisGlassSection,
    debrisRubber: DebrisRubberSection,
    debrisLumber: DebrisLumberSection,
    debrisCloth: DebrisClothSection,
};

export default SurveyFormData;
