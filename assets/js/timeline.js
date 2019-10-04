/**  * This file contains the js for displaying the feeds.  *  * @author
Visakh Vijayan <visakh.vawsum@gmail.com>  * @since 14-Dec-2018   */

$(document).ready(function()
{
	var schoolData =
	{
		"schoolId": 93033
	}

	$.ajax
	({
		url: "https://institution.vawsum.com/Websites/feedList",
		type: "POST",
		data: JSON.stringify(schoolData),
    	contentType: "application/json"
	})
	.done(function(response)
	{
		var res = JSON.parse(response);

		if (res.isOk == true)
		{
			var content = "";
			var galleryContent = "";
			

			$.each(res.responseObject, function(index, feed)
			{
				var photoCount = 0;
				if (feed.feedDetails.feed_type == "announcement")
				{
					content += getAnnouncementComponent(feed.feedDetails.feed_message, feed.feedDetails.formatted_time);
				}
				else if(feed.feedDetails.feed_type == "photo")
				{
					console.log("======= photo ===========");
					console.log(feed.feedDetails.photos);
					$.each(feed.feedDetails.photos, function(photoIndex, pic)
					{
						galleryContent += getImageComponent(pic.fileUrl, feed.feedDetails.formatted_time, photoCount);

						

					});
				}

				
			});

			

			$("#feedAnnouncementSection").html(content);
			$("#feedGallerySection").append(galleryContent);
		}
	})
	.fail(function()
	{

	})
	.always(function()
	{

	});
});


function getAnnouncementComponent(content, postedOn)
{
	var htmlContent = '<div class="col-md-4 col-sm-4 col-12 px-4"><div class="card mb-2"> <div class="card-body border text-center"><h4 class="card-title">' + content + '</h4><p class="card-text">' + postedOn + '</p></div></div></div>';
	return (htmlContent);
}

function getImageComponent(src, postedOn, p)
{
	console.log(src, postedOn, p);
	var filePath = src;

	if (src.startsWith("vawsum_"))
	{
		filePath = "https://institution.vawsum.com/photolibrary/" + src;
	}



	var htmlContent = '<div class="card1">\
	<figure>\
		<a href="'+ filePath +'" data-size="1152x864">\
			<img src="'+ filePath +'" class="img-fluid">\
		</a>\
	</figure>\
</div>';
	/*'<div class="col-md-3 col-sm-4 col-6 thumb">\
        <a class=""thumbnail href="'+ filePath +'"?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="fancybox" rel="ligthbox">\
        <img class="img-thumbnail" src="'+ filePath +'"?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="zoom img-fluid "  alt="">\
        </a>\
	</div>';*/

	/* '<div class="col-md-3 col-sm-4 col-6 thumb">\
	<a class="thumbnail" href="#" data-image-id="'+ (p) +'" data-toggle="modal" data-title="" data-image="'+ filePath +'" data-target="#image-gallery">\
									<img class="img-thumbnail" src="'+ filePath +'" alt="">\
								</a>\
							</div>'; */



	// var htmlContent = '<div class="col-md-3 col-sm-4 col-6 thumb">\
	// 						<a class="thumbnail" href="#" data-image-id="' + (index + 1) + '" data-toggle="modal" data-title="" data-image="' + filePath + '?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" data-target="#image-gallery"><img class="img-thumbnail" src="' + filePath + '?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Another alt text"/></a>\
	// 					</div>';
	return (htmlContent);
	
}