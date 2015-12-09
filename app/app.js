angular
    .module('core', ['ui.router', 'ngMaterial', 'story', 'guestbook', 'users'])
        .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider', 
            function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider){

                // Router
                $urlRouterProvider
                    .when('users', '/users')
                    .when('story', '/story')
                    .when('guestbook', '/guestbook')
                    .when('home', '/')
                    .otherwise('/guestbook');    
                
                // States
                $stateProvider
                    .state('users', {
                        url: '/users',
                        templateUrl: './src/modules/users/views/user.html',
                        controller: 'UserController',
                        controllerAs: 'ul'
                    })
                    .state('story', {
                        url: '/story',
                        templateUrl: './src/modules/story/views/story.html',
                        controller: 'StoryController',
                        controllerAs: 'sc'
                    })
                    .state('guestbook', {
                        url: '/guestbook',
                        templateUrl: './src/modules/guestbook/views/guestbook.html',
                        controller: 'GuestbookController',
                        controllerAs: 'gc'
                    })
                    .state('home', {
                        url: '/',
                        templateUrl: './src/modules/core/views/home.html',                        
                    });

                $mdIconProvider
                    .defaultIconSet("./assets/svg/avatars.svg", 128)
                    .icon("menu"       , "./assets/svg/menu.svg"                                                                , 24)
                    .icon("share"      , "./assets/svg/share.svg"                                                               , 24)
                    .icon("add"        , "./bower_components/material-design-icons/content/svg/production/ic_add_24px.svg"      , 24)
                    .icon("event"      , "./bower_components/material-design-icons/action/svg/production/ic_event_24px.svg"     , 24)
                    .icon("create"      , "./bower_components/material-design-icons/content/svg/production/ic_create_24px.svg"  , 24)
                    .icon("google_plus", "./assets/svg/google_plus.svg"                                                         , 512)
                    .icon("hangouts"   , "./assets/svg/hangouts.svg"                                                            , 512)
                    .icon("twitter"    , "./assets/svg/twitter.svg"                                                             , 512)
                    .icon("phone"      , "./assets/svg/phone.svg"                                                               , 512);

                $mdThemingProvider
                    .definePalette("wedding-blue", $mdThemingProvider.extendPalette("blue", {
                        50:"#DCEFFF",
                        100:"#AAD1F9",
                        200:"#7BB8F5",
                        300:"#4C9EF1",
                        400:"#1C85ED",
                        500:"#106CC8",
                        600:"#0159A2",
                        700:"#025EE9",
                        800:"#014AB6",
                        900:"#013583",
                        contrastDefaultColor:"light",
                        contrastDarkColors:"50 100 200 A100",
                        contrastStrongLightColors:"300 400 A200 A400"
                    }))

                    .theme('default')
                        .primaryPalette('wedding-blue')
                        .accentPalette('yellow')
                        .warnPalette('red');

            }
        ]);