var config = {
    style: 'mapbox://styles/ogm7/cmiedkqmk00m201r12a2585nr',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoib2dtNyIsImEiOiJjbWllZGNla3MwMWEyM2ZxdjM4bzR3emYwIn0.OQV-uhj8T_QBDMGU76ZYjg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Faros de La Palma',
    subtitle: 'Un Storymap de los faros de La Palma',
    byline: 'Por Óscar García',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Faro de Punta Lava',
            image: 'https://img.fotocommunity.com/der-faro-an-der-punta-lava-ead2a536-2fc8-49e0-94fb-783e5947748b.jpg?height=1080',
            description: 'El faro de Punta Lava o faro de Punta del Moro es un faro situado en Tazacorte, al oeste de la isla de La Palma, en el archipiélago de las Islas Canarias, España. Es uno de los cuatro principales faros de La Palma, ya que cada uno marca un punto cardinal de la isla.',
            location: {
                center: [-17.92561752570636, 28.596729247657425],
                zoom: 12.52,
                pitch: 64,
                bearing: 52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Faro de Fuencaliente',
            image: 'https://img.fotocommunity.com/leuchtturm-faro-de-fuencaliente-da4ee7bd-acac-4910-afb7-73231ee2bbef.jpg?height=1080',
            description: 'En la entrada se exponen tres montajes visuales alusivos a los vertidos sólidos provenientes de la actividad humana; otro denuncia los líquidos tóxicos que arrojan los petroleros, y un tercero representa un sumidero por el que las viviendas arrojan productos tóxicos. La sala principal recrea una gruta volcánica y el visitante, que camina sobre un suelo de cristal sobre el fondo marino podrá observar las basuras que los humanos han vertido en alguna ocasión al mar. En el centro de la sala hay un delfín a escala real realizado en bronce colgado del techo y atrapado por la red de un pesquero del que solo apreciará la quilla en la superficie. Las paredes repletas de peces de bronce y rocalla submarina recrean los fondos de la reserva',
            location: {
                center: [-17.84312614304842, 28.455281749756253],
                zoom: 16.75,
                pitch: 69.50,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Faro de Arenas Blancas',
            image: 'https://img.index.hu/imgfrm/0/0/1/2/MED_0017960012.jpg',
            description: 'El faro de Arenas Blancas es un faro situado en la playa de Arenas Blancas, a 4 kilómetros al sureste de Lomo Oscuro, en la isla de La Palma, en el archipiélago de las Islas Canarias, España.',
            location: {
                center: [-17.76045784422221, 28.569925844974257],
                zoom: 13.42,
                pitch: 71.06,
                bearing: -85.56
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Faro de Punta Cumplida',
            image: 'https://th.bing.com/th/id/OIP.SLHDgX4bNUwd-uM15yK-wwHaFZ?w=250&h=181&c=7&r=0&o=7&pid=1.7&rm=3',
            description: 'Permitidas las obras 1857, empezaron estas 1861 y tardaron hasta la inauguración del faro 1867. 1997 le fue cambiado por primera vez la linterna y se le adjuntó una segunda balconada. La linterna se guardó en la sala de entrada del puerto de Santa Cruz de Tenerife hasta volver 2013 a Barlovento, donde la instalaron en frente del ayuntamiento.',
            location: {
                center: [-17.778052931436697, 28.83903806669408],
                zoom: 13.42,
                pitch: 71.06,
                bearing: -150.36
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
