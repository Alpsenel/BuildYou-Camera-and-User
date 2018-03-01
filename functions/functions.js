$('.challenges a').on('click', function(){
	
	var $this = $(this); 
	var arrow = $this.children();
	arrow.toggleClass('arrow-reverse');	
});
$('.skills a').on('click', function(){
	
	var $this = $(this); 
	var arrow = $this.children();
	arrow.toggleClass('arrow-reverse');	
});
$('#edit-profile').click(function(){
	location.href = 'edit-profile.html';
});
