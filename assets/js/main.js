let modalId = $('#image-gallery');

$(document).ready(function()
{
    setNavbarItems();
    loadGallery(true, 'a.thumbnail');

    function disableButtons(counter_max, counter_current)
    {
        $('#show-previous-image, #show-next-image').show();
        if (counter_max === counter_current)
        {
            $('#show-next-image').hide();
        }
        else if (counter_current === 1)
        {
            $('#show-previous-image').hide();
        }
    }

    function loadGallery(setIDs, setClickAttr)
    {
        let current_image, selector, counter = 0;

        $(document).on('click', '#show-next-image, #show-previous-image', function ()
        {
            if ($(this).attr('id') === 'show-previous-image')
            {
                current_image--;
            }
            else
            {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector)
        {
            let $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if (setIDs == true)
        {
            $('[data-image-id]').each(function()
            {
                counter++;
                $(this).attr('data-image-id', counter);
            });
        }
        $(setClickAttr).on('click', function()
        {
            updateGallery($(this));
        });
    }
});

$(document).keydown(function(e)
{
    switch (e.which)
    {
        case 37:
            if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible"))
            {
                $('#show-previous-image').click();
            }
            break;

        case 39:
            if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible"))
            {
                $('#show-next-image')
                .click();
            }
            break;

        default:
            return;
    }
    e.preventDefault();
});

function setNavbarItems()
{
    var asdf =
    [
        {
            "display": "Home",
            "target": "./index.html"
        },
        {
            "display": "About Us",
            "target": "./aboutus.html"
        },
        {
            "display": "Courses",
            "target": "#"
        },
        {
            "display": "Admission",
            "target": "./admission-enquiry-form.html"
        },
        {
            "display": "Gallery",
            "target": "./media-gallery.html"
        },
        {
            "display": "Contact US",
            "target": "./contactus.html"
        }
    ];

    var url = "http://www.json-generator.com/api/json/get/cqmtOabznm?indent=2";

    var itemsList = ["Home", "About Us", "Courses", "Admission", "Gallery", "Contact US"];
    var hrefList = ["./index.html", "./aboutus.html", "#", "./admission-enquiry-form.html", "./media-gallery.html","./contactus.html"];

    var htmlFornavbarItems = "";
    var navbarclass = "";
    for (let index = 0; index < itemsList.length; index++) 
	{
        if(index == 0)
        {
            navbarclass = "nav-item active";
        }
        else
        {
            navbarclass = "nav-item";
        }
        console.log(itemsList[index],hrefList[index]);
		htmlFornavbarItems += 	'<li class="' + navbarclass + '">\
                                        <a class="nav-link text-uppercase" href="' + hrefList[index]+'">' + itemsList[index] + '</a>\
                                    </li>';
			
    }
    console.log(htmlFornavbarItems);
	$("#navbarItemsList").html(htmlFornavbarItems);
}

$(document).find("#mdb-lightbox-ui").load("./mdb-addons/mdb-lightbox-ui.html");