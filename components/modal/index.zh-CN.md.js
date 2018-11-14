webpackJsonp([171],{1845:function(t,n){t.exports={content:["section",["p","\u6a21\u6001\u5bf9\u8bdd\u6846\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u9700\u8981\u7528\u6237\u5904\u7406\u4e8b\u52a1\uff0c\u53c8\u4e0d\u5e0c\u671b\u8df3\u8f6c\u9875\u9762\u4ee5\u81f4\u6253\u65ad\u5de5\u4f5c\u6d41\u7a0b\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",["code","Modal"]," \u5728\u5f53\u524d\u9875\u9762\u6b63\u4e2d\u6253\u5f00\u4e00\u4e2a\u6d6e\u5c42\uff0c\u627f\u8f7d\u76f8\u5e94\u7684\u64cd\u4f5c\u3002"],["p","\u53e6\u5916\u5f53\u9700\u8981\u4e00\u4e2a\u7b80\u6d01\u7684\u786e\u8ba4\u6846\u8be2\u95ee\u7528\u6237\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u7cbe\u5fc3\u5c01\u88c5\u597d\u7684 ",["code","antd.Modal.confirm()"]," \u7b49\u65b9\u6cd5\u3002"]],meta:{type:"\u53cd\u9988",category:"Components",subtitle:"\u5bf9\u8bdd\u6846",title:"Modal",filename:"components/modal/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","afterClose"],["td","Modal \u5b8c\u5168\u5173\u95ed\u540e\u7684\u56de\u8c03"],["td","function"],["td","\u65e0"]],["tr",["td","bodyStyle"],["td","Modal body \u6837\u5f0f"],["td","object"],["td","{}"]],["tr",["td","cancelText"],["td","\u53d6\u6d88\u6309\u94ae\u6587\u5b57"],["td","string"],["td","\u53d6\u6d88"]],["tr",["td","centered"],["td","\u5782\u76f4\u5c45\u4e2d\u5c55\u793a Modal"],["td","Boolean"],["td",["code","false"]]],["tr",["td","closable"],["td","\u662f\u5426\u663e\u793a\u53f3\u4e0a\u89d2\u7684\u5173\u95ed\u6309\u94ae"],["td","boolean"],["td","true"]],["tr",["td","confirmLoading"],["td","\u786e\u5b9a\u6309\u94ae loading"],["td","boolean"],["td","\u65e0"]],["tr",["td","destroyOnClose"],["td","\u5173\u95ed\u65f6\u9500\u6bc1 Modal \u91cc\u7684\u5b50\u5143\u7d20"],["td","boolean"],["td","false"]],["tr",["td","footer"],["td","\u5e95\u90e8\u5185\u5bb9\uff0c\u5f53\u4e0d\u9700\u8981\u9ed8\u8ba4\u5e95\u90e8\u6309\u94ae\u65f6\uff0c\u53ef\u4ee5\u8bbe\u4e3a ",["code","footer={null}"]],["td","string","|","ReactNode"],["td","\u786e\u5b9a\u53d6\u6d88\u6309\u94ae"]],["tr",["td","getContainer"],["td","\u6307\u5b9a Modal \u6302\u8f7d\u7684 HTML \u8282\u70b9"],["td","(instance): HTMLElement"],["td","() => document.body"]],["tr",["td","keyboard"],["td","\u662f\u5426\u652f\u6301\u952e\u76d8esc\u5173\u95ed"],["td","boolean"],["td","true"]],["tr",["td","mask"],["td","\u662f\u5426\u5c55\u793a\u906e\u7f69"],["td","Boolean"],["td","true"]],["tr",["td","maskClosable"],["td","\u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed"],["td","boolean"],["td","true"]],["tr",["td","maskStyle"],["td","\u906e\u7f69\u6837\u5f0f"],["td","object"],["td","{}"]],["tr",["td","okText"],["td","\u786e\u8ba4\u6309\u94ae\u6587\u5b57"],["td","string"],["td","\u786e\u5b9a"]],["tr",["td","okType"],["td","\u786e\u8ba4\u6309\u94ae\u7c7b\u578b"],["td","string"],["td","primary"]],["tr",["td","okButtonProps"],["td","ok \u6309\u94ae props"],["td",["a",{title:null,href:"/components/button"},"ButtonProps"]],["td","-"]],["tr",["td","cancelButtonProps"],["td","cancel \u6309\u94ae props"],["td",["a",{title:null,href:"/components/button"},"ButtonProps"]],["td","-"]],["tr",["td","style"],["td","\u53ef\u7528\u4e8e\u8bbe\u7f6e\u6d6e\u5c42\u7684\u6837\u5f0f\uff0c\u8c03\u6574\u6d6e\u5c42\u4f4d\u7f6e\u7b49"],["td","object"],["td","-"]],["tr",["td","title"],["td","\u6807\u9898"],["td","string","|","ReactNode"],["td","\u65e0"]],["tr",["td","visible"],["td","\u5bf9\u8bdd\u6846\u662f\u5426\u53ef\u89c1"],["td","boolean"],["td","\u65e0"]],["tr",["td","width"],["td","\u5bbd\u5ea6"],["td","string","|","number"],["td","520"]],["tr",["td","wrapClassName"],["td","\u5bf9\u8bdd\u6846\u5916\u5c42\u5bb9\u5668\u7684\u7c7b\u540d"],["td","string"],["td","-"]],["tr",["td","zIndex"],["td","\u8bbe\u7f6e Modal \u7684 ",["code","z-index"]],["td","Number"],["td","1000"]],["tr",["td","onCancel"],["td","\u70b9\u51fb\u906e\u7f69\u5c42\u6216\u53f3\u4e0a\u89d2\u53c9\u6216\u53d6\u6d88\u6309\u94ae\u7684\u56de\u8c03"],["td","function(e)"],["td","\u65e0"]],["tr",["td","onOk"],["td","\u70b9\u51fb\u786e\u5b9a\u56de\u8c03"],["td","function(e)"],["td","\u65e0"]]]],["h4","\u6ce8\u610f"],["blockquote",["p",["code","<Modal />"]," \u9ed8\u8ba4\u5173\u95ed\u540e\u72b6\u6001\u4e0d\u4f1a\u81ea\u52a8\u6e05\u7a7a, \u5982\u679c\u5e0c\u671b\u6bcf\u6b21\u6253\u5f00\u90fd\u662f\u65b0\u5185\u5bb9\uff0c\u8bf7\u8bbe\u7f6e ",["code","destroyOnClose"],"\u3002"]],["h3","Modal.method()"],["p","\u5305\u62ec\uff1a"],["ul",["li",["p",["code","Modal.info"]]],["li",["p",["code","Modal.success"]]],["li",["p",["code","Modal.error"]]],["li",["p",["code","Modal.warning"]]],["li",["p",["code","Modal.confirm"]]]],["p","\u4ee5\u4e0a\u5747\u4e3a\u4e00\u4e2a\u51fd\u6570\uff0c\u53c2\u6570\u4e3a object\uff0c\u5177\u4f53\u5c5e\u6027\u5982\u4e0b\uff1a"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","autoFocusButton"],["td","\u6307\u5b9a\u81ea\u52a8\u83b7\u5f97\u7126\u70b9\u7684\u6309\u94ae"],["td","null","|","string: ",["code","ok"]," ",["code","cancel"]],["td",["code","ok"]]],["tr",["td","cancelText"],["td","\u53d6\u6d88\u6309\u94ae\u6587\u5b57"],["td","string"],["td","\u53d6\u6d88"]],["tr",["td","centered"],["td","\u5782\u76f4\u5c45\u4e2d\u5c55\u793a Modal"],["td","Boolean"],["td",["code","false"]]],["tr",["td","className"],["td","\u5bb9\u5668\u7c7b\u540d"],["td","string"],["td","-"]],["tr",["td","content"],["td","\u5185\u5bb9"],["td","string","|","ReactNode"],["td","\u65e0"]],["tr",["td","iconType"],["td","\u56fe\u6807 Icon \u7c7b\u578b"],["td","string"],["td","question-circle"]],["tr",["td","maskClosable"],["td","\u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed"],["td","Boolean"],["td",["code","false"]]],["tr",["td","okText"],["td","\u786e\u8ba4\u6309\u94ae\u6587\u5b57"],["td","string"],["td","\u786e\u5b9a"]],["tr",["td","okType"],["td","\u786e\u8ba4\u6309\u94ae\u7c7b\u578b"],["td","string"],["td","primary"]],["tr",["td","okButtonProps"],["td","ok \u6309\u94ae props"],["td",["a",{title:null,href:"/components/button"},"ButtonProps"]],["td","-"]],["tr",["td","cancelButtonProps"],["td","cancel \u6309\u94ae props"],["td",["a",{title:null,href:"/components/button"},"ButtonProps"]],["td","-"]],["tr",["td","title"],["td","\u6807\u9898"],["td","string","|","ReactNode"],["td","\u65e0"]],["tr",["td","width"],["td","\u5bbd\u5ea6"],["td","string","|","number"],["td","416"]],["tr",["td","zIndex"],["td","\u8bbe\u7f6e Modal \u7684 ",["code","z-index"]],["td","Number"],["td","1000"]],["tr",["td","onCancel"],["td","\u53d6\u6d88\u56de\u8c03\uff0c\u53c2\u6570\u4e3a\u5173\u95ed\u51fd\u6570\uff0c\u8fd4\u56de promise \u65f6 resolve \u540e\u81ea\u52a8\u5173\u95ed"],["td","function"],["td","\u65e0"]],["tr",["td","onOk"],["td","\u70b9\u51fb\u786e\u5b9a\u56de\u8c03\uff0c\u53c2\u6570\u4e3a\u5173\u95ed\u51fd\u6570\uff0c\u8fd4\u56de promise \u65f6 resolve \u540e\u81ea\u52a8\u5173\u95ed"],["td","function"],["td","\u65e0"]]]],["p","\u4ee5\u4e0a\u51fd\u6570\u8c03\u7528\u540e\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5f15\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u5f15\u7528\u66f4\u65b0\u548c\u5173\u95ed\u5f39\u7a97\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> modal <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodal<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u4fee\u6539\u7684\u6807\u9898\'</span><span class="token punctuation">,</span>\n  content<span class="token punctuation">:</span> <span class="token string">\'\u4fee\u6539\u7684\u5185\u5bb9\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodal<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","const modal = Modal.info();\n\nmodal.update({\n  title: '\u4fee\u6539\u7684\u6807\u9898',\n  content: '\u4fee\u6539\u7684\u5185\u5bb9',\n});\n\nmodal.destroy();"]],["style","\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n}\n"]]}}});