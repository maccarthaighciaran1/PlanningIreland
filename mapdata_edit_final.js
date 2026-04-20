var simplemaps_countrymap_mapdata = {
  main_settings: {
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
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
    location_image_url: "",

    // 🔥 THIS IS THE ONLY ADDITION
    state_click: function(id, event) {

      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (id === "IECE") {
        window.open("/new-page-1", "_self");
      }

    }
  },

  state_specific: {
    IECE: { name: "Clare", color: "#1E5BB8", hover_color: "#0F2C87" },
    IECN: { name: "Cavan", color: "#1E5BB8", hover_color: "#0F2C87" },
    IECO: { name: "Cork", color: "#7EA6D6", hover_color: "#0F2C87" },
    IECW: { name: "Carlow", color: "#7EA6D6", hover_color: "#0F2C87" },
    IED: { name: "Dublin", color: "#153E9F", hover_color: "#0F2C87" },
    IEDL: { name: "Donegal", color: "#2F75C8", hover_color: "#0F2C87" },
    IEG: { name: "Galway", color: "#7EA6D6", hover_color: "#0F2C87" },
    IEKE: { name: "Kildare", color: "#7EA6D6", hover_color: "#0F2C87" },
    IEKK: { name: "Kilkenny", color: "#7EA6D6", hover_color: "#0F2C87" },
    IEKY: { name: "Kerry", color: "#2F75C8", hover_color: "#0F2C87" },
    IELD: { name: "Longford", color: "#7EA6D6", hover_color: "#0F2C87" },
    IELH: { name: "Louth", color: "#B7CCE3", hover_color: "#0F2C87" },
    IELK: { name: "Limerick", color: "#B7CCE3", hover_color: "#0F2C87" },
    IELM: { name: "Leitrim", color: "#B7CCE3", hover_color: "#0F2C87" },
    IELS: { name: "Laois", color: "#7EA6D6", hover_color: "#0F2C87" },
    IEMH: { name: "Meath", color: "#7EA6D6", hover_color: "#0F2C87" },
    IEMN: { name: "Monaghan", color: "#B7CCE3", hover_color: "#0F2C87" },
    IEMO: { name: "Mayo", color: "#2F75C8", hover_color: "#0F2C87" },
    IEOY: { name: "Offaly", color: "#1E5BB8", hover_color: "#0F2C87" },
    IERN: { name: "Roscommon", color: "#153E9F", hover_color: "#0F2C87" },
    IESO: { name: "Sligo", color: "#2F75C8", hover_color: "#0F2C87" },
    IETA: { name: "Tipperary", color: "#153E9F", hover_color: "#0F2C87" },
    IEWD: { name: "Waterford", color: "#B7CCE3", hover_color: "#0F2C87" },
    IEWH: { name: "Westmeath", color: "#1E5BB8", hover_color: "#0F2C87" },
    IEWW: { name: "Wicklow", color: "#1E5BB8", hover_color: "#0F2C87" },
    IEWX: { name: "Wexford", color: "#153E9F", hover_color: "#0F2C87" }
  },

  locations: {},
  labels: {},
  legend: { entries: [] },
  regions: {}
};