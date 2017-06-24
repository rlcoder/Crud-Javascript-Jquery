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
			"<td><div class=\"group-actions\">"+
			"<button class=\"btn btn-info btn-action\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>"+
			"<button class=\"btn btn-danger btn-action\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></button>"+
			"</div></td>"+
		"</tr>"
	);
}

	$(document).ready(function(){

		rowAdd();

	});
