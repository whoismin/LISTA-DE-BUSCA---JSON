$(function () {
    $("#Buscar").submit(function (event) {
        event.preventDefault();
        var marca = $("#marca").val();

        $("#TableData").empty();  // Clear the table

        $.getJSON("automoveis.json", function (data) {
            data['automoveis'].forEach(function (automovel) {
                if (marca === '' || automovel['MARCA'].includes(marca)) {
                    $("#TableData").append("<tr>");

                    for (var prop in automovel) {
                        $("#TableData").append("<td scope='col'>" + automovel[prop] + "</td>");
                    }
                    $("#TableData").append("</tr>");
                }
            });
        });
    });

    // Initial data loading
    $.getJSON("automoveis.json", function(data) {
        loadTableData(data);
    });
});

// Function to load table data initially and on reset
function loadTableData(data) {
    $("#TableData").empty();  // Clear the table

    for (var i = 0; i < data['automoveis'].length; i++) {
        $("#TableData").append("<tr>");
        // ... (rest of your existing code to populate the table)
    }
}

// Function to reset the table to its initial state
function resetTable() {
    $.getJSON("automoveis.json", function(data) {
        loadTableData(data);
    });
}

// Call resetTable on page load
$(document).ready(function () {
    resetTable();
});

// Call resetTable when clicking "Limpar Pesquisa"
function limparPesquisa() {
    $("#marca").val("");
    resetTable();
}

function resetTable() {
    console.log("Resetting table...");
    $.getJSON("automoveis.json", function(data) {
        loadTableData(data);
    });
}
