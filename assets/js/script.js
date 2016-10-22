function getProjects(arr) {
    var out = "";
    for(var i = 0; i < arr.length; i++) {
        if (i == 0) {
            out += '<div class="project_class" id="first">'
        } else {
            out += '<div class="project_class">'
        }
        out += `
                    <div class="project_image" <!--style="background-image: url(` + arr[i].pic + `)"--> >
                        <h1>1</h1>
                    </div>
                    <div class="project_info">
                        <h1>` + arr[i].projName + `</h1>
                        <h2>` + arr[i].projDetails + `</h2>
                    </div>
                    <div class="project_links">
                        <div class="github">
                            <h1>link</h1>
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
getCodeIcons(codeIcons);
