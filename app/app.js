(function(){
  'use strict';

    angular
        .module('core', ['ui.router', 'ngMaterial', 'ngCountdownRibbon', 'home', 'story', 'wedding', 'registry', 'guestbook'])
        .controller('CoreController', [
            '$scope',
            'ngCountdownRibbon',
            CoreController
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider', 
            function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider){
                
                // Router
                $urlRouterProvider
                    .when('#/home', 'home')
                    .when('#/story', 'story')
                    .when('#/wedding', 'wedding')
                    .when('#/registry', 'registry')
                    .when('#/guestbook', 'guestbook')
                    .when('#/hashtag', 'hashtag')
                    .otherwise('/');    
                
                // States
                $stateProvider
                    .state('home', {
                        url: '/',
                        data: {
                            'selectedTab' : 0
                        },
                        templateUrl: './src/modules/home/views/home.html',
                        controller: 'HomeController',
                        controllerAs: 'hc'                        
                    })
                    .state('story', {
                        url: '/story',
                        data: {
                            'selectedTab' : 1
                        },
                        templateUrl: './src/modules/story/views/story.html',
                        controller: 'StoryController',
                        controllerAs: 'sc'
                    })
                    .state('wedding', {
                        url: '/wedding',
                        data: {
                            'selectedTab' : 2
                        },
                        templateUrl: './src/modules/wedding/views/wedding.html',
                        controller: 'WeddingController',
                        controllerAs: 'wc'
                    })
                    .state('registry', {
                        url: '/registry',
                        data: {
                            'selectedTab' : 3
                        },
                        templateUrl: './src/modules/registry/views/registry.html',
                        controller: 'RegistryController',
                        controllerAs: 'rc'
                    })
                    .state('guestbook', {
                        url: '/guestbook',
                        data: {
                            'selectedTab' : 4
                        },
                        templateUrl: './src/modules/guestbook/views/guestbook.html',
                        controller: 'GuestbookController',
                        controllerAs: 'gc'
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

        /**
        * Core Controller
        * @constructor
        */
        function CoreController($scope, ngCountdownRibbon) {
    
            // Initialize header and nav tabs
            var mainHeader = 'Lauren & Scott ❤ May 7, 2016',
                navTabs = [
                    {
                        id: 'home',
                        uisref: 'home',
                        label: 'Home',
                    },
                    {
                        id: 'story',
                        uisref: 'story',
                        label: 'Story',
                    },
                    {
                        id: 'wedding',
                        uisref: 'wedding',
                        label: 'Wedding',
                    },
                    {
                        id: 'registry',
                        uisref: 'registry',
                        label: 'Registry',
                    },
                    {
                        id: 'guestbook',
                        uisref: 'guestbook',
                        label: 'Guestbook',
                    },
                    {
                        id: 'hashtag',
                        uisref: 'hashtag',
                        label: 'Hashtag',
                    },
                ];

            // Initialize countdown ribbon
            var WEDDING_DAY = '2016-05-07',
                RIBBON_POSITION = 'right',
                RIBBON_YELLOW_THEME = 'yellow',
                RIBBON_YELLOW_CLASS = 'ribbon_yellow',
                RIBBON_HIDDEN_THEME = 'hidden',
                RIBBON_HIDDEN_CLASS = 'ribbon_hidden',
                todaysDate = new Date(),
                weddingDateUTC = new Date(WEDDING_DAY),
                weddingDate = new Date(weddingDateUTC.getTime() + weddingDateUTC.getTimezoneOffset()*60000),
                ribbonTheme;

            ngCountdownRibbon.addTheme(RIBBON_YELLOW_THEME,RIBBON_YELLOW_CLASS);
            ngCountdownRibbon.addTheme(RIBBON_HIDDEN_THEME,RIBBON_HIDDEN_CLASS);
            
            if (weddingDate > todaysDate){
              ribbonTheme = RIBBON_YELLOW_THEME;      
            }
            else {
              ribbonTheme = RIBBON_HIDDEN_THEME; 
            }

            ngCountdownRibbon.set(WEDDING_DAY, '', {position:RIBBON_POSITION,theme:ribbonTheme});

            var self = this;
                self.mainHeader = mainHeader,
                self.navTabs = navTabs;

            // Set current tab when state changes to handle page refreshes/reloads
            $scope.$on('$stateChangeSuccess', function(event, toState) {
                self.currentTab = toState.data.selectedTab;
            });
        }

})();