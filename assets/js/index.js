(async function()
		{
			// var response = await fetch("http://www.json-generator.com/api/json/get/cgfqjYBIzm?indent=2");

			// let source  = await response.json()

			let source = 
			{
				"facilities": 
				{
					"content": 
					[
						{
						"image": "https://picsum.photos/400/200", 
						"description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled par", 
						"title": "Lorem"
						}, 
						{
						"image": "https://picsum.photos/400/200", 
						"description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled par", 
						"title": "Lorem"
						}, 
						{
						"image": "https://picsum.photos/400/200", 
						"description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled par", 
						"title": "Lorem"
						}, 
						{
						"image": "https://picsum.photos/400/200", 
						"description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled par", 
						"title": "Lorem"
						}, 
						{
						"image": "https://picsum.photos/400/200", 
						"description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled par", 
						"title": "Lorem"
						}, 
						{
						"image": "https://picsum.photos/400/200", 
						"description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled par", 
						"title": "Lorem"
						}, 
						{
						"image": "https://picsum.photos/400/200", 
						"description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled par", 
						"title": "Lorem"
						}, 
						{
						"image": "https://picsum.photos/400/200", 
						"description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled par", 
						"title": "Lorem"
						}
					], 
					"cardWidth": 400
				},
				"corousel": 
				{
					"content":
					[
						{
							"url": "https://picsum.photos/1300/600"
						},
						{
							"url": "https://picsum.photos/1300/600"
						},
						{
							"url": "https://picsum.photos/1300/600"
						}
					]
				}
				
				
			}

			// front corousel
			if (source.hasOwnProperty("corousel"))
			{
				$("#carousel").show();
				let index = 0;
				for(let carouselItem of source.corousel.content)
				{
					$("#carousel").find(".carousel-indicators").append
					(
						`<li data-target="#demo" data-slide-to="${index}" ${index == 0 &&"class='active'"}></li>`
					);

					$("#carousel").find(".carousel-inner").append
					(
						`<div class="carousel-item ${index == 0 && "active"}">
							<img class="carrouselImg" src="${carouselItem.url}" alt="Los Angeles">
						</div>`
					)

					index++;
				}
			}

			//facilites
			if (source.hasOwnProperty("facilities"))
			{
				$("#facilities").show();
				$facilities = $("#facilities").find("#facilitiesContent");

				for(let facility of source.facilities.content)
				{
					$facilities.append
					(
						`
						<div class="card grid-item" style="width:${source.cardWidth}px;">
							<div class="facilityBackground" style="background-image: url(${facility.image});"></div>
							<div class="card-body" style="z-index: 99;">
								<h5 class="card-title text-white font-weight-bold" style="font-size: 50px;font-weight: bold;">${facility.title}</h5>
								<p class="card-text text-white">${facility.description}</p>
							</div>
						</div>
						`
					);
				}
			}
		})();