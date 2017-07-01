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
//Function to add row in table receiving as parameter an id - which in this case would be the variable _nextId
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

	if ($(get_btnID).text() == "Delete") {
		//compare text product id with _activedId
		if ($("#productId").text()== _activedId) {
			//select <tr> through the id in attribute [data-id] and remove
			$(".group-actions button[data-id='"+ _activedId +"']")
			.parent().parent().parent("tr")[0].remove();

			//clear form and hide elements and update Text button and focus input text
			formClear();
			$("#btnDelete, .lblProductId, #productId").hide();
			$("#updateButton").text("Add Product");
			$("#productName").focus();
		}
	}else {
		//select the clicked element and remove
		$(get_btnID).parent().parent().parent("tr").remove();

		//clear form and hide elements and update Text button.
		formClear();
		$("#btnDelete, .lblProductId, #productId").hide();
		$("#updateButton").text("Add Product");
	}
}

//function to edit table row in form
function editRow(get_btnID){

	//hide elements
	$("#btnDelete, .lblProductId, #productId").show();
	//get element clicked  and select father (tr)
	var row  = $(get_btnID).parent().parent().parent("tr");
	//get children of the variable row equal (td) = cells and add in array cols;
	var cols = row.children("td");

	//get the id on the button and add in variable _activedId
	_activedId = $($(cols[3]).find(".group-actions").children("button")[0]).data("id");

	//add _activedId in label
	$("#productId").text(_activedId);
	//add in form the values stored in the array
	$("#productName").val($(cols[1]).text());
	$("#productDetail").val($(cols[2]).text());
	//update text button
	$("#updateButton").text("Update");
}

//function to update row table
function tableUpdateRow(id){
	//select father of the button containing the id receveid per parameter (tr)
	var row = $(".group-actions button[data-id='"+ id +"']").parent().parent().parent("tr")[0];
	//Add row in table as parameter _activeID
	$(row).after(buildTableRow(_activedId));
	//remove old row
	$(row).remove();
	//clear inputs
	formClear();
	//hide elements in form
	$("#btnDelete, .lblProductId, #productId").hide();
	//update text in button update to add product
	$("#updateButton").text("Add Product");
}

//function to add row from the form
function tableUpdate(){
	if ($("#productName").val() != null && $("#productName").val()!=''){
		if($("#updateButton").text() == "Update"){
			tableUpdateRow(_activedId);
		} else {
			rowAddToTable();
		}
			formClear();
			$("#productName").focus();
	}
}
