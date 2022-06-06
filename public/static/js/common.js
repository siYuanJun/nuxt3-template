/*@cc_on document.write('\x3Cscript id="_iealwn_js" src="https://support.dmeng.net/ie-alert-warning/latest.js">\x3C/script>'); @*/

$(function () {
    var ie = IEVersion()
    // console.log('浏览器版本', ie)
    if (ie < 12) {
        // window.location = "/browser.html"
        window.location = 'https://support.dmeng.net/upgrade-your-browser.html'
    }

    chktop()
    $(window).scroll(function () {
        chktop()
    })

    setTimeout(function () {
        $('.content img').css({ 'max-width': '100%', width: '', height: '' })
        $('.content table').css({ 'max-width': '100%', width: '', height: '' })
    }, 400)
})

function chktop() {
    var toph = $(document).scrollTop()
    if (toph >= 10) {
        $('#top').addClass('cur')
    } else {
        $('#top').removeClass('cur')
    }
}

function IEVersion() {
    var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
    if (isIE) {
        var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
        reIE.test(userAgent)
        var fIEVersion = parseFloat(RegExp['$1'])
        if (fIEVersion === 7) {
            return 7
        } else if (fIEVersion === 8) {
            return 8
        } else if (fIEVersion === 9) {
            return 9
        } else if (fIEVersion === 10) {
            return 10
        } else {
            return 6 //IE版本<=7
        }
    } else if (isEdge) {
        return 'edge' //edge
    } else if (isIE11) {
        return 11 //IE11
    } else {
        return 99 //不是ie浏览器
    }
}
