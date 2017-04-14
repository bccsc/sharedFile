
$(document).ready(function(){
    
   $('#Menu a').on('click', function(e){
   
    e.preventDefault();
    var url = this.href;
    
    //clear indicator
    //new current indicator
    
	 $('#contentHeader').remove();// remove the summary
    $('#mainContent').remove();// Remove the content from a child element using a specific id selector
    $('#summaryContainer').load(url + ' #contentHeader').hide().fadeIn('slow');//load new summary
    $('#Content').load(url + ' #mainContent').hide().fadeIn('slow');// load the new element to the parent in a slow fade-in transition 
    
   });
     
});