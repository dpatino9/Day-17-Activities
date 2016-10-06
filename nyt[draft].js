var searchterm = "Trump"
var beginDate = "20150101";
var endDate = "20160101";
var url = "https://crossorigin.me/https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
		'api-key': "d6c8cdc35f93488dbaa04dd9173ea9fb",
		// searches article body, headline, and byline
		'q': searchterm,
		// YYYYMMDD
		'begin_date': beginDate,
		'end_date': endDate,
		// options - newest oldest
		'sort': "newest"
});
$.ajax({
		url: url,
		method: 'GET',
}).done(function(result) {
	console.log(url);
	console.log(result);
}).fail(function(err) {
	throw err;
});


// Results Data
var results = result.param;
                //--------------------------------

                for (var i = 0; i < results.length; i++) {

                  var counter = 1

                    var searhResults = $('<div>');

                    var p = $('<p>').text(results[i].response.headline.main);
                    		$('<p>').text(results[i].response.byline);
                    		$('<p>').text("Section:  " + results[i].response.section_name);
                    		$('<p>').text(results[i].response.pub_date);
                    		$('<p>').text(results[i].response.web_url);
                    

                    .append();
                    .append();

