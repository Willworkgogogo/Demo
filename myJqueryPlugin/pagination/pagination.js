/**
 * Willwang 2017-04-07
 */ 
$.fn.extend({
    initPage: function(listCount, currentPage, fun) {
        var maxshowpageitem = $(this).attr("maxshowpageitem");

        if (maxshowpageitem != null && maxshowpageitem > 0 && maxshowpageitem != "") {
            page.maxshowpageitem = maxshowpageitem;
        }

        var pagelistcount = $(this).attr("pagelistcount");

        if (pagelistcount != null && pagelistcount > 0 && pagelistcount != "") {
            page.pagelistcount = pagelistcount;
        }

        // pageId: 分页组件id; listCount: ?; currentPage: 当前页
        var pageId = $(this).attr("id");
        page.pageId = pageId;
        if (listCount < 0) {
            listCount = 0;
        }
        if (currentPage <= 0) {
            currentPage = 1;
        }

        page.setPageListCount(listCount, currentPage, fun)
    }
});

var page = {
    pageId: "",
    maxshowpageitem: 5, // 最多显示的页码个数
    pagelistcount: 10, // 每一页显示的内容条数
    /**
     * initWithUl 初始化分页界面
     * @param listCount 列表总量
     */ 
    initWithUl: function(listCount, currentPage) {
        // pageCount : 页数
        var pageCount = Math.ceil(listCount/page.pagelistcount)// 没有内容就没有分页
        var appendStr = page.getPageListModel(pageCount, currentPage);
        $("#" + page.pageId).html(appendStr)
    },
    /**
     * setPageListCount 设置列表总量 和 当前页码
     * @param currentPage 当前页码
     * @param listCount 列表总量
     */ 
    setPageListCount: function(listCount, currentPage, fun) {
        var listCount = parseInt(listCount),
            currentPage = parseInt(currentPage);
        
        page.initWithUl(listCount, currentPage);
        page.initPageEvent(listCount, fun);
        fun(currentPage);
    },
    /**
     * initPageEvent 
     */ 
    initPageEvent: function(listCount, fun) {
        $("#" + page.pageId + " .pageItem").on('click', function() {
            page.setPageListCount(listCount, $(this).attr("page-data"), fun);
        })
    },
    // getPageListModel
    getPageListModel: function(pageCount, currentPage) {
        var prePage = currentPage - 1, // 上一页
            nextPage = currentPage + 1, // 下一页
            prePageClass = 'pageItem',
            nextPageClass = 'pageItem';
        
        if (prePage <= 0) {
            prePageClass = "pageItemDisabled";
        }
        if (nextPage > pageCount) {
            nextPageClass = "pageItemDisabled";
        }

        var appendStr = "";
        appendStr += "<li class='"+ prePageClass +"' page-data='1' page-rel='firstpage'>首页</li>";
        appendStr += "<li class='"+ prePageClass +"' page-data='"+ prePage +"' page-rel='prepage'>&lt;上一页</li>";

        var miniPageNumber = 1; // 显示的页码第一位
        var average = parseInt(page.maxshowpageitem/2); 
        if (currentPage - average > 0 && currentPage + average <= pageCount) {
            miniPageNumber = currentPage - average;
        } else if (currentPage - average > 0 && currentPage + average > pageCount) {
            miniPageNumber = pageCount - page.maxshowpageitem + 1;
            if (miniPageNumber <= 0) {
                miniPageNumber = 1;
            }
        }

        // showPageNum : 展示分页数字
        var showPageNum = parseInt(page.maxshowpageitem);
        if (pageCount < showPageNum) {
            showPageNum = pageCount;
        }

        for (var i = 0; i < showPageNum; i++) {
            var pageNumber = miniPageNumber++;
            var itemPageClass = "pageItem";
            if (pageNumber == currentPage) {
                itemPageClass = "pageItemActive";
            }

            appendStr += "<li class='"+ itemPageClass +"' page-data='"+ pageNumber +"' page-rel='itempage'>"+ pageNumber +"</li>"
        }
        appendStr += "<li class='"+ nextPageClass +"' page-data='"+ nextPage +"' page-rel='nextpage'>下一页&gt;</li>"
        appendStr += "<li class='"+ nextPageClass +"' page-data='"+ pageCount +"' page-rel='lastpage'>尾页</li>"

        return appendStr;
    }
}