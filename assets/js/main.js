/*=================================================
Theme Name: Crud Javascript e jquery
Theme URI: CrudJs
Author: Modfied by rlcoder
Author URI: based Source code - http://blog.patricio.me/crud-em-html-com-javascript-e-jquery/
Description: Crud simples com Javascript
Version: 1.0
=================================================*/
//Global var
var _nextId		 = 1,
		_activedId = 0;

//function to add row in table
function rowAddToTable(){
	if ($("#crudTable tbody")== 0){
		$("#crudTable").append("<tbody></tbody>");
	}	//Add an id in the method that passes as param param id the incremented id
		$("#crudTable tbody").append(buildTableRow(_nextId));
		//increment id
		_nextId +=1;
}
//function to add row in table where id= item clicked
function buildTableRow(id){
	var rowTable =
	"<tr>"+
		"<td>"+ id +"</td>" +
		"<td>"+ $("#productName").val()+"</td>"+
		"<td>"+ $("#productDetail").val()+"</td>"+
		"<td><div class=\"group-actions\">"+
		"<button class=\"btn btn-info btn-action\" onclick=\"editRow(this);\"" +
			"data-id= \""+ id +"\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>"+
		"<button class=\"btn btn-danger btn-action\" onclick=\"deleteRow(this);\" "+
			"data-id=\"" + id +"\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></button>"+
		"</div></td>"+
	"</tr>";
	return rowTable;
}

//clear inputs
function formClear(){
	$("#productName").val("");
	$("#productDetail").val("");
}

//function to delete table row
function deleteRow(get_btnID){
	//select the clicked eleme
	$(get_btnID).parent().parent().parent("tr").remove();
}

//function to edit table row in form
function editRow(get_btnID){
	var row  = $(get_btnID).parent().parent().parent("tr");
	var cols = row.children("td");
	console.log(cols);
	console.log(cols[3]);
	_activedId = $($(cols[3]).find(".group-actions").children("button")[0]).data("id");
	console.log("active id");
	console.log(_activedId);
	$("#productName").val($(cols[1]).text());
	$("#productDetail").val($(cols[2]).text());

	$("#updateButton").text("Update");
}

//function to update row table
function tableUpdateRow(id){
		console.log("Tabela de adicionar linha");
	console.log(_activedId);
	var row = $(".group-actions button[data-id='"+ id +"']");
	console.log(row);
	//Adiciona linha na tabela
	$(row).after(buildTableRow());
	//remove old row
	$(row).remove();
	formClear();
	$("#updateButton").text("Add Product");
}

//function to add row from the form
function tableUpdate(){
	if ($("#productName").val() != null && $("#productName").val()!=''){
		if($("#updateButton").text() == "Update"){
			tableUpdateRow(_activedId)
		} else {
			rowAddToTable();
		}
			formClear();
			$("#productName").focus();
	}
}
	$(document).ready(function(){



	});
