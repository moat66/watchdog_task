(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1213d005"],{"13d5":function(e,t,a){"use strict";var r=a("23e7"),n=a("d58f").left,o=a("a640"),s=a("ae40"),i=o("reduce"),c=s("reduce",{1:0});r({target:"Array",proto:!0,forced:!i||!c},{reduce:function(e){return n(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"16c4":function(e,t){e.exports={messages:{CN:{operate:{add:"添加",delete:"删除",enable:"启用",disable:"禁用",more:"更多"},form:{triggers:"触发指令",text:{data:"回复内容",img:"图片URL直链",text:"文本内容",video:"视频URL直链",xml:"XML文本内容"},case:{img:"图片",text:"文本",video:"视频",xml:"XML"},messageType:"消息类型",communicationType:"通讯端点",enable:"启用",regexEnable:"指令正则",remark:"备注",type:{qq:"QQ",qywx:"企业微信",wx:"WX",wxmp:"公众号",web:"WEB",all:"全部"}},updateTitle:"更新快捷回复信息",saveTitle:"添加快捷回复信息",confirm:{deleteTitle:"确定删除？",deleteContent:"你确认要删除选择的快捷回复信息吗？",enableTitle:"确定启用？",enableContent:"你确认要启用选择的快捷回复信息吗？",disableTitle:"确定禁用？",disableContent:"你确认要禁用选择的快捷回复信息吗？"},table:{triggers:"指令",text:"回复内容",messageType:"消息类型",communicationType:"通讯端点",regexEnable:"是否正则",enable:"开关",remark:"备注",action:"操作"},search:"请输入搜索内容",add:"添加",input:"请输入",select:"请选择",cancel:"取消",submit:"提交"},HK:{operate:{add:"添加",delete:"刪除",enable:"啟用",disable:"禁用",more:"更多"},form:{triggers:"觸發指令",text:{data:"回覆內容",img:"圖片URL直鏈",text:"文字內容",video:"視頻URL直鏈",xml:"XML文字內容"},case:{img:"圖片",text:"文字",video:"視頻",xml:"XML"},messageType:"消息類型",communicationType:"通訊端點",enable:"啟用",regexEnable:"指令正則",remark:"備註",type:{qq:"QQ",qywx:"企業微信",wx:"WX",wxmp:"公眾號",web:"WEB",all:"全部"}},updateTitle:"更新快捷回覆信息",saveTitle:"添加快捷回覆信息",confirm:{deleteTitle:"確定刪除？",deleteContent:"你確認要刪除選擇的快捷回覆信息嗎？",enableTitle:"確定啟用？",enableContent:"你確認要啟用選擇的快捷回覆信息嗎？",disableTitle:"確定禁用？",disableContent:"你確認要禁用選擇的快捷回覆信息嗎？"},table:{triggers:"指令",text:"回覆內容",messageType:"消息類型",communicationType:"通訊端點",regexEnable:"是否正則",enable:"開關",remark:"備註",action:"操作"},search:"請輸入搜索內容",add:"添加",input:"請輸入",select:"請選擇",cancel:"取消",submit:"提交"},US:{operate:{add:"Add",delete:"Delete",enable:"Enable",disable:"Disable",more:"More"},form:{triggers:"Command",text:{data:"Reply Data",img:"Image URL",text:"Text",video:"Video URL",xml:"XML Text"},case:{img:"Image",text:"Text",video:"Video",xml:"XML"},messageType:"Message Type",communicationType:"Communication Endpoint",enable:"Enable",regexEnable:"Command Regex",remark:"Remark",type:{qq:"QQ",qywx:"WeChat Work",wx:"WX",wxmp:"WeChat Official Account",web:"WEB",all:"All"}},updateTitle:"Update Quick Reply Info",saveTitle:"Add Quick Reply Info",confirm:{deleteTitle:"Confirm Deletion?",deleteContent:"Are you sure you want to delete the selected quick reply information?",enableTitle:"Enable?",enableContent:"Are you sure you want to enable the selected quick reply information?",disableTitle:"Disable?",disableContent:"Are you sure you want to disable the selected quick reply information?"},table:{triggers:"Command",text:"Reply Data",messageType:"Message Type",communicationType:"Communication Endpoint",regexEnable:"Regex",enable:"Switch",remark:"Remark",action:"Action"},search:"Search",add:"Add",input:"Please input",select:"Please select",cancel:"Cancel",submit:"Submit"}}}},3521:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"standard-table"},[a("a-table",{attrs:{bordered:e.bordered,loading:e.loading,columns:e.columns,dataSource:e.dataSource,rowKey:e.rowKey,pagination:e.pagination,expandedRowKeys:e.expandedRowKeys,expandedRowRender:e.expandedRowRender,scroll:e.scroll,rowSelection:e.selectedRows?{selectedRowKeys:e.selectedRowKeys,onSelect:e.onSelect,onSelectAll:e.onSelectAll}:void 0},on:{change:e.onChange},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots).filter((function(e){return"expandedRowRender"!==e})),(function(t){return{key:t,fn:function(a,r,n){return[e._t(t,null,null,{text:a,record:r,index:n})]}}})),{key:e.$scopedSlots.expandedRowRender?"expandedRowRender":"",fn:function(t,a,r,n){return[e._t(e.$scopedSlots.expandedRowRender?"expandedRowRender":"",null,null,{record:t,index:a,indent:r,expanded:n})]}}],null,!0)},[e._l(Object.keys(e.$slots),(function(t){return a("template",{slot:t},[e._t(t)],2)}))],2)],1)},n=[],o=a("7644"),s=o["a"],i=(a("6892"),a("0c7c")),c=Object(i["a"])(s,r,n,!1,null,"11bb3bd6",null);t["a"]=c.exports},"3a5f":function(e,t,a){},"503d":function(e,t,a){},"57e5":function(e,t,a){"use strict";var r=a("503d"),n=a.n(r);n.a},6892:function(e,t,a){"use strict";var r=a("3a5f"),n=a.n(r);n.a},"6b13":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-drawer",{attrs:{title:e.isUpdate?e.$t("updateTitle"):e.$t("saveTitle"),width:e.widths,visible:e.visible,"body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[a("a-form",{attrs:{form:e.form,layout:"vertical"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:12,sm:24,hidden:""}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}]})],1)],1),a("a-col",{attrs:{sm:24}},[a("a-form-item",{attrs:{label:e.$t("form.triggers")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggers",{rules:[{required:!0,message:e.$ta("input|form.triggers"),whitespace:!0}]}],expression:"['triggers', {rules: [{ required: true, message: $ta('input|form.triggers'), whitespace: true}]}]"}],attrs:{placeholder:e.$ta("input|form.triggers")}})],1)],1),a("a-col",{attrs:{sm:24}},[a("a-form-item",{attrs:{label:e.$t("form.text.data")}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["text",{rules:[{required:!0,message:e.$ta("input|form.text."+e.form.getFieldValue("messageType")),whitespace:!0}]}],expression:"['text', {rules: [{ required: true, message: $ta('input|form.text.' + form.getFieldValue('messageType')), whitespace: true}]}]"}],attrs:{rows:4,placeholder:e.$ta("input|form.text."+e.form.getFieldValue("messageType"))}})],1)],1),a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("form.messageType")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["messageType",{rules:[{required:!0,message:e.$ta("input|form.messageType"),whitespace:!0}]}],expression:"['messageType', {rules: [{ required: true, message: $ta('input|form.messageType'), whitespace: true}]}]"}],attrs:{placeholder:e.$ta("select|form.messageType")}},[a("a-select-option",{attrs:{value:"img"}},[e._v(" "+e._s(e.$t("form.case.img"))+" ")]),a("a-select-option",{attrs:{value:"text"}},[e._v(" "+e._s(e.$t("form.case.text"))+" ")]),a("a-select-option",{attrs:{value:"video"}},[e._v(" "+e._s(e.$t("form.case.video"))+" ")]),a("a-select-option",{attrs:{value:"xml"}},[e._v(" "+e._s(e.$t("form.case.xml"))+" ")])],1)],1)],1),a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("form.communicationType")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["communicationType"],expression:"['communicationType']"}],attrs:{allowClear:!0,placeholder:e.$ta("select|form.communicationType")}},[a("a-select-option",{attrs:{value:0}},[e._v(" "+e._s(e.$t("form.type.all"))+" ")]),a("a-select-option",{attrs:{value:1}},[e._v(" "+e._s(e.$t("form.type.qq"))+" ")]),a("a-select-option",{attrs:{value:2}},[e._v(" "+e._s(e.$t("form.type.wx"))+" ")]),a("a-select-option",{attrs:{value:3}},[e._v(" "+e._s(e.$t("form.type.web"))+" ")]),a("a-select-option",{attrs:{value:4}},[e._v(" "+e._s(e.$t("form.type.wxmp"))+" ")]),a("a-select-option",{attrs:{value:5}},[e._v(" "+e._s(e.$t("form.type.qywx"))+" ")])],1)],1)],1),a("a-col",{attrs:{sm:12}},[a("a-form-item",{attrs:{label:e.$t("form.enable")}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["enable"],expression:"['enable']"}],attrs:{"checked-children":"开","un-checked-children":"关",checked:e.form.getFieldValue("enable")}})],1)],1),a("a-col",{attrs:{sm:12}},[a("a-form-item",{attrs:{label:e.$t("form.regexEnable")}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["regexEnable"],expression:"['regexEnable']"}],attrs:{"checked-children":"是","un-checked-children":"否",checked:e.form.getFieldValue("regexEnable")}})],1)],1),a("a-col",{attrs:{sm:24}},[a("a-form-item",{attrs:{label:e.$t("form.remark")}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark"],expression:"['remark']"}],attrs:{rows:4,placeholder:e.$ta("input|form.remark")}})],1)],1)],1)],1),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:e.onClose}},[e._v(" "+e._s(e.$t("cancel"))+" ")]),a("a-button",{attrs:{type:"primary",loading:e.isSubmit},on:{click:e.onSubmit}},[e._v(" "+e._s(e.$t("submit"))+" ")])],1)],1),a("a-card",{staticClass:"result-success"},[a("div",{staticClass:"table-operations"},[a("a-row",{attrs:{gutter:24,type:"flex",justify:"space-around",align:"middle"}},[a("a-col",{staticClass:"cores-bottom",attrs:{md:12,sm:24}},[a("a-space",{attrs:{size:6}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.toAdd}},[e._v(e._s(e.$t("operate.add")))]),a("a-dropdown",{attrs:{disabled:0===e.selectedRows.length}},[a("a-menu",{attrs:{slot:"overlay"},on:{click:e.QuickEvent},slot:"overlay"},[a("a-menu-item",{key:"delete"},[e._v(" "+e._s(e.$t("operate.delete"))+" ")]),a("a-menu-item",{key:"enable"},[e._v(" "+e._s(e.$t("operate.enable"))+" ")]),a("a-menu-item",{key:"disable"},[e._v(" "+e._s(e.$t("operate.disable"))+" ")])],1),a("a-button",[e._v(" "+e._s(e.$t("operate.more"))+" "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1)],1),a("a-col",{staticClass:"cores-bottom",staticStyle:{"text-align":"right"},attrs:{flex:"right",md:12,sm:24}},[a("a-input-search",{staticStyle:{width:"auto"},attrs:{allowClear:!0,placeholder:e.$t("search"),"enter-button":""},on:{search:e.getData,pressEnter:e.getData},model:{value:e.query.searchValue,callback:function(t){e.$set(e.query,"searchValue",t)},expression:"query.searchValue"}})],1)],1)],1),a("standard-table",{attrs:{columns:e.dataColumns,dataSource:e.dataSource,selectedRows:e.selectedRows,rowKey:function(e){return e.id},pagination:Object.assign({},e.pagination,{onShowSizeChange:e.onShowSizeAndPageChange,onChange:e.onShowSizeAndPageChange}),scroll:{x:900}},on:{"update:selectedRows":function(t){e.selectedRows=t},"update:selected-rows":function(t){e.selectedRows=t}},scopedSlots:e._u([{key:"triggers",fn:function(t){var r=t.text;return[a("a",{on:{click:function(t){return e.copyValue(r)}}},[e._v(" "+e._s(r)+" ")])]}},{key:"text",fn:function(t){var r=t.text;return[a("a",{on:{click:function(t){return e.copyValue(r)}}},[e._v(" "+e._s(r)+" ")])]}},{key:"regexEnable",fn:function(t){var r=t.text;return a("span",{},[a("a-tag",{attrs:{color:r?"cyan":"orange"}},[e._v(" "+e._s(r?"是":"否")+" ")])],1)}},{key:"messageType",fn:function(t){var r=t.text;return[a("a-tag",{attrs:{color:"green"}},[e._v(" "+e._s(e.$t("form.case."+r))+" ")])]}},{key:"communicationType",fn:function(t){var r=t.text;return[a("a-tag",{attrs:{color:"green"}},1===r?[e._v(" "+e._s(e.$t("form.type.qq"))+" ")]:2===r?[e._v(" "+e._s(e.$t("form.type.wx"))+" ")]:3===r?[e._v(" "+e._s(e.$t("form.type.web"))+" ")]:4===r?[e._v(" "+e._s(e.$t("form.type.wxmp"))+" ")]:5===r?[e._v(" "+e._s(e.$t("form.type.qywx"))+" ")]:[e._v(" "+e._s(e.$t("form.type.all"))+" ")])]}},{key:"enable",fn:function(t){t.text;var r=t.record;return a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",loading:e.isRunLoad&&r.id===e.isRunId,checked:r.enable},on:{click:function(t){return e.enableOrDisable(r)}}})}},{key:"remark",fn:function(t){var r=t.text;return[a("a",{on:{click:function(t){return e.copyValue(r)}}},[e._v(" "+e._s(r)+" ")])]}},{key:"action",fn:function(t){t.text;var r=t.record;return a("div",{},[a("a-space",{attrs:{size:8}},[a("a",{attrs:{type:"link"},on:{click:function(t){return e.toUpdate(r)}}},[a("a-icon",{attrs:{type:"edit"}})],1),e._v(" "),a("a",{attrs:{type:"link"},on:{click:function(t){return e.deleteQuick([r.id])}}},[a("a-icon",{attrs:{type:"delete"}})],1)])],1)}}])})],1)],1)},n=[],o=(a("d81d"),a("96cf"),a("1da1")),s=a("7424"),i=a("b775");function c(e){return l.apply(this,arguments)}function l(){return l=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["f"])(s["QUICK"].BASE,i["a"].GET,t));case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return d=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["f"])(s["QUICK"].BASE,i["a"].POST,t));case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function _(e){return m.apply(this,arguments)}function m(){return m=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["f"])(s["QUICK"].BASE,i["a"].PUT,t));case 1:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["f"])(s["QUICK"].BASE,i["a"].DELETE,t));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return h=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["f"])(s["QUICK"].DISABLE,i["a"].PUT,t));case 1:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return v=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["f"])(s["QUICK"].ENABLE,i["a"].PUT,t));case 1:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}var y=a("3521"),w=[{title:"指令",key:"triggers",width:90,align:"center",ellipsis:!0,dataIndex:"triggers",scopedSlots:{customRender:"triggers"}},{title:"回复内容",key:"text",width:150,align:"center",ellipsis:!0,dataIndex:"text",scopedSlots:{customRender:"text"}},{title:"消息类型",key:"messageType",width:80,align:"center",dataIndex:"messageType",scopedSlots:{customRender:"messageType"}},{title:"通讯端点",key:"communicationType",width:80,align:"center",dataIndex:"communicationType",scopedSlots:{customRender:"communicationType"}},{title:"是否正则",key:"regexEnable",width:80,align:"center",dataIndex:"regexEnable",scopedSlots:{customRender:"regexEnable"}},{title:"开关",key:"enable",width:80,align:"center",dataIndex:"enable",scopedSlots:{customRender:"enable"}},{title:"备注",key:"remark",width:120,align:"center",ellipsis:!0,dataIndex:"remark",scopedSlots:{customRender:"remark"}},{title:"操作",key:"action",width:80,align:"center",scopedSlots:{customRender:"action"}}],x={name:"Quick",components:{StandardTable:y["a"]},i18n:a("16c4"),data:function(){return{form:this.$form.createForm(this),visible:!1,dataSource:[],selectedRows:[],columns:w,isSubmit:!1,isRunLoad:!1,isRunId:0,isUpdate:!1,pagination:{current:1,pageSize:10,total:0,showSizeChanger:!0,showQuickJumper:!0},query:{searchValue:""}}},methods:{onShowSizeAndPageChange:function(e,t){this.pagination.current=e,this.pagination.pageSize=t,this.getData()},enableOrDisable:function(e){var t=this;this.isRunLoad=!0,this.isRunId=e.id,(e.enable?b([e.id]):g([e.id])).then((function(a){200===a.data.code?(t.$message.success(a.data.message),e.enable=!e.enable):t.$message.error(a.data.message),t.isRunLoad=!1})).catch((function(e){t.$message.error(e.message),t.isRunLoad=!1}))},copyValue:function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.$message.success("复制成功")},QuickEvent:function(e){switch(e.key){case"delete":this.deleteQuick(this.selectedRows.map((function(e){return e.id})));break;case"enable":this.enable(this.selectedRows.map((function(e){return e.id})));break;case"disable":this.disable(this.selectedRows.map((function(e){return e.id})));break}},toAdd:function(){var e=this;this.isUpdate=!1,this.visible=!0,this.$nextTick((function(){e.form.setFieldsValue({enable:!0,regexEnable:!1,messageType:"text"})}))},onClose:function(){this.form.resetFields(),this.visible=!1},toUpdate:function(e){var t=this;this.isUpdate=!0,this.visible=!0,this.$nextTick((function(){var a;t.form.setFieldsValue({id:e.id,triggers:e.triggers,messageType:e.messageType,text:e.text,communicationType:null!==(a=null===e||void 0===e?void 0:e.communicationType)&&void 0!==a?a:void 0,enable:e.enable,regexEnable:e.regexEnable,remark:e.remark})}))},deleteQuick:function(e){var t=this;this.$confirm({title:this.$t("confirm.deleteTitle"),content:this.$t("confirm.deleteContent"),onOk:function(){var a=Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:p(e).then((function(e){200===e.data.code?(t.$message.success(e.data.message),t.getData()):t.$message.error(e.data.message)})).catch((function(e){t.$message.error(e.message)}));case 1:case"end":return a.stop()}}),a)})));function r(){return a.apply(this,arguments)}return r}()})},onSubmit:function(){var e=this;this.isSubmit=!0,this.form.validateFields((function(t,a){t?e.isSubmit=!1:(a.id?_(a):u(a)).then((function(t){var r=t.data;if(200===r.code){if(e.$message.success(r.message),a.id){for(var n=0;n<e.dataSource.length;n++)if(e.dataSource[n].id===r.data.id){e.$set(e.dataSource,n,r.data);break}}else e.dataSource.push(r.data);e.visible=!1,e.form.resetFields()}else e.$message.error(r.message);e.isSubmit=!1})).catch((function(t){e.$message.error(t.message),e.isSubmit=!1}))}))},enable:function(e){var t=this;this.confirmPop("confirm.enableTitle","confirm.enableContent",Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:g(e).then((function(e){var a;200===(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.code)?(t.$message.success(e.data.message),t.getData()):t.$message.error(e.data.message)})).catch((function(e){t.$message.error(e.message)}));case 1:case"end":return a.stop()}}),a)}))))},disable:function(e){var t=this;this.confirmPop("confirm.disableTitle","confirm.disableContent",Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:b(e).then((function(e){var a;200===(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.code)?(t.$message.success(e.data.message),t.getData()):t.$message.error(e.data.message)})).catch((function(e){t.$message.error(e.message)}));case 1:case"end":return a.stop()}}),a)}))))},getData:function(){var e=this;c({page:this.pagination.current,pageSize:this.pagination.pageSize,searchValue:this.query.searchValue}).then((function(t){var a,r,n,o,s,i;e.selectedRows=[],e.dataSource=null!==(a=null===t||void 0===t||null===(r=t.data)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.data)&&void 0!==a?a:[],e.pagination.total=null!==(o=null===t||void 0===t||null===(s=t.data)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.total)&&void 0!==o?o:0}))},confirmPop:function(e,t,a){this.$confirm({title:this.$t(e),content:this.$t(t),onOk:a})}},mounted:function(){this.getData()},computed:{widths:function(){return document.documentElement.clientWidth>720?720:document.documentElement.clientWidth},dataColumns:function(){var e=this;return this.columns.map((function(t){return t.title=e.$t("table."+t.key),t}))}}},E=x,R=(a("57e5"),a("0c7c")),k=Object(R["a"])(E,r,n,!1,null,"ad449c64",null);t["default"]=k.exports},7644:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4de4"),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("13d5"),core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("07ac"),core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__),D_code_webstorm_vue_antd_admin_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("5530"),D_code_webstorm_vue_antd_admin_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("2909");__webpack_exports__["a"]={name:"StandardTable",props:{bordered:Boolean,loading:[Boolean,Object],columns:Array,dataSource:Array,rowKey:{type:[String,Function],default:"key"},pagination:{type:[Object,Boolean],default:!0},selectedRows:Array,expandedRowKeys:Array,expandedRowRender:Function,scroll:Object},data:function(){return{needTotalList:[]}},methods:{equals:function(e,t){if(e===t)return!0;var a=this.rowKey;return a&&"string"===typeof a?e[a]===t[a]:!(!a||"function"!==typeof a)&&a(e)===a(t)},contains:function(e,t){if(!e||0===e.length)return!1;for(var a=this.equals,r=0;r<e.length;r++)if(a(e[r],t))return!0;return!1},onSelectAll:function(e,t){var a=this,r=this.getKey,n=this.contains,o=this.dataSource.filter((function(e){return!n(t,e,a.rowKey)})),s=this.selectedRows.filter((function(e){return!n(o,e,a.rowKey)})),i={};s.forEach((function(e){return i[r(e)]=e})),t.forEach((function(e){return i[r(e)]=e}));var c=Object.values(i);this.$emit("update:selectedRows",c),this.$emit("selectedRowChange",c.map((function(e){return r(e)})),c)},getKey:function(e){var t=this.rowKey;if(t&&e)return"string"===typeof t?e[t]:t(e)},onSelect:function(e,t){var a=this.equals,r=this.selectedRows,n=this.getKey,o=t?[].concat(Object(D_code_webstorm_vue_antd_admin_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["a"])(r),[e]):r.filter((function(t){return!a(t,e)}));this.$emit("update:selectedRows",o),this.$emit("selectedRowChange",o.map((function(e){return n(e)})),o)},initTotalList:function(e){return e.filter((function(e){return e.needTotal})).map((function(e){return Object(D_code_webstorm_vue_antd_admin_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["a"])(Object(D_code_webstorm_vue_antd_admin_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["a"])({},e),{},{total:0})}))},onClear:function(){this.$emit("update:selectedRows",[]),this.$emit("selectedRowChange",[],[]),this.$emit("clear")},onChange:function(e,t,a,r){var n=r.currentDataSource;this.$emit("change",e,t,a,{currentDataSource:n})}},created:function(){this.needTotalList=this.initTotalList(this.columns)},watch:{selectedRows:function selectedRows(_selectedRows2){this.needTotalList=this.needTotalList.map((function(item){return Object(D_code_webstorm_vue_antd_admin_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["a"])(Object(D_code_webstorm_vue_antd_admin_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["a"])({},item),{},{total:_selectedRows2.reduce((function(sum,val){var v;try{v=val[item.dataIndex]?val[item.dataIndex]:eval("val.".concat(item.dataIndex))}catch(_){v=val[item.dataIndex]}return v=isNaN(parseFloat(v))?0:parseFloat(v),sum+v}),0)})}))}},computed:{selectedRowKeys:function(){var e=this;return this.selectedRows.map((function(t){return e.getKey(t)}))}}}},d58f:function(e,t,a){var r=a("1c0b"),n=a("7b0b"),o=a("44ad"),s=a("50c4"),i=function(e){return function(t,a,i,c){r(a);var l=n(t),u=o(l),d=s(l.length),_=e?d-1:0,m=e?-1:1;if(i<2)while(1){if(_ in u){c=u[_],_+=m;break}if(_+=m,e?_<0:d<=_)throw TypeError("Reduce of empty array with no initial value")}for(;e?_>=0:d>_;_+=m)_ in u&&(c=a(c,u[_],_,l));return c}};e.exports={left:i(!1),right:i(!0)}}}]);