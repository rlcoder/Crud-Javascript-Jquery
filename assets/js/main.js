/*=================================================
Theme Name: Crud Javascript e jquery
Theme URI: CrudJs
Author: Modfied by rlcoder
Author URI: based Source code - http://blog.patricio.me/crud-em-html-com-javascript-e-jquery/
Description: Crud simples com Javascript
Version: 1.0
=================================================*/
//Global var
var _row	 		 = null,
		_nextId		 = 1,
		_activedId = 0;

//function to add row in table
if ($("#crudTable tbody")== 0){
function rowAdd(){
		$("#crudTable").append("<tbody></tbody>");
	}

		$("#crudTable tbody").append(
		"<tr>"+
			"<td>000</td>" +
			"<td>Not Product</td>"+
			"<td>Null</td>"+
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
//function to add row in table where id= item clicked
function buildTableRow(id){
	var rowTable =
	"<tr>"+
		"<td>"+ id +"</td>" +
		"<td>"+ $("#productName").val()+"</td>"+
		"<td>"+ $("#productDetail").val()+"</td>"+
		"<td><div class=\"group-actions\">"+
		"<button class=\"btn btn-info btn-action\" onclick=\"editRow(this);\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>"+
		"<button class=\"btn btn-danger btn-action\" onclick=\"deleteRow(this);\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></button>"+
		"</div></td>"+
	"</tr>";
	return row;
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
	var cols = _row.children("td");
	console.log(cols);
	$("#productName").val($(cols[1]).text());
	$("#productDetail").val($(cols[2]).text());

	$("#updateButton").text("Update");
}

//function to update row table
function tableUpdateRow(){
	console.log(_row);
	//Adiciona linha na tabela
	$(_row).after(buildTableRow());
	//remove old row
	$(_row).remove();
	formClear();
	$("#updateButton").text("Add Product");
}

//function to add row from the form
function tableUpdate(){
	if ($("#productName").val() != null && $("#productName").val()!=''){
		if($("#updateButton").text() == "Update"){
			tableUpdateRow();
		} else {
			rowAddToTable();
		}
			formClear();
			$("#productName").focus();
	}
}
	$(document).ready(function(){

		rowAdd();

	});
