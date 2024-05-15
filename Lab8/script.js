function constructTable(data) {
    var tableBody = $('#table-body');
    tableBody.empty(); // Clear existing rows

    $.each(data, function(index, item) {
      var row = $('<tr>');
      row.append($('<td>').text(item.code));
      row.append($('<td>').text(item.name));
      tableBody.append(row);
    });
  }

  $(document).ready(function() {
    $.ajax({
      url: 'languages.json',
      dataType: 'json',
      success: function(data) {
        constructTable(data);
      },
      error: function() {
        console.error('Error loading JSON file');
      }
    });
  });