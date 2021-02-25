var h1Variable = $("MyPar");
        $("#MyPar").css("color", "blue");
        var span = $("<span></span>").text("Hello Man");
        h1Variable.append(span);

        var sectionElements = $(".SectionClass");
        for (var index = 0; index < sectionElements.length; index++) {
            $(sectionElements[index]).css = ("color", 'purple');
        }
       
        $("<button></button>").attr("id", "MyButton")
            .text("Click Me").appendTo("#MainContainerDiv");
