var simplemaps_countrymap_mapdata = {
  main_settings: {
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",

    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },

  state_specific: {
    IECE: { name: "Clare" },
    IECN: { name: "Cavan" },
    IECO: { name: "Cork" },
    IECW: { name: "Carlow" },
    IED: { name: "Dublin" },
    IEDL: { name: "Donegal" },
    IEG: { name: "Galway" },
    IEKE: { name: "Kildare" },
    IEKK: { name: "Kilkenny" },
    IEKY: { name: "Kerry" },
    IELD: { name: "Longford" },
    IELH: { name: "Louth" },
    IELK: { name: "Limerick" },
    IELM: { name: "Leitrim" },
    IELS: { name: "Laoighis" },
    IEMH: { name: "Meath" },
    IEMN: { name: "Monaghan" },
    IEMO: { name: "Mayo" },
    IEOY: { name: "Offaly" },
    IERN: { name: "Roscommon" },
    IESO: { name: "Sligo" },
    IETA: { name: "Tipperary" },
    IEWD: { name: "Waterford" },
    IEWH: { name: "Westmeath" },
    IEWW: { name: "Wicklow" },
    IEWX: { name: "Wexford" }
  },

  locations: {},

  labels: {
    IECE: { name: "Clare", parent_id: "IECE" },
    IECN: { name: "Cavan", parent_id: "IECN" },
    IECO: { name: "Cork", parent_id: "IECO" },
    IECW: { name: "Carlow", parent_id: "IECW" },
    IED: { name: "Dublin", parent_id: "IED" },
    IEDL: { name: "Donegal", parent_id: "IEDL" },
    IEG: { name: "Galway", parent_id: "IEG" },
    IEKE: { name: "Kildare", parent_id: "IEKE" },
    IEKK: { name: "Kilkenny", parent_id: "IEKK" },
    IEKY: { name: "Kerry", parent_id: "IEKY" },
    IELD: { name: "Longford", parent_id: "IELD" },
    IELH: { name: "Louth", parent_id: "IELH" },
    IELK: { name: "Limerick", parent_id: "IELK" },
    IELM: { name: "Leitrim", parent_id: "IELM" },
    IELS: { name: "Laoighis", parent_id: "IELS" },
    IEMH: { name: "Meath", parent_id: "IEMH" },
    IEMN: { name: "Monaghan", parent_id: "IEMN" },
    IEMO: { name: "Mayo", parent_id: "IEMO" },
    IEOY: { name: "Offaly", parent_id: "IEOY" },
    IERN: { name: "Roscommon", parent_id: "IERN" },
    IESO: { name: "Sligo", parent_id: "IESO" },
    IETA: { name: "Tipperary", parent_id: "IETA" },
    IEWD: { name: "Waterford", parent_id: "IEWD" },
    IEWH: { name: "Westmeath", parent_id: "IEWH" },
    IEWW: { name: "Wicklow", parent_id: "IEWW" },
    IEWX: { name: "Wexford", parent_id: "IEWX" }
  },

  legend: {
    entries: []
  },

  regions: {},

state_click: function(id) {

  if (id === "IECE") {
    window.location.assign("https://reed-bugle-ctr9.squarespace.com/new-page-1");
  }

}
};