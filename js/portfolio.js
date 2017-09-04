var app = angular.module("portfolio", ["ngRoute"]);

app.controller('SocialController', function($scope) {

  $scope.socials = [
                    { Link: "https://www.linkedin.com/in/berkekiran/", Image: 'images/social/linkedin-logo.svg' },
                    { Link: "https://github.com/berkekiran", Image: 'images/social/github-logo.svg' },
                    { Link: "https://www.artstation.com/artist/berkekiran", Image: 'images/social/artstation-logo.svg' },
                    { Link: "https://www.behance.net/berkekiran", Image: 'images/social/behance-logo.svg' },
                    { Link: "https://vimeo.com/berkekiran", Image: 'images/social/vimeo-logo.svg' },
                    { Link: "https://soundcloud.com/berkekiran", Image: 'images/social/soundcloud-logo.svg' },
                    { Link: "https://www.instagram.com/berkekiran.official/", Image: 'images/social/instagram-logo.svg' },
                    { Link: "https://www.facebook.com/xBerkeKiranx", Image: 'images/social/facebook-logo.svg' }
                   ];

});

app.controller('CharacterController', function($scope) {

  var vm = this;
  vm.character = characters;
  vm.limit = 3;

  $scope.loadMore = function() {
   var increamented = vm.limit + 3;
   vm.limit = increamented > vm.character.length ? vm.character.length : increamented;

   if(increamented >= vm.character.length){
     $('.load-more').css("opacity","0");
     $('.load-more').css("cursor","default");
     $('.load-more').css("margin-top","-5vh");
   }

 };

});

