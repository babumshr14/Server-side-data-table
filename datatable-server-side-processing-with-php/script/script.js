jQuery( document ).ready(function() {
	var table = jQuery('#example').dataTable({
			 "bProcessing": true,
			 "sAjaxSource": "data.php",
			  "bPaginate":true,
			  "sPaginationType":"full_numbers",
			  "iDisplayLength": 5,
			 "aoColumns": [
					{ mData: 'Empid' } ,
					{ mData: 'Name' },
					{ mData: 'Salary' }
			]
	});   
});