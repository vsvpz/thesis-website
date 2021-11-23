$('#picker').colpick({
	flat:true,
	layout:'hex',
	submit:0,
  onChange:function(hsb,hex,rgb,el,bySetColor) {
		$("body").css("background-color",'#'+hex);
  }
});