	


$('#contactSubmit').on('click', function()
{
	var contactFirst = $('#contactFirst').val();
	var contactPhone = $('#contactPhone').val();
	var contactEmail = $('#contactEmail').val();
	var contactMessage = $('#contactMessage').val();
	
	if(contactFirst == "")
	{
		$('#errorModal').modal('show');
		$('.message').text('Please enter your first name.');
		
		document.forms["contactForm"].contactFirst.focus();
		return false;	
	}
	if(contactPhone == "")
	{
		$('#errorModal').modal('show');
		$('.message').text('Please enter your phone number.');
		document.forms["contactForm"].contactPhone.focus();
		return false;			
	}
	if(contactEmail == "")
	{
		$('#errorModal').modal('show');
		$('.message').text('Please enter your email address.');
		document.forms["contactForm"].contactEmail.focus();
		return false;			
	}
	if(contactMessage == "")
	{
		$('#errorModal').modal('show');
		$('.message').text('Please let us know what you\'re looking for.');
		document.forms["contactForm"].contactMessage.focus();
		return false;			
	}	
	else
	{
		console.log('send email');
	}
});





