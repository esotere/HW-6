$(function() {

	//				===>For later use to practice firebase<===
	//
	//		
	//	var config = {
	//		      apiKey: "3JYPTNJUI6zPXnReskXKT6AU5yLWok0d",
	//		      authDomain: "test-project-c94fe.firebaseapp.com",
	//		      databaseURL: "https://test-project-c94fe.firebaseio.com",
	//		      projectId: "test-project-c94fe",
	//		      storageBucket: "test-project-c94fe.appspot.com",
	//		      messagingSenderId: "244604166778"
	//		    };
	//		    
	//	 firebase.initializeApp(config);
	//
	//
	//		// Create a variable to reference the database
	//		var database = firebase.database();
	//
	//		
	//		// Capture Button Click
	//	    $("#button").on("click", function(event) {
	//	    	console.log("button clicked");
	//	      // Don't refresh the page!
	//	      event.preventDefault();
	//
	//	      // YOUR TASK!!!
	//	      var categories = $("#topic-div");
	//	      
	//	      
	//	      // Logic for storing and retrieving the most recent user.
	//	      database.ref().push({	          
	//	        topics: topics	      
	//
	//	      })
	//	      
	//	      
	//	      //clearing fields
	//	      
	//	      $("#topic-input").val("");
	//	     
	//	    
	//	      database.ref().on("child_added", function(childSnapshot, prevChildKey) {
	//
	//	    	  console.log(childSnapshot.val());
	//
	//	    	  // Store everything into a variable.
	//	    	  var myCat = childSnapshot.val().topics;
	//	    	  
	//
	//	    	  // category Info
	//	    	  console.log(myCat);
	//	    	  
	//	    
	//	    });
	//	      
	//	
	//	    });
	console.log("*******************************************************")


	//	    var button_1  = $("#button1").append()
	//	    var button_2  = $("#button2").append()
	//	    var button_3  = $("#button3").append()
	//	    var button_4  = $("#button4").append()
	//	    var button_5  = $("#button5").append()
	//	    var button_6  = $("#button6").append()
	//	    var button_7  = $("#button7").append()
	//	    var button_8  = $("#button8").append()
	//	    var button_9  = $("#button9").append()
	//	    var button_10 = $("#button10").append()
	//	    
	//	    
	//	    var buttons = {
	//	    	 button_1  : $("#button1"),
	//		     button_2  : $("#button2"),
	//		     button_3  : $("#button3"),
	//		     button_4  : $("#button4"),
	//		     button_5  : $("#button5"),
	//		     button_6  : $("#button6"),
	//		     button_7  : $("#button7"),
	//		     button_8  : $("#button8"),
	//		     button_9  : $("#button9"),
	//		     button_10 : $("#button10")
	//	    };




	var topics = [

		"space",
		"wildLife",
		"reggaeArtists",
		"singleMaltScotch",
		"cartoons",
		"guns",
		"flowers",
		"artists",
		"gameTheory",
		"scientists",
		"cars",
		"superCars"

	];
	
	var btnPop = function() {
		for (var y=0; y<topics.length; y++) {
		var btn = $("<button id='button' class='btn btn-default' id='' type='submit'>"+ topics[topics.length - 1] +"</button>");
		}
	}


	var createButton = function(data) {
//		// Get reference to existing div element, create a new button element, and append button
//			var btn = $("<button id='button' class='btn btn-default' id='' type='submit'>"+ topics[i] +"</button>");
//			var searchButton = $("#buttons").append(btn);
			
			
			
		for (var i = 0; i < topics.length; i++) {
		// Get reference to existing div element, create a new button element, and append button
			var btn = $("<button id='button' class='btn btn-default' id='' type='submit'>"+ topics[i] +"</button>");
			var searchButton = $("#buttons").append(btn);
//			var categories = [];
//			categories.push(topics[topics.length - 1]);			
			//searchButton;
			//btn.indexOf(topics[i]) < 0? searchButton: searchButton = btn.indexOf(topics[i]) 
			//var addTopic = topics.push("<button type='submit' name='action' value = " + topics[i] + ">" + topics[i] + "</button>");
			console.log();
			

		}
	}
	function searchTopic() {
		var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=3JYPTNJUI6zPXnReskXKT6AU5yLWok0d";

		$.ajax({
			url : queryURL,
			method : 'GET',
			success: function(data) {
		    $("#topic-div").html("<img src='data.data.image_original_url;" + data + "' />"); 
		    console.log(data);
		    	},
		}).then(function(response) {
			// Printing the entire object to console
			console.log(response);

			// Constructing HTML containing the topics information
			var topic = $("<h1>").text(response.topic);
			var topicURL = $("<a>").attr("href", response.url).append(topic);

			// Creating and storing an image tag
			var topicImages = $("<img>").attr("src", response.thumb_url);
			var trackerCount = $("<h2>").text(response.tracker_count + " people interested");

			// Empty the contents of the topic-div, append the new topic content
			$("#images").empty();
			$("#images").append(topicURL, topicImages, trackerCount);



			// Saving the image_original_url property
			var imageUrl = response.data.image_original_url;
			



			// Setting the topicImage src attribute to imageUrl
			topicImages.attr("src", imageUrl);
			topicImages.attr("alt", "relevant image");

			// Prepending the Image to the images div
			$("#images").prepend(topicImages);
		});

	}



	// Event handler for user clicking the select-topic button
	$("#button").on("click", function(event) {
		// Preventing the button from trying to submit the form
		event.preventDefault();
		// Storing the input
		var inputTopic = $("#topic-input").val().trim();
		topics.push(inputTopic);
		//$("#buttons").append();
		createButton(topics);
		
		console.log(topics);
		console.log(topics.length);

		// Running the searchTopic function (passing in the topic as an argument)
		searchTopic(inputTopic);
		inputTopic = $("#topic-input").val("");

	});
	
	// Event handler for user clicking the buttons populated
		$("#buttons").on("click", function(event) {
			// Preventing the button from trying to submit the form
			event.preventDefault();
			// Storing the input
			//var gifImages = $("#images").append();
			searchTopic();
			
			

		});


});