var characters = [
                  { ProjectName: "Orc Leader", Category: "3D Character", Year: "2017", Link: "https://www.artstation.com/artwork/2V4Lx", Image: {"background" : "linear-gradient(transparent 50%, #161616), url('https://cdna.artstation.com/p/assets/images/images/006/823/800/large/berke-kiran-screenshot006.jpg?1501534299')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                  { ProjectName: "Sleeping Creature", Category: "3D Creature", Year: "2016", Link: "https://www.artstation.com/artwork/vdwLA", Image: {"background" : "linear-gradient(transparent 50%, #161616), url('https://cdna.artstation.com/p/assets/images/images/006/823/646/large/berke-kiran-sleeping-creature.jpg?1501533327')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                  { ProjectName: "The God", Category: "Digital Artwork", Year: "2016", Link: "https://www.artstation.com/artwork/Nm8g5", Image: {"background" : "linear-gradient(transparent 50%, #161616), url('https://cdna.artstation.com/p/assets/images/images/006/805/672/large/berke-kiran-thegod.jpg?1501398937')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                  { ProjectName: "John", Category: "3D Character", Year: "2016", Link: "https://www.artstation.com/artwork/4Vd4k", Image: {"background" : "linear-gradient(transparent 50%, #161616), url('https://cdnb.artstation.com/p/assets/images/images/006/842/405/large/berke-kiran-john-render-1.jpg?1501662674')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} }
                 ];

app.controller('OtherController', function($scope) {

  var vm = this;
  vm.otherWork = otherWorks;
  vm.limit = 6;

  $scope.loadMore = function() {
   var increamented = vm.limit + 3;
   vm.limit = increamented > vm.otherWork.length ? vm.otherWork.length : increamented;

   if(increamented >= vm.otherWork.length){
     $('.load-more-o').css("opacity","0");
     $('.load-more-o').css("cursor","default");
     $('.load-more-o').css("margin-top","-5vh");
   }

 };

});

var otherWorks = [
                { Color: '#161616 ', Category: "Sketchbook", Link: 'https://www.artstation.com/artwork/0gXRK', ProjectName: "Berke Kiran' Sketchbook", Year: '2017', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/sketchbook.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
  	            { Color: '#161616 ', Category: "Website ", Link: 'https://github.com/berkekiran/portfolio-2017', ProjectName: 'Portfolio 2017', Year: '2017', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/portfolio-2017.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#303030 ', Category: "Website", Link: 'https://www.behance.net/gallery/55791649/Portfolio-2016-v2', ProjectName: 'Portfolio 2016 v2', Year: '2016', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/portfolio-2016-v2.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#a8933a ', Category: "Website", Link: 'https://www.behance.net/gallery/55790661/Video-Games-Center-Station', ProjectName: 'Video Games Center Station', Year: '2016', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/video-games-center-station.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#303030 ', Category: "Website", Link: 'https://www.behance.net/gallery/55771277/Portfolio-2016', ProjectName: 'Portfolio 2016', Year: '2016', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/portfolio-2016.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#303030 ', Category: "Website", Link: 'https://www.behance.net/gallery/55754747/Portfolio-2015-v5', ProjectName: 'Portfolio 2015 v5', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/portfolio-2015-v5.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#cccccc ', Category: "UE4 Project", Link: 'https://www.artstation.com/artwork/ONdgg', ProjectName: 'UE4 Snowy Road', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/snowyroad.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#cccccc ', Category: "UE4 Project", Link: 'https://github.com/berkekiran/ue4-snow-system-v2', ProjectName: 'UE4 Snow System v2', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/ue4-snow-system-v2.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#cccccc ', Category: "UE4 Project", Link: 'https://github.com/berkekiran/ue4-snow-system-v1', ProjectName: 'UE4 Snow System v1', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/ue4-snow-system-v1.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#1D1F1E ', Category: "Website", Link: 'https://www.behance.net/gallery/55752371/Portfolio-2015-v4', ProjectName: 'Portfolio 2015 v4', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/portfolio-2015-v4.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#161616 ', Category: "Website", Link: 'https://www.behance.net/gallery/55748605/Portfolio-2015-v3-Design', ProjectName: 'Portfolio 2015 v3 Design', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/portfolio-2015-v3-design.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#cccccc ', Category: "Website", Link: 'https://www.behance.net/gallery/55747869/Portfolio-2015-v2-Design', ProjectName: 'Portfolio 2015 v2 Design', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/portfolio-2015-v2-design.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#f8f8f8 ', Category: "Soundtrack", Link: 'https://soundcloud.com/berkekiran/berkekiran-truth', ProjectName: 'Berke Kiran - Truth', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/berkekiran-truth.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#f8f8f8 ', Category: "Soundtrack", Link: 'https://soundcloud.com/berkekiran/berkekiran-death', ProjectName: 'Berke Kiran - Death', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/berkekiran-death.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#f8f8f8 ', Category: "Soundtrack", Link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v3', ProjectName: 'Adam Noise - Soundtrack v3', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/adam-noise-soundtrack-v3.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#f8f8f8 ', Category: "Soundtrack", Link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v2', ProjectName: 'Adam Noise - Soundtrack v2', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/adam-noise-soundtrack-v2.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#f8f8f8 ', Category: "Soundtrack", Link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v1', ProjectName: 'Adam Noise - Soundtrack v1', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/adam-noise-soundtrack-v1.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#f8f8f8 ', Category: "Video", Link: 'https://vimeo.com/226496501', ProjectName: 'Metal Dragon - Video', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/metal-dragon.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#f8f8f8 ', Category: "Website", Link: 'https://www.behance.net/gallery/55742749/Portfolio-2015', ProjectName: 'Portfolio 2015', Year: '2015', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/portfolio-2015.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#a7aaa9 ', Category: "Website", Link: 'https://www.behance.net/gallery/55738571/Photo-Galleries', ProjectName: 'Photo Galleries', Year: '2014', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/photo-galleries.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} },
                { Color: '#444349 ', Category: "Silverlight Project", Link: 'https://www.behance.net/gallery/55736987/Quick-Write', ProjectName: 'Quick Write', Year: '2013', Image: {"background" : "linear-gradient(transparent 50%, #161616), url('images/other-projects/quick-write.png')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat"} }
             ];
