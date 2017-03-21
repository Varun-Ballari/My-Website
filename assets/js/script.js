function getProjects(arr) {
    var out = "";
    for(var i = 0; i < arr.length; i++) {
        if (i == 0) {
            out += '<div class="project_class" id='+ i +'>'
        } else {
            out += '<div class="project_class">'
        }
        var imgs = arr[i].proj_imgs;
        console.log(imgs[0]);
        out += `
                    <div class="project_image" title=` + arr[i].project_name + ` style="background-image: url(` + arr[i].pic_intro + `);">
                    </div>
                    <div class="project_info">
                        <h1 class="project_name">` + arr[i].project_name + `</h1>
                        <h2>` + arr[i].proj_details + `</h2>
                    </div>
                    <div class="project_links">`;

                    var out2 = "";
                    var imgs = arr[i].languages;
                    for(var j = 0; j < imgs.length; j++) {
                        out2 += `
                            <div class="language" style="background-image: url(` + imgs[j] + `)"></div>`;
                    }

                    out += out2 + `
                        <div class="like">
                            <div id="num_likes" class="heart">` + arr[i].likes + ` Likes</div>
                            <div id="like_symbol" class="heart">&#9825;</div>
                        </div>
                    </div>
                </div>`;
    }
    document.getElementById("projects").innerHTML = out;
}

function getCodeIcons(arr) {
    var out = "";
    for(var i = 0; i < arr.length; i++) {
        out += `<div class="codeIcon_class">
                    <div class="codeIcon_image" style="background-image: url(` + arr[i].pic + `)">
                    </div>
                    <div class="codeIcon_info">
                        <h1>` + arr[i].software + `</h1>
                    </div>
                </div>`;
    }
    document.getElementById("codeIcons").innerHTML = out;
}

getProjects(projects);
// getCodeIcons(codeIcons);


$('#comment').focus(function() {
    $(this).animate({ width: '+=200' }, 'slow');
}).blur(function() {
    $(this).animate({ width: '-=200' }, 'slow');
});

var array= [{"likes": 2}, {"likes" : 4}];

$("#like_symbol").click(function(){
    array[0].likes = 15;
    console.log("hi");
});


$(document).ready(function() {
    $(".project_name").click(function(event) {
        $("#uisa").show();
        $("#heading").show();
        $("#projects").hide();
        var arr = projects;
        var out = "";
        for(var i = 0; i < arr.length; i++) {
            if (arr[i].project_name == event.target.innerText) {
                out +=
                    `<div class="back"><button onclick="goBack()"></button></div>
                    <section id = "fullPage_APP">
                        <div id="iphonePage">
                            <div id="pic" class="col-sm-8">
                                <div class="header-image" style="background-image: url(` + arr[i].pic_page1 + `);"></div>
                            </div>

                            <div id="details" class="col-sm-4">
                                <div>
                                    <div id="appLogo" style="background-image: url(` + arr[i].proj_logo + `);"></div>
                                    <h1>` + arr[i].project_name + `</h1>
                                    <p>` + arr[i].proj_summary + `</p>
                                    <div class="button">View On App Store</div>
                                    <p class="disclaimer">` + arr[i].updated_date + `</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class = "texts">
                        <h2>` + arr[i].subtitle1 + `</h2>
                        <p>` + arr[i].proj_par1 + `</p>
                        <p>` + arr[i].proj_par2 + `</p>
                    </div>
                    <div id="app_Images">`;

                    var out2 = "";
                    var imgs = arr[i].proj_imgs;
                    console.log(imgs);
                    for(var j = 0; j < imgs.length; j++) {
                        console.log(imgs[j]);
                        out2 += `
                            <div class="app_Image" style="background-image: url(` + imgs[j] + `)"></div>`;
                    }

                    out += out2 + `
                        </div>
                        <div class = "texts">
                            <h2>` + arr[i].subtitle2 + `</h2>
                            <p>` + arr[i].proj_par3 + `</p>
                            <p>` + arr[i].proj_par4 + `</p>
                        </div>`;
            }
        }
        document.getElementById("uisa").innerHTML = out;
    });
});


$(window).on('resize', function(){

    if ($(document).width() < 990) {
        $(".name").hide();
        $(".li1").css("margin-left", "20px");
    } else {
        $(".name").show();
        $(".li1").css("margin-left", "50px");
    }
});


function goBack() {
    $("#uisa").hide();
    $("#heading").show();
    $("#projects").show();
}


$('.project_class').hover(function() {
    $(this).children('.project_links').css('-webkit-filter', 'grayscale(0%)');
    $(this).children('.project_links').css('filter', 'grayscale(0%)');
    $('.project_class').css('filter', 'blur(5px)');
    $(this).css('filter', 'blur(0px)');
  }, function() {
    // on mouseout, reset the background colour
    $(this).children('.project_links').css('-webkit-filter', 'grayscale(100%)');
    $(this).children('.project_links').css('filter', 'grayscale(100%)');
    $('.project_class').css('filter', 'blur(0px)');
    $(this).css('filter', 'blur(0px)');
  });
