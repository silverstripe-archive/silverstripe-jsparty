/**
 * Startup handler for TinyMCE
 */
//		content_css : "../../actiond/css/typography.css",
//		content_css : "../../actiond/css/typography.css",

function sapphire_tinymce_init() {
	tinyMCE.init({
		mode : "specific_textareas",
		textarea_trigger : "tinymce",
		width: 0,
		height: 0,
		auto_resize : true,
		theme : "advanced",
		Theme_Advanced_Layout_manager : "SimpleLayout",
		plugins : "contextmenu,searchreplace,table,noneditable" ,
		theme_advanced_toolbar_location : "external",
		theme_advanced_toolbar_align : "left",
		theme_advanced_toolbar_parent : "right",
		theme_advanced_buttons1 : "bold,italic,underline,strikethrough,separator,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,separator,bullist,numlist,outdent,indent,hr",
		theme_advanced_buttons2 : "undo,redo,separator,cut,copy,paste,separator,search,replace,separator,link,unlink,anchor,image,separator,cleanup,removeformat,visualaid,code,separator,tablecontrols",
		theme_advanced_buttons3 : "",
		safari_warning : false,
		relative_urls : true,
	  document_base_url : "/sminneee/actiond/",
	  force_br_newlines : true
	});

	tinyMCE.init({
		mode : "specific_textareas",
		textarea_trigger : "tinymce_oneline",
		valid_elements : "a,abbr,acronym,br,cite,del,dfn,em,img,ins,kbd,label,q,span,b,i,strong,u",
		width: 0,
		height: 0,
		auto_resize : true,
		theme : "advanced",
		theme_advanced_layout_manager : "SimpleLayout",
		plugins : "contextmenu,searchreplace,table,noneditable" ,
		theme_advanced_toolbar_location : "external",
		theme_advanced_toolbar_align : "left",
		theme_advanced_toolbar_parent : "right",
		theme_advanced_buttons1 : "bold,italic,underline,strikethrough,separator,styleselect",
		theme_advanced_buttons2 : "undo,redo,separator,cut,copy,paste,separator,search,replace,separator,cleanup,removeformat,code",
		theme_advanced_buttons3 : "",
		safari_warning : false,
		force_br_newlines : true
	});	
}

sapphire_tinymce_init();