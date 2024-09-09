


$(document).ready(function() {
    function loadCountries() {
        $.getJSON('countries.json', function(data) {
            let dropdown = $('#countryDropdown');
            dropdown.empty(); // Clear the dropdown
            dropdown.append('<option selected="true" disabled>Select a country</option>');
            dropdown.prop('selectedIndex', 0);

            // Iterate over the JSON array and append to the dropdown
            $.each(data, function(key, entry) {
                dropdown.append($('<option></option>').attr('value', entry.code).text(entry.name));
            });
        }).fail(function() {
            alert('Error loading country data.');
        });
    }

    // Call the function to load countries when the page is ready
    loadCountries();
});

