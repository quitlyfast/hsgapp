(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-product_detail"],{"2cc7":function(t,i,a){var o=a("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-03a2ffd2]{font:%?26?%/%?48?% Microsoft YaHei;background:#f9f9f9;color:#444}a[data-v-03a2ffd2]{outline:none;text-decoration:none;color:#3d83f4}a[data-v-03a2ffd2]:hover{color:#3d83f4}img[data-v-03a2ffd2]{border:0 none;max-width:100%;max-height:100%}.f-green[data-v-03a2ffd2]{color:#2cb998}.f-red[data-v-03a2ffd2]{color:#e45858}.f-orgn[data-v-03a2ffd2]{color:#ff8d30}.f-blue[data-v-03a2ffd2]{color:#3d83f4}.nums-box[data-v-03a2ffd2]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?220?%;border:solid 1px #9e9e9e;height:%?64?%;line-height:%?64?%;border-radius:%?20?%;float:right;margin-top:%?12?%}.nums-box .n-b[data-v-03a2ffd2]{width:%?64?%;height:%?64?%;border:none;background:none;line-height:%?64?%;text-align:center;padding:0}.nums-box .n-b[data-v-03a2ffd2]:after{display:none}.nums-box .n-t[data-v-03a2ffd2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?64?%;border-left:solid 1px #9e9e9e;border-right:solid 1px #9e9e9e;text-align:center;color:#666}.upload-box[data-v-03a2ffd2]{display:block;width:100%;overflow:hidden;padding:%?20?% 0}.upload-box .tit[data-v-03a2ffd2]{color:#a4a4a4}.upload-box .a-upload[data-v-03a2ffd2]{width:%?128?%;height:%?128?%;display:inline-block;margin:%?20?% %?20?% 0 0;border-radius:2px}.upload-box .a-upload uni-image[data-v-03a2ffd2]{width:100%;height:100%}.upload-box .upload-list[data-v-03a2ffd2]{display:inline-block}.upload-box .upload-list .item[data-v-03a2ffd2]{width:%?128?%;height:%?128?%;margin:%?20?% %?20?% 0 0;border-radius:2px;position:relative;overflow:hidden}.upload-box .upload-list .item uni-image[data-v-03a2ffd2]{width:100%;height:100%}.upload-box .upload-list .item .close[data-v-03a2ffd2]{position:absolute;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACFElEQVR4Xu2a600EMQyExxVACZRABxwdXAl0QC1UgKgAUQFcBVAKVBBkKSutVrePxPFspHV+3yWeL+PESVZw8CYH148AEA44OIFIgYMbIBbBSIFIgYMTiBQ4uAFiF4gUiBQwEEgpnQA8AHgRkV9DV8V/TSndAngG8CEiP8Ud5D9Up0BK6QzgPfejATyyIGTxnwDuASh4HbsKggXAV579AT4FwkT8MPZFRNSNxc0CYOwACoQZ8X8ATnQHqOKU0hOA1wl2Fyd4iNe4qx0wiGZA8BLfBIC3EzzFNwPgBcFbfFMArSEwxDcH0AoCS7wLACsEpng3ALUQ2OJdAZRC2EO8O4CtEPYSTwGwBiEXVMPBZqivTOVtyYHAXAluHWyhYtQu9FRHF09zwErZPGZIm/lhUJoDNkCgi6c7IK8HepPzDeBukj4up8i1FKU6YGa1H8dIh0ADsLDV3ezpBAqApX0+7wCUS5Vr6eAOYEuRw7hUmVsLXAFsEb+yO7ivCW4ASsTvCcEFQI34vSA0B2ARvweEpgBaiGdDaAagpXgmhCYAPMSzIJgBeIpnQDABYIj3hmAFoKc62mXGTMWo3wfoQ21VswIYP5FTzvNXILyJiD7SVjUrAD3bKwQ921c/UZdGPoJwAXC2fJhhAlAaeI+/DwA9zgozpnAAk3aPY4UDepwVZkzhACbtHscKB/Q4K8yYwgFM2j2O9Q89WnRQVnTQbAAAAABJRU5ErkJggg==) no-repeat 50% #a7a7a7;background-size:70%;right:0;top:0;width:%?40?%;height:%?40?%;border-radius:0 0 0 %?14?%}.dl-style .dl[data-v-03a2ffd2]{border-bottom:solid 1px #f5f5f5;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?90?%;min-height:%?90?%;color:#a4a4a4}.dl-style .dl .dd[data-v-03a2ffd2]{text-align:right;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#424242}.dl-style .dl .dd uni-picker[data-v-03a2ffd2]{width:100%}.dl-style .dl .dd uni-picker .txt[data-v-03a2ffd2]:after{content:"";border-right:solid 1px #cbcbd0;border-bottom:solid 1px #cbcbd0;width:%?14?%;height:%?14?%;display:inline;display:inline-block;transform:rotate(0deg);-ms-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);margin-bottom:%?2?%;margin-left:%?10?%;margin-right:%?6?%}.dl-style .dl .dd .radio[data-v-03a2ffd2]{margin-left:%?20?%}.dl-style .dl .dd uni-radio[data-v-03a2ffd2]{-webkit-transform:scale(.56);transform:scale(.56);margin-right:%?-5?%}.dl-style .dl .dd uni-radio .uni-radio-input[data-v-03a2ffd2]{margin-right:0!important}.dl-style .dl .dd.arrow[data-v-03a2ffd2]{position:relative;padding-right:%?28?%}.dl-style .dl .dd.arrow[data-v-03a2ffd2]:after{content:"";border-right:solid 1px #cbcbd0;border-bottom:solid 1px #cbcbd0;width:%?14?%;height:%?14?%;display:inline;display:inline-block;transform:rotate(0deg);-ms-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);top:50%;position:absolute;margin-top:%?-9?%;right:%?6?%}.dl-style .dl .dd .tag[data-v-03a2ffd2]{color:#fff;background:#3d83f4;border-radius:%?10?%;line-height:%?20?%;height:%?20?%;padding:0 %?16?% 0 %?6?%;margin:0 0 0 %?12?%;font-weight:600;font-style:italic;font-size:%?24?%}.dl-style .dl .dd .tag.orgn[data-v-03a2ffd2]{background:#ff7200}.dl-style .dl .txt[data-v-03a2ffd2]{width:100%;height:%?90?%;font-size:%?26?%}.dl-style .dl .txt.textarea[data-v-03a2ffd2]{height:%?200?%;padding:%?20?% 0;font-size:%?26?%}#content[data-v-03a2ffd2]{max-width:640px;margin:auto}#content .header[data-v-03a2ffd2]{border-bottom:solid 1px #f5f5f5;height:%?100?%;padding:0 %?32?% 0 %?16?%;line-height:%?100?%;position:relative;background:#fff;overflow:hidden}#content .header .txt[data-v-03a2ffd2]{font-size:%?36?%;text-align:center;position:absolute;left:%?100?%;right:%?100?%;top:0}#content .header .icons[data-v-03a2ffd2]{float:right}#content .header .icon[data-v-03a2ffd2]{width:%?42?%;height:%?42?%;margin:%?29?% %?16?%;display:inline-block;position:relative;z-index:2}#content .header .icon uni-image[data-v-03a2ffd2]{width:%?42?%;height:%?42?%;vertical-align:top}#content .header .href[data-v-03a2ffd2]{float:right;color:#3d83f4}#content .search-box[data-v-03a2ffd2]{position:absolute;top:%?102?%;background:#fff;z-index:99;left:0;right:0;bottom:0;padding:0 %?32?%;-webkit-transition:all .2s ease-in;-moz-transition:all .2s ease-in;-o-transition:all .2s ease-in;transition:all .2s ease-in}#content .search-box .item[data-v-03a2ffd2]{margin-top:%?10?%}#content .search-box .item > uni-text[data-v-03a2ffd2]{line-height:%?80?%;font-size:%?28?%}#content .search-box .item .txt[data-v-03a2ffd2]{border:solid 1px #f5f5f5;height:%?80?%;line-height:%?80?%;border-radius:2px;padding:0 %?24?%}#content .search-box .item .txt.time[data-v-03a2ffd2]{display:-moz-box;display:-webkit-box;display:box;border:none;width:100%;padding:0}#content .search-box .item .txt.time uni-picker[data-v-03a2ffd2]{-moz-box-flex:1;-webkit-box-flex:1;box-flex:1;border:solid 1px #f5f5f5;border-radius:2px}#content .search-box .item .txt.time uni-picker .t[data-v-03a2ffd2]{padding:0 %?20?%}#content .search-box .item .txt.time > uni-text[data-v-03a2ffd2]{padding:0 %?20?%}#content .search-box .btn[data-v-03a2ffd2]{margin-top:%?48?%;background-color:#3d83f4;border:none;color:#fff;border-radius:2px}#content .search-box .btn-cancle[data-v-03a2ffd2]{margin-top:%?24?%;border-color:#3d83f4;background:rgba(61,131,244,.05);color:#3d83f4;border-radius:2px}#content .search-medium[data-v-03a2ffd2]{background:#fff;border:solid 1px #eee;margin:%?20?% %?32?%;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?12?% %?24?%}#content .search-medium .ico[data-v-03a2ffd2]{width:%?44?%;height:%?44?%;margin-right:%?16?%}#content .search-medium .txt[data-v-03a2ffd2]{-webkit-box-flex:1;-webkit-flex:1;flex:1}#content .tab-box[data-v-03a2ffd2]{height:%?100?%;line-height:%?100?%;text-align:center;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;width:100%}#content .tab-box .item[data-v-03a2ffd2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;float:left;font-size:%?30?%;color:#a4a4a4}#content .tab-box .item.on[data-v-03a2ffd2]{border-bottom:solid 2px #3d83f4;color:#3d83f4}#content .list-box .item[data-v-03a2ffd2]{background-color:#fff;margin-top:%?24?%;padding:0 %?32?%}#content .list-box .item .title[data-v-03a2ffd2]{border-bottom:solid 1px #f5f5f5;line-height:%?100?%;font-size:%?30?%}#content .list-box .item .title .name[data-v-03a2ffd2]{font-weight:600}#content .list-box .item .title .status[data-v-03a2ffd2]{float:right}#content .list-box .item .cont[data-v-03a2ffd2]{padding:%?12?% 0 %?18?%}#content .list-box .item .cont > uni-view[data-v-03a2ffd2]{margin:%?6?% 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#content .list-box .item .cont > uni-view > uni-text[data-v-03a2ffd2]{color:#999;width:%?130?%;display:inline-block;text-align:justify;text-align-last:justify}#content .box-style[data-v-03a2ffd2]{margin-top:%?24?%;padding:0 %?32?%;background-color:#fff}#content .box-style .crumb-box[data-v-03a2ffd2]{margin:0 %?-32?%;padding:%?24?% %?20?%;display:-moz-box;display:-webkit-box;display:box;border-bottom:solid 1px #f5f5f5}#content .box-style .crumb-box .item[data-v-03a2ffd2]{-moz-box-flex:1;-webkit-box-flex:1;box-flex:1;margin:0 %?12?%;background:#eef4fe;color:#3d83f4;text-align:center;line-height:%?70?%}#content .box-style .crumb-box .item[data-v-03a2ffd2]:after{content:"";border-bottom:solid 1px #3d83f4;border-left:solid 1px #3d83f4;width:%?14?%;height:%?14?%;display:inline;display:inline-block;-webkit-transform:rotate(225deg);margin:0 0 %?6?% %?8?%;-webkit-transition:all .2s ease-in;vertical-align:middle}#content .box-style .title[data-v-03a2ffd2]{border-bottom:solid 1px #f5f5f5;line-height:%?96?%}#content .box-style .title .name[data-v-03a2ffd2]{font-size:%?30?%;font-weight:600}#content .box-style .title .href[data-v-03a2ffd2]{color:#3d83f4;float:right}#content .box-style .del[data-v-03a2ffd2]{text-align:center;font-size:%?28?%;color:#9a9a9a;padding:%?20?% 0}#content .box-style .del .ico[data-v-03a2ffd2]{width:%?40?%;height:%?40?%;display:inline-block;vertical-align:middle;margin:0 %?10?% %?4?% 0}#content .addInfo-box[data-v-03a2ffd2]{overflow:hidden}#content .addInfo-box .item[data-v-03a2ffd2]{border:solid 1px #f5f5f5;padding:0 %?28?%;margin-top:-1px;border-radius:%?10?%;margin-bottom:%?24?%}#content .pro-wrap[data-v-03a2ffd2]{overflow:hidden;padding:%?24?% 0 %?12?%;font-size:%?24?%}#content .pro-wrap .info-box[data-v-03a2ffd2]{overflow:hidden;color:#999;position:relative;padding-left:%?220?%}#content .pro-wrap .info-box .img[data-v-03a2ffd2]{border:solid 1px #f5f5f5;width:%?190?%;height:%?190?%;position:absolute;left:0;top:0}#content .pro-wrap .info-box .name[data-v-03a2ffd2]{width:100%;font-size:%?30?%;color:#424242;line-height:1.5;margin:%?6?% 0}#content .pro-wrap .info-box > uni-view[data-v-03a2ffd2]{min-width:50%;display:inline-block}#content .pro-wrap .info-box .txt[data-v-03a2ffd2]{width:60%;display:inline-block;font-size:%?24?%;margin-bottom:%?-8?%}#content .pro-wrap .price-box[data-v-03a2ffd2]{background:#f8f8f8;padding:%?12?% %?24?%;overflow:hidden;border-radius:4px;margin-top:%?24?%}#content .pro-wrap .price-box .item[data-v-03a2ffd2]{min-width:50%;float:left;color:#3e3e3e}#content .pro-wrap .price-box .item uni-text[data-v-03a2ffd2]{color:#999}#content .pro-wrap .btns-box[data-v-03a2ffd2]{margin-top:%?24?%;padding-top:%?22?%;border-top:solid 1px #f5f5f5;text-align:right}#content .pro-wrap .btns-box .btn[data-v-03a2ffd2]{border:soild 1px #a8a8a8;display:inline-block;height:%?62?%;line-height:%?62?%;font-size:%?26?%;min-width:%?130?%;background-color:#fff;border:solid 1px #a4a4a4}#content .pro-wrap .btns-box .btn[data-v-03a2ffd2]:after{display:none}#content .pup-box[data-v-03a2ffd2]{top:0;right:0;bottom:0;left:0;background:#f7f7f7;overflow:auto;z-index:2}#content .parts-list[data-v-03a2ffd2]{background:#fff;padding:0 %?32?%;overflow:auto}#content .parts-list .item[data-v-03a2ffd2]{border-bottom:solid 1px #f5f5f5;padding:%?20?% 0;position:relative}#content .parts-list .item .name[data-v-03a2ffd2]{font-size:%?30?%;margin-bottom:%?4?%;font-weight:600}#content .parts-list .item uni-text[data-v-03a2ffd2]{color:#999}#content .parts-list .item .nums-box[data-v-03a2ffd2]{border:none;width:%?150?%;position:absolute;bottom:%?28?%;right:0}#content .parts-list .item .nums-box .n-b[data-v-03a2ffd2]{color:#3d83f4;border:solid 1px #3d83f4;border-radius:50%;height:%?48?%;width:%?48?%;line-height:%?40?%}#content .parts-list .item .nums-box .n-t[data-v-03a2ffd2]{border-left:none;border-right:none;height:%?46?%;width:%?80?%}#content .parts-list .item .close-btn[data-v-03a2ffd2]{position:absolute;right:0;height:%?40?%;width:%?40?%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABn0lEQVRYR8WXz1GDQBSHfzvLITlpCZQgY8wMnLQD7UA70ArECrQD7UA70FOYiTpYQkowp1xg1lkgkT8Lu2/ZTLgu8H089r0fMBz4YAfmoxBI0/R4s8neAeYzxu7C8PRlH2JJ8n0thHgExGo69S6CIPgtBOQCIJ7/oezGtUSbIQSuomj2VgmkPpD/ADjah0T3AbGeTLi/q4CELpfpSZ7nH64lVHDO+fl8HsgHLvfA9nAtoYN3BFxWwgSuFHAhYQrvFRgjQYEPCthIUOFaAYqEDdxIwETCFm4sMCRRtnB9imJd73PdSCeFkXpONBAkOKkCw8OqWCXDrQTkRUnyGQPsvlle8RCGZ7Gu5O110iso4e3krN+SnqIkAdVur/DWKWos0NdqUmBMihoJ6Pp8TIpqBXTw4e7Q74lBAVP4GIleASrcVkIpYAu3kegIjIVTJRoCruAUiZ2Aa7ipRCFQ9XFaG6pWwdKXA6o5wTkP5Kd5IbBYfF0yhtfqBk7hfZVo/BlVEk8AfM/j8fangZpsuvNlJbIsl4m5iqLZrXUc60CU9T9XSoYwdOkyJgAAAABJRU5ErkJggg==) no-repeat 50%;background-size:60%;top:50%;margin-top:%?-20?%}#content .parts-list .item .close-btn[data-v-03a2ffd2]:after{display:none}#content .operation-box[data-v-03a2ffd2]{height:%?100?%;padding:%?20?% %?68?%;background:#fff;box-shadow:0 -2px 8px rgba(0,0,0,.08);display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?100?%;font-size:%?28?%;position:relative;z-index:2;position:fixed;bottom:0}#content .operation-box .txt[data-v-03a2ffd2]{-webkit-box-flex:1;-webkit-flex:1;flex:1}#content .operation-box .txt .arrow[data-v-03a2ffd2]:after{content:"";border-top:solid 1px #cbcbd0;border-right:solid 1px #cbcbd0;width:%?14?%;height:%?14?%;display:inline;display:inline-block;-webkit-transform:rotate(-45deg);margin:%?6?% %?20?% 0;-webkit-transition:all .2s ease-in;-moz-transition:all .2s ease-in;-o-transition:all .2s ease-in;transition:all .2s ease-in}#content .operation-box .txt.on .arrow[data-v-03a2ffd2]:after{-webkit-transform:rotate(135deg);margin-top:0;margin-bottom:%?6?%}#content .operation-box .btns[data-v-03a2ffd2]{width:%?400?%}#content .operation-box .btns .btn[data-v-03a2ffd2]{height:%?100?%;width:%?180?%;display:inline-block;margin-left:%?18?%;border:solid 1px #e4e5e7;background:#fff;font-size:%?32?%;line-height:%?100?%}#content .operation-box .btns .btn[data-v-03a2ffd2]:after{display:none}#content .operation-box .btns .btn.btn-blue[data-v-03a2ffd2]{background-color:#3d83f4;border-color:#3d83f4;color:#fff}#content .pup-mask[data-v-03a2ffd2]{background-color:rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0;bottom:0;left:0;right:0}#content .select-pro[data-v-03a2ffd2]{position:fixed;background:#fff;bottom:%?140?%;left:0;right:0;background:#fff}#content .select-pro .tit[data-v-03a2ffd2]{padding:%?24?% %?32?%;color:grey;font-size:%?28?%}#content .select-pro .parts-list[data-v-03a2ffd2]{height:%?500?%}#content .quotation-box[data-v-03a2ffd2]{background:#fff;padding:0 %?32?%;overflow:auto}#content .quotation-box .item .title[data-v-03a2ffd2]{border-bottom:solid 1px #f5f5f5;line-height:%?84?%;font-size:%?30?%}#content .quotation-box .item .title[data-v-03a2ffd2]:after{content:"";border-bottom:solid 1px #cbcbd0;border-left:solid 1px #cbcbd0;width:%?14?%;height:%?14?%;display:inline;display:inline-block;-webkit-transform:rotate(135deg);float:right;margin:%?32?% 0 0 0;-webkit-transition:all .2s ease-in}#content .quotation-box .item .title.on[data-v-03a2ffd2]:after{-webkit-transform:rotate(-45deg);margin:%?30?% 0 %?2?% 0}#content .quotation-box .item .quotation-list .item[data-v-03a2ffd2]{overflow:hidden;color:#999;position:relative;padding:%?24?% 0 %?24?% %?220?%;font-size:%?24?%;line-height:1.6;border-bottom:solid 1px #f5f5f5;min-height:%?198?%}#content .quotation-box .item .quotation-list .item .img[data-v-03a2ffd2]{border:solid 1px #f5f5f5;width:%?190?%;height:%?190?%;position:absolute;left:0;top:%?24?%;border-radius:%?10?%}#content .quotation-box .item .quotation-list .item .name[data-v-03a2ffd2]{width:100%;font-size:%?30?%;color:#424242;line-height:1.5;margin:%?6?% 0;margin:%?10?% 0;font-size:%?30?%}#content .quotation-box .item .quotation-list .item .name .tag[data-v-03a2ffd2]{color:#fff;background:#ff7200;border-radius:%?10?%;line-height:%?20?%;height:%?20?%;padding:0 %?16?% 0 %?6?%;margin-right:%?10?%;font-weight:600;font-style:italic;font-size:%?24?%}#content .quotation-box .item .quotation-list .item .nums-box[data-v-03a2ffd2]{border:none;width:%?150?%;position:absolute;bottom:%?28?%;right:0}#content .quotation-box .item .quotation-list .item .nums-box .n-b[data-v-03a2ffd2]{color:#3d83f4;border:solid 1px #3d83f4;border-radius:50%;height:%?48?%;width:%?48?%;line-height:%?40?%}#content .quotation-box .item .quotation-list .item .nums-box .n-t[data-v-03a2ffd2]{border-left:none;border-right:none;height:%?46?%;width:%?80?%}#content .quotation-box .item .quotation-list .item[data-v-03a2ffd2]:after{border-bottom:0}#content .configure-list[data-v-03a2ffd2]{height:calc(100vh - %?245?%);overflow:auto;background:#fff}#content .configure-list .item .title[data-v-03a2ffd2]{margin:0 %?32?%;border-bottom:solid 1px #f5f5f5;padding:%?20?% 0;color:#424242;font-size:%?28?%}#content .configure-list .item .title[data-v-03a2ffd2]:before{content:"";height:%?32?%;width:%?8?%;background-color:#3d83f4;display:inline-block;vertical-align:middle;margin-right:%?14?%;margin-bottom:%?4?%}#content .configure-list .item .title[data-v-03a2ffd2]:after{content:"";border-bottom:solid 1px #cbcbd0;border-left:solid 1px #cbcbd0;width:%?14?%;height:%?14?%;display:inline;display:inline-block;-webkit-transform:rotate(135deg);float:right;margin:%?24?% 0 0 0;-webkit-transition:all .2s ease-in}#content .configure-list .item .title.on[data-v-03a2ffd2]:after{-webkit-transform:rotate(-45deg);margin:%?30?% 0 %?2?% 0}#content .configure-list .item .dl-style[data-v-03a2ffd2]{padding:0 %?32?%}#content .configure-list .item .dl-style .tit[data-v-03a2ffd2]{background:#f8f8f8;padding:%?20?% %?32?%;margin:0 %?-32?%;color:#a4a4a4}#content .configure-bottom[data-v-03a2ffd2]{height:%?100?%;padding:%?20?% %?32?%;background:#fff;box-shadow:0 -2px 8px rgba(0,0,0,.08);display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?100?%;font-size:%?28?%;position:relative;z-index:2}#content .configure-bottom .txt[data-v-03a2ffd2]{width:%?200?%}#content .configure-bottom .btns[data-v-03a2ffd2]{-webkit-box-flex:1;-webkit-flex:1;flex:1}#content .configure-bottom .btns .btn[data-v-03a2ffd2]{height:%?100?%;width:100%;display:inline-block;margin-left:%?18?%;border:solid 1px #e4e5e7;background:#fff;font-size:%?32?%;line-height:%?100?%}#content .configure-bottom .btns .btn[data-v-03a2ffd2]:after{display:none}#content .configure-bottom .btns .btn.btn-blue[data-v-03a2ffd2]{background-color:#3d83f4;border-color:#3d83f4;color:#fff}#content .pop-list[data-v-03a2ffd2]{background:#fff;margin-top:%?12?%;padding:0 %?32?%}#content .pop-list .item[data-v-03a2ffd2]{padding:%?24?% 0 %?28?% %?60?%;line-height:1.6;color:#999;position:relative}#content .pop-list .item .ico[data-v-03a2ffd2]{position:absolute;left:0;top:%?28?%;height:%?42?%;width:%?42?%;display:none}#content .pop-list .item .name[data-v-03a2ffd2]{font-size:%?30?%;margin-bottom:%?4?%;color:#666}#content .pop-list .item.on .ico[data-v-03a2ffd2]{display:block}#content .pop-list .item[data-v-03a2ffd2]:after{content:"";position:absolute;left:%?60?%;bottom:0;right:%?24?%;background-color:#eee;height:1px}#content .pop-list .item[data-v-03a2ffd2]:last-child:after{display:none}body.?%PAGE?%[data-v-03a2ffd2]{background:#f9f9f9}',""]),t.exports=i},"3a70":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.APPfindoption2=i.detail_confirm=i.accessorieslist=i.detail_list_shwo=i.detail_list=i.channel_list=i.way_list=i.firm_list=i.company_list=i.principal_list=i.postlist=i.login_touken=void 0;var o="/app/login.jhtml";i.login_touken=o;var e="/b2b/contract/list_data.jhtml";i.postlist=e;var n="/member/store_member/select_saleman_data.jhtml";i.principal_list=n;var d="/member/store/sale_group_store_data.jhtml";i.company_list=d;var r="/manage/management/select_management_data.jhtml";i.firm_list=r;var s="/basic/system_dict/select_system_dict_data.jhtml";i.way_list=s;var l="/basic/system_dict/select_system_dict_data.jhtml";i.channel_list=l;var f="/product/product/getNodes.jhtml";i.detail_list=f;var c="/product/product/list_data.jhtml";i.detail_list_shwo=c;var b="/b2b/contract/findoption.jhtml";i.detail_confirm=b;var v="/b2b/contract/APPfindoption2.jhtml";i.APPfindoption2=v;var g="/product/product/list_data_price.jhtml";i.accessorieslist=g},"3b03":function(t,i,a){"use strict";a.r(i);var o=a("851f"),e=a("f96b");for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);a("731d");var d,r=a("f0c5"),s=Object(r["a"])(e["default"],o["b"],o["c"],!1,null,"03a2ffd2",null,!1,o["a"],d);i["default"]=s.exports},"731d":function(t,i,a){"use strict";var o=a("d9d6"),e=a.n(o);e.a},"7f12":function(t,i,a){"use strict";(function(t){a("4160"),a("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;a("3a70");var o={data:function(){return{schemelist:[{}],array1:["请选择","选择2","选择3","选择2","选择3"],configurArray:[{visible:!0,name:"GH 30KW总线激光切割机"},{visible:!1,name:"GT Pro 总线激光切割机"},{visible:!1,name:"GF 大幅面总线激光切割机"}]}},onLoad:function(i){t("log",i," at pages/index/product_detail.vue:142")},methods:{showconfInfo:function(t,i){var a=this;this.configurArray.forEach((function(t){t.visible!==a.configurArray[i].visible&&(t.visible=!1)})),t.visible=!t.visible},configurationEnsure:function(){this.ConfigurePro=!1,this.visiblePro=!1},configurationSub:function(t){},configurationAdd:function(t){},schemeChange:function(t,i){var a=this.array1[t.detail.value];this.schemelist.select=a,this.$forceUpdate()}}};i.default=o}).call(this,a("0de9")["log"])},"851f":function(t,i,a){"use strict";var o;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return o}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{attrs:{id:"content"}},[a("v-uni-view",{staticClass:"pup-box"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"icon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ConfigurePro=!1}}},[a("v-uni-image",{attrs:{src:"/static/ico-back.png"}})],1),a("v-uni-view",{staticClass:"txt"},[t._v("配置产品")])],1),a("v-uni-view",{staticClass:"configure-list"},[t._l(t.configurArray,(function(i,o){return[a("v-uni-view",{key:o+"_0",staticClass:"item"},[a("v-uni-view",{staticClass:"title",class:{on:i.visible},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showconfInfo(i,o)}}},[t._v(t._s(i.name))]),i.visible?a("v-uni-view",{staticClass:"cont"},[a("v-uni-view",{staticClass:"dl-style"},[a("v-uni-view",{staticClass:"tit"},[t._v("产品信息")]),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("产品铭牌")]),a("v-uni-view",{staticClass:"dd"},[t._v("宏山")])],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("功率")]),a("v-uni-view",{staticClass:"dd"},[t._v("3000")])],1),a("v-uni-view",{staticClass:"tit"},[t._v("建议交期")]),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("产品标准交期")]),a("v-uni-view",{staticClass:"dd"},[t._v("5天")])],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("产品浮动交期")]),a("v-uni-view",{staticClass:"dd"},[t._v("7天")])],1),a("v-uni-view",{staticClass:"tit"},[t._v("价格信息")]),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("标准价格")]),a("v-uni-view",{staticClass:"dd"},[t._v("￥3,900")])],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("合同交期")]),a("v-uni-view",{staticClass:"dd"},[a("v-uni-view",{staticClass:"nums-box"},[a("v-uni-button",{staticClass:"n-b",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.configurationSub("delivery")}}},[t._v("-")]),a("v-uni-input",{staticClass:"n-t",attrs:{type:"number",value:"0"}}),a("v-uni-button",{staticClass:"n-b",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.configurationAdd("delivery")}}},[t._v("+")])],1)],1)],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("数量")]),a("v-uni-view",{staticClass:"dd"},[a("v-uni-view",{staticClass:"nums-box"},[a("v-uni-button",{staticClass:"n-b",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.configurationSub("quantity")}}},[t._v("-")]),a("v-uni-input",{staticClass:"n-t",attrs:{type:"number",value:"0"}}),a("v-uni-button",{staticClass:"n-b",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.configurationAdd("quantity")}}},[t._v("+")])],1)],1)],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("订单金额")]),a("v-uni-view",{staticClass:"dd"},[t._v("￥5,999")])],1),a("v-uni-view",{staticClass:"tit"},[t._v("产品选配明细")]),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("切割头")]),a("v-uni-view",{staticClass:"dd arrow"},[t._v("1P06切割头（100/190）"),a("em",{staticClass:"tag"},[t._v("标")])])],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("水冷机")]),a("v-uni-view",{staticClass:"dd arrow"},[t._v("汉立HL-600Q-QG2"),a("em",{staticClass:"tag orgn"},[t._v("7")])])],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("风机")]),a("v-uni-view",{staticClass:"dd arrow"},[t._v("无")])],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("稳变器")]),a("v-uni-view",{staticClass:"dd arrow"},[t._v("无")])],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("系统")]),a("v-uni-view",{staticClass:"dd arrow"},[t._v("ALPJHA A(GAII/GA IV/GC)"),a("em",{staticClass:"tag"},[t._v("标")])])],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("空压机")]),a("v-uni-view",{staticClass:"dd arrow"},[t._v("无")])],1),a("v-uni-view",{staticClass:"dl"},[a("v-uni-view",{staticClass:"dt"},[t._v("非标方案")]),a("v-uni-view",{staticClass:"dd"})],1)],1)],1):t._e()],1)]}))],2),a("v-uni-view",{staticClass:"configure-bottom"},[a("v-uni-view",{staticClass:"txt"},[t._v("配置产品：3")]),a("v-uni-view",{staticClass:"btns"},[a("v-uni-button",{staticClass:"btn btn-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.configurationEnsure.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)},n=[]},d9d6:function(t,i,a){var o=a("2cc7");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=a("4f06").default;e("681aa1ca",o,!0,{sourceMap:!1,shadowMode:!1})},f96b:function(t,i,a){"use strict";a.r(i);var o=a("7f12"),e=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(i,t,(function(){return o[t]}))}(n);i["default"]=e.a}}]);