// Daniel Reyes
// ASDI 1304
// javaScript for GPeS app


var localStorageKey = "storeKey";
$('#information').live('pagecreate', function() {
            if (Modernizr.localstorage) {
                alert("Information Saved!")
            }
            else {
                $('#message').text("Unfortunately your browser doesn't support local storage");
                $('#addToStorage').attr('disabled', 'disabled');
                $('#message').show();
            }
            $('#submit').click(function(e) {
                //localStorage.setItem(localStorageKey, $('#fname').val());
                $("localStorage").data("First Name", "#fname")

                showStoreValue();
                e.preventDefault();
            });
        });

        function showStoreValue() {
            var item = localStorage.getItem(localStorageKey);
            if (item == null) {
                item = 'Nothing in store';
            }
            else if (item.length === 0) {
                item = 'Store contains empty value';
            }
            $('.storeItem').text(item);
        }

	
	
