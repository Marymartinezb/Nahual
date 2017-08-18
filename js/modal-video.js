jQuery(document).ready(function($) {
    // Functions
    // Toggles the visibility of the modals
    function toggleVisibility() {
        if(!$('#videoModal').hasClass('hidden')) {
            $('.opacity').addClass('hidden');
            $('#videoModal').addClass('hidden');            
        }
    }
    
    // When you click the trailer button
    $('#playVideo').click(function() {
		$('#videoModal')[0].innerHTML = '<video  width="1000" height="600" controls><source src="video/PrototipoWEB.mp4" type="video/mp4">Your browser does not support HTML5 video.</video>';
        $('.opacity').removeClass('hidden');
        $('#videoModal').removeClass('hidden');
    })

    // When you click the arrow, hides the modal
    $('.btn-close').click(function() {
        toggleVisibility();
		$('#videoModal')[0].innerHTML = '';
    })

    // When you click the opacity the modal hides
    $('.opacity').click(function() {
        toggleVisibility();
		$('#videoModal')[0].innerHTML = '';
    })
});