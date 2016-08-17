// Intro to jQuery UI accordians, .draggable(), .resizable(), selectable() & sortable()

$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
    
    $("#car").draggable();
    
    $("#resize").resizable();
    
    $("#select").selectable();                                       // Style when selected is controlled by ".ui-selected" class in jquery-ui.css (overridden in stylesheet2.css)
    $("#sort").sortable();
});