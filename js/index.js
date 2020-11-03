window.addEventListener('load', function() {
    var input = document.querySelector('input');
    var ul = document.querySelector('ul');
    var span = document.querySelector('span');




    localmes();
    much();





    var lis = ul.querySelectorAll('li');
    // console.log(lis);
    input.addEventListener('keyup', function(e) {

        // console.log(e.keyCode);


        if (e.keyCode === 13) {
            var li = document.createElement('li');
            if (input.value == '') {
                alert('您输入的为空，请输入内容！');
                return;
            } else {
                var local = getData();
                local.push(input.value);
                saveData(local);
                // console.log(ul.children.length);

                localmes();
                input.value = '';
            }
            much();


        }
    })



    // 遍历数据
    function localmes() {

        while (ul.hasChildNodes()) {
            ul.removeChild(ul.firstChild);
        }
        var data = getData();
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i])

            var li = document.createElement('li');
            var time = new Date();
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var day = time.getDate();
            var nowtime = year + '年' + month + '月' + day + '日';


            li.innerHTML = data[i] + '<a href="script:;">x</a>' + '<span>' + nowtime + '</span>';
            li.setAttribute('index', i);
            li.addEventListener('mouseenter', function() {
                this.style.animation = 'rotate1 2s linear';
            });
            li.addEventListener('mouseleave', function() {
                this.style.animation = 'rotate 2s linear';
            });
            ul.insertBefore(li, ul.children[0]);


        }




        var ass = ul.querySelectorAll('a');
        for (var i = 0; i < ass.length; i++) {
            // console.log(i);
            ass[i].addEventListener('click', function() {
                var data = getData();
                data.splice(this.parentNode.getAttribute('index'), 1);
                saveData(data);
                localmes();
                much();
            });
        }

    }



    // 总共：


    function much() {
        var many = 0;
        var data = getData()
        for (var i = 0; i < data.length; i++) {
            var arr = data[i].split('：');
            num = parseFloat(arr[1]);
            many += num

            // console.log(parseInt(num[1]))
        }
        span.innerHTML = many;
    }


    function getData() {
        var local = localStorage.getItem('rember');
        if (local !== null) {
            return JSON.parse(local);
        } else {
            return [];
        }
    }

    function saveData(data) {
        var data = JSON.stringify(data);
        localStorage.setItem('rember', data);

    }
});