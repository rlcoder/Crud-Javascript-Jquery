/*=================================================
Theme Name: Crud Javascript e jquery
Theme URI: CrudJs
Author: Modfied by rlcoder
Author URI: based Source code - http://blog.patricio.me/crud-em-html-com-javascript-e-jquery/
Description: Crud simples com Javascript
Version: 1.0
=================================================*/


//function to add row in table
function rowAdd(){
	if ($("#crudTable tbody")== 0){
		$("#crudTable").append("<tbody></tbody>");
	}

		$("#crudTable tbody").append(
		"<tr>"+
			"<td>001</td>" +
			"<td>Product1</td>"+
			"<td>DetailsProduct1</td>"+
		"</tr>"
	);
}

	$(document).ready(function(){


	});
