jQuery(document).ready(function($) {
    var cats = new Array(5);
    cats[0] = {
        src: "https://pixnio.com/free-images/2017/12/21/2017-12-21-13-38-50-1200x800.jpg",
        catClicks: 0
    };
    cats[1] = {
        src: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
        catClicks: 0
    };
    cats[2] = {
        src: "https://c1.staticflickr.com/6/5589/14818641818_b0058c0cfc.jpg",
        catClicks: 0
    };
    cats[3] = {
        src: "https://pixnio.com/free-images/2017/12/21/2017-12-21-13-37-31-1200x800.jpg",
        catClicks: 0
    };
    cats[4] = {
        src: "https://pixnio.com/free-images/2017/09/26/2017-09-26-07-57-28-1100x666.jpg",
        catClicks: 0
    };
    // Let's loop over the numbers in our array
    for (var i = 0; i < cats.length; i++) {
        // This is the number we're on...
        //var num = nums[i];
        // We're creating a DOM element for the number
        //var elem = document.createElement('div');
        //elem.textContent = num;
        //var catItem = $("div#cat-item" + (i + 1));
        var image = document.createElement("IMG");
        image.alt = "Alt information for image";
        image.setAttribute('class', 'cat' + (i + 1));
        image.src = cats[i].src;
        $("div#cat-item" + (i + 1)).html(image);
        // ... and when we click, alert the value of `num`
        // image.addEventListener('click', (function(numCopy) {
        //     return function() {
        //         alert(numCopy);
        //     };
        // })(num));
        image.addEventListener('click', (function(imageCopy,i,cats) {
            return function() {
                //alert(numCopy);
                $("div#cat-name").html("Cat name: Cat" + (i + 1));
                $("div#cat-img").html($("div#cat-item" + (i + 1) + " img").clone());
                $("div#click-count").html("Click count = " + cats[i].catClicks);
            };
        })(image,i,cats));
        //document.body.appendChild(elem);
        var catImage = document.querySelector("#cat-img");

        catImage.addEventListener('click', (function(i,cats) {
                return function() {
                    cats[i].catClicks++;
                }
        })(i,cats));
    };
});