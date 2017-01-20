$(function() {

  $.ajax({
  	url: 'https://www.codeschool.com/users/BMG-IT.json',
  	dataType: 'jsonp',
  	success: function(response) {
  		console.log(response);

  		if(response){
	  		$.each(response.courses.in_progress, function(key, value) {
	  			
	  			$('<div>',{
	  				'class': 'course'
	  			}).appendTo('#badges');

	  			var title = '<h3>' + value.title + '</h3>';
	  			var image = '<img src="' + value.badge + '"/>';
	  			var anchor = '<a href="' + value.url + '" target="_blank" class="btn btn-primary">See Course</a>';

	  			$(title).appendTo('div.course');
	  			$(image).appendTo('div.course');	 
	  			$(anchor).appendTo('div.course');

  			});

  			$.each(response.badges, function(key, value) {
  				$('<div>',{
	  				'class': ['course class_'+key]
	  			}).appendTo('#badges');

	  			var title = '<h3>' + value.name + '</h3>';
	  			var image = '<img src="' + value.badge + '"/>';
	  			var anchor = '<a href="' + value.course_url + '" target="_blank" class="btn btn-primary">See Course</a>';

	  			$(title).appendTo('div.class_'+key);
	  			$(image).appendTo('div.class_'+key);	 
	  			$(anchor).appendTo('div.class_'+key);
  			});
  		}
  	}
  
  });

  // your code will go here

});
