const locations = {
    //List of all the possible locations
    wakanda: {
        answers: ['C', 'C', 'B', 'A', 'B', 'B', 'A'],
        right: 0
    }, 
    northKorea: {
        answers: ['A','B','B','C','A','A','B'],
        right: 0
    },
    home: {
        answers: ['B','A', 'A','B','C','A','C'],
        right: 0
    },
    dubai: {
        answers: ['A','C','C','A','B','A','C'],
        right: 0
    },
    mars: {
        answers: ['A','C','C','B','A','B','B'],
        right: 0
    },
    kingPen: {
        answers: ['C','A','B','c','A','C','B'],
        right: 0
    }
};

const locationObj = {
    wakanda:0,
    northKorea:0,
    home:0,
    dubai:0,
    mars:0,
    kingPen:0
};

let className = "";

$(function() {
    // $('body').on('click', '.next', function(){
    //       $('section').next('.question.hidden').first().removeClass('hidden');
    //     //   $(this).hide();
    
    //     });

    // $('body').on('click', '.randomButton', function(e){
    //       e.preventDefault();
    //       $('section').next('.question, .result').addClass('hidden');
    //     $('.next').show();
    //   });
    
    //   $('.randomButton').on('click', '.result', function(e){
    //         e.preventDefault();
    //         $(this).addClass('hidden');
    //       });
    
    $('.submit').on('click', function(){
        const passport = $('input[name=passport]:checked').val();
        const budget = $('input[name=budget]:checked').val();
        const safety = $('input[name=safety]:checked').val();
        const song = $('input[name=song]:checked').val();
        const food = $('input[name=food]:checked').val();
        const fitness = $('input[name=fitness]:checked').val();
        const add = $('input[name=add]:checked').val();

        const answerList = [passport, budget, safety, song, food, fitness, add]
            
        
        
        //Function records how many answers are right
        const getRightAnswers = (answerList, locationAnswers, answerCount) => {
            for (let i = 0; i < answerList.length; i++) {
                if (answerList[i] === locationAnswers[i]) {
                    answerCount++;
                }
            };
            return answerCount;
        }

        wakanda = getRightAnswers(answerList, locations.wakanda.answers, locations.wakanda.right);
        locationObj.wakanda = wakanda;
        northKorea = getRightAnswers(answerList, locations.northKorea.answers, locations.northKorea.right);
        locationObj.northKorea = northKorea;
        home = getRightAnswers(answerList, locations.home.answers, locations.home.right);
        locationObj.home = home;
        dubai = getRightAnswers(answerList, locations.dubai.answers, locations.dubai.right);
        locationObj.dubai = dubai;
        mars = getRightAnswers(answerList, locations.mars.answers, locations.mars.right);
        locationObj.mars = mars;
        kingPen = getRightAnswers(answerList, locations.kingPen.answers, locations.kingPen.right);
        locationObj.kingPen = kingPen;



        // console.log(wakanda, northKorea, home, dubai, mars, kingPen)

        console.log(locationObj)


        //finds city with the most answers correct, and if equal, chooses randomly
        const findMax = (obj) => {
            let keys = Object.keys(obj);
            let max = keys[0];
            for (let i = 1, n = keys.length; i < n; ++i) {
                const k = keys[i];
                if (obj[k] > obj[max]) {
                    max = k;
                }
                else if (obj[k] === obj[max]) {
                    const num = Math.floor((Math.random() * 2) + 1);
                    if (num === 1) {
                        max = k;
                    }
                }
            } 
            return max
        };


        bestCity = findMax(locationObj);

        console.log(bestCity);

        if (bestCity === "wakanda") {
            className = ".wakanda";
        }
        else if (bestCity === "northKorea") {
            className = ".northKorea";
        }
        else if (bestCity === "home") {
            className = ".home";
        }
        else if (bestCity === "dubai") {
            className = ".dubai";
        }
        else if (bestCity === "mars") {
            className = ".mars";
        }
        else if (bestCity === "kingPen") {
            className = ".kingPen";
        }


        console.log(className)
        

        if (passport === undefined || budget === undefined || safety === undefined || song === undefined || food === undefined || fitness === undefined || add === undefined) {
            $('.incomplete').removeClass('hidden');
            if (passport === undefined) {
                $('.question1 .wrapper').addClass('unanswered');
            }
            else {
                $('.question1 .wrapper').removeClass('unanswered')
            }
            if (budget === undefined) {
                $('.question2 .wrapper').addClass('unanswered');
            }
            else {
                $('.question2 .wrapper').removeClass('unanswered')
            }
            if (safety === undefined) {
                $('.question3 .wrapper').addClass('unanswered');
            }
            else {
                $('.question3 .wrapper').removeClass('unanswered')
            } if (song === undefined) {
                $('.question4 .wrapper').addClass('unanswered');
            }
            else {
                $('.question4 .wrapper').removeClass('unanswered')
            } if (food === undefined) {
                $('.question5 .wrapper').addClass('unanswered');
            }
            else {
                $('.question5 .wrapper').removeClass('unanswered')
            } if (fitness === undefined) {
                $('.question6 .wrapper').addClass('unanswered');
            }
            else {
                $('.question6 .wrapper').removeClass('unanswered')
            } if (add === undefined) {
                $('.question7 .wrapper').addClass('unanswered');
                $('.incomplete').addClass('hiddenBlack');
                
            }
            else {
                $('.question7 .wrapper').removeClass('unanswered')
                $('.incomplete').removeClass('hiddenWhite');
                $('.incomplete').addClass('hiddenRed');

            }
        }
        else {
            $(className).toggleClass("visible");
            $('.incomplete').addClass('hidden');
            $('form, header').addClass('hidden')
        }

        
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

        $('.reload').on('click', function(e){
              e.preventDefault();
              location.reload();
            });



});//End of Document Ready


