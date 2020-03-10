// show dataset and config file list

function get_tr_template(file, type, name){
	return '<tr><td>' + file + '</td><td><input type="' + type + '" name="' + name + '"></td>';
}

function refresh_databucket_list(){
    var loading_template = "<tr><td>loading ...</td></tr>";
    var empty_template = "<tr><td> There is not file. </td></tr>";
    $('#dataset_table tbody').html(loading_template);
    $('#config_table tbody').html(loading_template);

	$.ajax({
		url: '/demo_bucket/',
		success: function(res){
			console.log(res);
			if (res.status == 200){
				var dataset_html = '';
				for ( var i = 0 ; i < res.datasets.length ; i++)
					dataset_html += get_tr_template(res.datasets[i], "checkbox", "dataset_file")

				dataset_html === '' ? $('#dataset_table tbody').html(empty_template) : $('#dataset_table tbody').html(dataset_html);

				var config_html = '';
				for ( var i = 0 ; i < res.configs.length ; i++)
					config_html += get_tr_template(res.configs[i], "radio", "config_file")

                config_html === '' ? $('#config_table tbody').html(empty_template) : $('#config_table tbody').html(config_html);

				// add eventlistener for each tr
				$('tr').click(function(event){
					if (event.target.type !== 'checkbox') {
                        $(':checkbox', this).trigger('click');
                    }

                    if (event.target.type !== 'radio') {
                        $(':radio', this).trigger('click');
                    }
				})
			}
		}
	})
}

function submit(){
    var dataset_files = [];
    var config_file = null;

}