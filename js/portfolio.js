var app = angular.module("portfolio", []);

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

app.controller('CharacterController', function($scope,$timeout) {

  var vm = this;
  vm.character = characters;
  vm.limit = 3;

  $scope.loadMore = function() {
  var increamented = vm.limit + 3;
  vm.limit = increamented > vm.character.length ? vm.character.length : increamented;

  for(var j = 3;j<vm.limit;j++) {
    $('.other-work').eq(j).velocity({ opacity: 1 }, 600);
    console.log(j);
  }

  if(vm.limit+1 >= vm.character.length){
    $('.load-more').css("opacity","0");
    $('.load-more').css("cursor","default");
    $('.load-more').css("margin-top","-5vh");
  }

 };

});


app.controller('OtherController', function($scope,$timeout) {

  var vm = this;
  vm.otherWork = otherWorks;
  vm.limit = 6;

  $scope.loadMore = function() {
    var increamented = vm.limit + 3;
    vm.limit = increamented > vm.otherWork.length ? vm.otherWork.length : increamented;

    for(var i = 5;i<vm.limit;i+=3) {
      $('.other-work').eq(i).velocity({ opacity: 1 }, i*80);
      $('.other-work').eq(i+1).velocity({ opacity: 1 }, (i-1)*80);
      $('.other-work').eq(i+2).velocity({ opacity: 1 }, (i-2)*80);
      console.log(i);
    }

    if(vm.limit+3 >= vm.otherWork.length){
      $('.load-more-o').css("opacity","0");
      $('.load-more-o').css("cursor","default");
      $('.load-more-o').css("margin-top","-5vh");
    }

 };

});
