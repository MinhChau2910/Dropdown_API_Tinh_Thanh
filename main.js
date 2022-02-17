var citis = document.getElementById("city");
var districts = document.getElementById("district");
var wards = document.getElementById("ward");
$(document).ready(function() {
    _getCities();
    $('#city').on('change', function() {
        var value = $(this).find(":selected").val();
        if (value != "" && value != null) {
            _getDistrict(value);
        }
    })

    $('#district').on('change', function() {
        var value = $(this).find(":selected").val();
        if (value != "" && value != null) {
            _getWard(value);
        }
    })
})

function _getCities() {
    $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/https://thongtindoanhnghiep.co/api/city",
        data: "data",
        dataType: "json",
        success: function(response) {
            var city = response.LtsItem;
            var html = '';
            $.each(city, function(key, item) {
                html += '<option value=' + item.ID + '>' + item.Title + '</option>'
            });
            $('#city').html(html);
        }
    });
}

function _getDistrict(id) {
    var id_city = id;
    $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/https://thongtindoanhnghiep.co/api/city/" + id_city + "/district",
        dataType: "json",
        success: function(response) {
            var district = response;
            var html = '';
            $.each(district, function(key, item) {
                html += '<option value=' + item.ID + '>' + item.Title + '</option>'
            });
            $('#district').html(html);
        }
    });
}


function _getWard(id) {
    var id_district = id;
    $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/https://thongtindoanhnghiep.co/api/district/" + id_district + "/ward",
        dataType: "json",
        success: function(response) {
            var district = response;
            var html = '';
            $.each(district, function(key, item) {
                html += '<option value=' + item.ID + '>' + item.Title + '</option>'
            });
            $('#ward').html(html);
        }
    });
}