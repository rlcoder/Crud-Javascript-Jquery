/*=================================================
Theme Name: Crud Javascript e jquery
Theme URI: CrudJs
Author: Modfied by rlcoder
Author URI: based Source code - http://blog.patricio.me/crud-em-html-com-javascript-e-jquery/
Description: Crud simples com Javascript
Version: 1.0
=================================================*/
//Global var
var _row = null;

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

//function to add row in table
function rowAddToTable(){
	if ($("#crudTable tbody")== 0){
		$("#crudTable").append("<tbody></tbody>");
	}
		$("#crudTable tbody").append(
		"<tr>"+
			"<td>001</td>" +
			"<td>"+ $("#productName").val()+"</td>"+
			"<td>"+ $("#productDetail").val()+"</td>"+
			"<td><div class=\"group-actions\">"+
			"<button class=\"btn btn-info btn-action\" onclick=\"editRow(this);\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>"+
			"<button class=\"btn btn-danger btn-action\" onclick=\"deleteRow(this);\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></button>"+
			"</div></td>"+
		"</tr>"
	);
}

//clear inputs
function formClear(){
	$("#productName").val("");
	$("#productDetail").val("");
}

//function to delete table row
function deleteRow(get_btnID){
	$(get_btnID).parent().parent().parent("tr").remove();
}

//function to edit table row in form
function editRow(get_btnID){
	_row = $(get_btnID).parent().parent().parent("tr");
	var cols = _row.contents("td");
	console.log(cols);
	for (i = 0; i < cols.length - 1; i++){
		console.log(cols[i]);
	}
}

//function to add row from the form
function tableUpdate(){
	if ($("#productName").val() != null && $("#productName").val()!=''){
		rowAddToTable();
		formClear();
		$("#productName").focus();
	}
}
	$(document).ready(function(){

		rowAdd();

	});
