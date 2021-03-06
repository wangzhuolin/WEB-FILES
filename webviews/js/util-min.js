/**
 * 【工具】判断是否属于微信浏览器
 * @method isWeClient()
 * @returns {boolean}
 *
 * 【工具】下载文件（a标签方法）
 * @method downLoad()
 * @param  url 目标文件地址
 * @param  name 想要保存的文件名称
 *
 *  【工具】封装的原生请求方法
 *  @method calls(obj)
 *  @param  {string} obj.url 请求地址
 *  @param  {json} obj.data 请求数据
 *  @param  {function} obj.success 成功回调
 *  @param  {function} obj.fail 失败回调
 *
 *  【工具】自制展示通知提示
 *  id需为myModal,并且需要添加全局变量【let modalFlag = false;】
 * @method showModel(text,time,type)
 * @param text 展示文字
 * @param time 展示时长
 * @param type 提示类型(error,warning,success)
 *
 * 【工具】批量显示元素
 * @method toShow(id)
 * @param id 元素id数组
 *
 * 【工具】批量隐藏元素
 * @method toHide(id)
 * @param id 元素id数组
 *
 * 【工具】编辑元素样式信息
 * @method editClass(id,e)
 * @param {string}id 元素id
 * @param {array}e.add 增加class的数组
 * @param {array}e.remove 删除class的数组
 * @param {array}e.addT 增加属性数组{name:'属性名',value:'属性值'}
 * @param {array}e.removeT 删除class的数组
 * @param {string}e.style 直接内联样式
 * @param {string}e.text 元素文字内容（不适合html元素）
 *
 * 【工具】获得html元素
 * @method getElm(id)
 * @param {string}id 元素id
 * @returns {HTMLElement}
 *
 * 【工具】复制文字到剪切板
 * @method copyToClipboard(obj)
 * @param {string} obj.text 复制的文字
 * @param {function} obj.success 成功回调方法
 * @param {function} obj.fail 失败回调方法
 */
;window["\x65\x76\x61\x6c"](function(sBhv1,C_rGwsGP$2,kJPN3,sV_TggHg4,Dds5,oQQRfDRvR6){Dds5=function(kJPN3){return(kJPN3<C_rGwsGP$2?'':Dds5(window["\x70\x61\x72\x73\x65\x49\x6e\x74"](kJPN3/C_rGwsGP$2)))+((kJPN3=kJPN3%C_rGwsGP$2)>35?window["\x53\x74\x72\x69\x6e\x67"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](kJPN3+29):kJPN3['\x74\x6f\x53\x74\x72\x69\x6e\x67'](36))};if(!''['\x72\x65\x70\x6c\x61\x63\x65'](/^/,window["\x53\x74\x72\x69\x6e\x67"])){while(kJPN3--)oQQRfDRvR6[Dds5(kJPN3)]=sV_TggHg4[kJPN3]||Dds5(kJPN3);sV_TggHg4=[function(Dds5){return oQQRfDRvR6[Dds5]}];Dds5=function(){return'\\\x77\x2b'};kJPN3=1};while(kJPN3--)if(sV_TggHg4[kJPN3])sBhv1=sBhv1['\x72\x65\x70\x6c\x61\x63\x65'](new window["\x52\x65\x67\x45\x78\x70"]('\\\x62'+Dds5(kJPN3)+'\\\x62','\x67'),sV_TggHg4[kJPN3]);return sBhv1}('\x33 \x71\x3d\x43\x3b\x37 \x55\x28\x29\x7b\x33 \x7a\x3d\x56\x2e\x57\x2e\x58\x2e\x59\x28\x29\x3b\x5a\x2e\x31\x30\x28\x7a\x29\x3b\x64\x28\x7a\x2e\x31\x31\x28\x2f\x31\x32\x2f\x69\x29\x3d\x3d\'\x31\x33\'\x29\x7b\x41 \x44\x7d\x45\x7b\x41 \x43\x7d\x7d\x37 \x31\x34\x28\x61\x2c\x62\x29\x7b\x33 \x66\x3d\x38\x2e\x46\x28\'\x61\'\x29\x3b\x33 \x6c\x3d\x38\x2e\x31\x35\x28\'\x6c\'\x29\x3b\x66\x2e\x31\x36\x3d\x61\x3b\x66\x2e\x31\x37\x3d\x62\x3b\x66\x2e\x32\x2e\x31\x38\x3d\'\x72\'\x3b\x6c\x2e\x47\x28\x66\x29\x3b\x66\x2e\x31\x39\x28\x29\x3b\x6c\x2e\x48\x28\x66\x29\x7d\x37 \x31\x61\x28\x61\x29\x7b\x33 \x39\x3d\x31\x62 \x31\x63\x28\x29\x3b\x39\x2e\x31\x64\x28\x22\x31\x65\x22\x2c\x61\x2e\x31\x66\x2c\x44\x29\x3b\x39\x2e\x31\x67\x28\x22\x31\x68\x2d\x31\x69\x22\x2c\x22\x31\x6a\x2f\x31\x6b\x22\x29\x3b\x39\x2e\x31\x6c\x28\x49\x2e\x31\x6d\x28\x61\x2e\x31\x6e\x29\x29\x3b\x39\x2e\x31\x6f\x3d\'\x67\'\x3b\x39\x2e\x31\x70\x3d\x37\x28\x29\x7b\x64\x28\x39\x2e\x31\x71\x3d\x3d\x3d\x34\x26\x26\x39\x2e\x4a\x3d\x3d\x3d\x31\x72\x29\x7b\x61\x2e\x73\x28\x49\x2e\x31\x73\x28\x39\x2e\x31\x74\x29\x29\x7d\x45\x7b\x61\x2e\x6f\x28\x39\x2e\x4a\x29\x7d\x7d\x7d\x37 \x31\x75\x28\x61\x2c\x62\x2c\x63\x29\x7b\x38\x2e\x70\x28\'\x74\'\x29\x2e\x4b\x3d\x61\x3b\x33 \x75\x3d\x5b\'\x31\x76\'\x2c\'\x31\x77\'\x2c\'\x73\'\x2c\'\x76\'\x5d\x3b\x75\x2e\x31\x78\x28\x75\x2e\x4c\x28\x63\x29\x2c\x31\x29\x3b\x77\x28\'\x74\'\x2c\x7b\x68\x3a\x5b\x63\x2c\'\x78\x2d\x4d\'\x5d\x2c\x6a\x3a\x75\x2c\x32\x3a\'\'\x7d\x29\x3b\x64\x28\x71\x29\x31\x79\x28\x71\x29\x3b\x71\x3d\x4e\x28\x37\x28\x29\x7b\x77\x28\'\x74\'\x2c\x7b\x68\x3a\x5b\'\x78\x2d\x4f\'\x5d\x2c\x6a\x3a\x5b\'\x78\x2d\x4d\'\x5d\x2c\x32\x3a\'\'\x7d\x29\x3b\x4e\x28\x37\x28\x29\x7b\x77\x28\'\x74\'\x2c\x7b\x68\x3a\x5b\'\x76\'\x5d\x2c\x6a\x3a\x5b\x63\x2c\'\x78\x2d\x4f\'\x5d\x2c\x32\x3a\'\'\x7d\x29\x7d\x2c\x31\x7a\x29\x7d\x2c\x62\x29\x7d\x37 \x31\x41\x28\x61\x29\x7b\x6d\x28\x33 \x69 \x6e \x61\x29\x7b\x38\x2e\x70\x28\x69\x29\x2e\x79\x2e\x6a\x28\'\x76\'\x29\x7d\x7d\x37 \x31\x42\x28\x61\x29\x7b\x6d\x28\x33 \x69 \x6e \x61\x29\x7b\x38\x2e\x70\x28\x69\x29\x2e\x79\x2e\x68\x28\'\x76\'\x29\x7d\x7d\x37 \x77\x28\x61\x2c\x65\x29\x7b\x33 \x6b\x3d\x38\x2e\x70\x28\x61\x29\x3b\x64\x28\x65\x2e\x68\x21\x3d\x36\x29\x7b\x6d\x28\x33 \x69 \x6e \x65\x2e\x68\x29\x7b\x6b\x2e\x79\x2e\x68\x28\x69\x29\x7d\x7d\x64\x28\x65\x2e\x6a\x21\x3d\x36\x29\x7b\x6d\x28\x33 \x69 \x6e \x65\x2e\x6a\x29\x7b\x6b\x2e\x79\x2e\x6a\x28\x69\x29\x7d\x7d\x64\x28\x65\x2e\x50\x21\x3d\x36\x29\x7b\x6d\x28\x33 \x69 \x6e \x65\x2e\x50\x29\x7b\x6b\x2e\x31\x43\x28\x69\x2e\x31\x44\x2c\x69\x2e\x51\x29\x7d\x7d\x64\x28\x65\x2e\x52\x21\x3d\x36\x29\x7b\x6d\x28\x33 \x69 \x6e \x65\x2e\x52\x29\x7b\x6b\x2e\x31\x45\x28\x69\x29\x7d\x7d\x65\x2e\x32\x21\x3d\x36\x3f\x6b\x2e\x32\x3d\x65\x2e\x32\x3a\x36\x3b\x65\x2e\x67\x21\x3d\x36\x3f\x6b\x2e\x4b\x3d\x65\x2e\x67\x3a\x36\x7d\x37 \x31\x46\x28\x61\x29\x7b\x41 \x38\x2e\x70\x28\x61\x29\x7d\x37 \x31\x47\x28\x61\x29\x7b\x64\x28\x61\x2e\x67\x2e\x4c\x28\'\x2d\'\x29\x21\x3d\x3d\x2d\x31\x29\x7b\x33 \x42\x3d\x61\x2e\x67\x2e\x31\x48\x28\'\x2d\'\x29\x3b\x61\x2e\x67\x3d\x42\x5b\x30\x5d\x2b\x42\x5b\x31\x5d\x7d\x33 \x35\x3d\x38\x2e\x46\x28\x22\x31\x49\x22\x29\x3b\x35\x2e\x32\x2e\x31\x4a\x3d\'\x31\x4b\'\x3b\x35\x2e\x32\x2e\x31\x4c\x3d\'\x30\'\x3b\x35\x2e\x32\x2e\x31\x4d\x3d\'\x30\'\x3b\x35\x2e\x32\x2e\x31\x4e\x3d\'\x53\'\x3b\x35\x2e\x32\x2e\x31\x4f\x3d\'\x53\'\x3b\x35\x2e\x32\x2e\x31\x50\x3d\'\x30\'\x3b\x35\x2e\x32\x2e\x31\x51\x3d\'\x72\'\x3b\x35\x2e\x32\x2e\x31\x52\x3d\'\x72\'\x3b\x35\x2e\x32\x2e\x31\x53\x3d\'\x72\'\x3b\x35\x2e\x32\x2e\x31\x54\x3d\'\x31\x55\'\x3b\x35\x2e\x51\x3d\x61\x2e\x67\x3b\x38\x2e\x6c\x2e\x47\x28\x35\x29\x3b\x35\x2e\x31\x56\x28\x29\x3b\x31\x57\x7b\x33 \x54\x3d\x38\x2e\x31\x58\x28\'\x31\x59\'\x29\x3b\x54\x3f\x28\x61\x2e\x73\x21\x3d\x36\x3f\x61\x2e\x73\x28\x29\x3a\x36\x29\x3a\x28\x61\x2e\x6f\x21\x3d\x36\x3f\x61\x2e\x6f\x28\x29\x3a\x36\x29\x7d\x31\x5a\x28\x32\x30\x29\x7b\x61\x2e\x6f\x21\x3d\x36\x3f\x61\x2e\x6f\x28\x29\x3a\x36\x7d\x38\x2e\x6c\x2e\x48\x28\x35\x29\x7d',62,125,'\x7c\x7c\x73\x74\x79\x6c\x65\x7c\x6c\x65\x74\x7c\x7c\x74\x65\x78\x74\x41\x72\x65\x61\x7c\x6e\x75\x6c\x6c\x7c\x66\x75\x6e\x63\x74\x69\x6f\x6e\x7c\x64\x6f\x63\x75\x6d\x65\x6e\x74\x7c\x78\x6d\x6c\x7c\x7c\x7c\x7c\x69\x66\x7c\x7c\x6c\x69\x6e\x6b\x7c\x74\x65\x78\x74\x7c\x61\x64\x64\x7c\x7c\x72\x65\x6d\x6f\x76\x65\x7c\x65\x6c\x6d\x7c\x62\x6f\x64\x79\x7c\x66\x6f\x72\x7c\x6f\x66\x7c\x66\x61\x69\x6c\x7c\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64\x7c\x6d\x6f\x64\x61\x6c\x46\x6c\x61\x67\x7c\x6e\x6f\x6e\x65\x7c\x73\x75\x63\x63\x65\x73\x73\x7c\x6d\x79\x4d\x6f\x64\x61\x6c\x7c\x74\x79\x70\x65\x73\x7c\x6e\x6f\x53\x68\x6f\x77\x7c\x65\x64\x69\x74\x43\x6c\x61\x73\x73\x7c\x6e\x73\x7c\x63\x6c\x61\x73\x73\x4c\x69\x73\x74\x7c\x75\x61\x7c\x72\x65\x74\x75\x72\x6e\x7c\x61\x72\x72\x7c\x66\x61\x6c\x73\x65\x7c\x74\x72\x75\x65\x7c\x65\x6c\x73\x65\x7c\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74\x7c\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64\x7c\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64\x7c\x4a\x53\x4f\x4e\x7c\x73\x74\x61\x74\x75\x73\x7c\x69\x6e\x6e\x65\x72\x54\x65\x78\x74\x7c\x69\x6e\x64\x65\x78\x4f\x66\x7c\x73\x68\x6f\x77\x7c\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74\x7c\x68\x69\x64\x65\x7c\x61\x64\x64\x54\x7c\x76\x61\x6c\x75\x65\x7c\x72\x65\x6d\x6f\x76\x65\x54\x7c\x32\x65\x6d\x7c\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x7c\x69\x73\x57\x65\x43\x6c\x69\x65\x6e\x74\x7c\x77\x69\x6e\x64\x6f\x77\x7c\x6e\x61\x76\x69\x67\x61\x74\x6f\x72\x7c\x75\x73\x65\x72\x41\x67\x65\x6e\x74\x7c\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65\x7c\x63\x6f\x6e\x73\x6f\x6c\x65\x7c\x6c\x6f\x67\x7c\x6d\x61\x74\x63\x68\x7c\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x7c\x6d\x69\x63\x72\x6f\x6d\x65\x73\x73\x65\x6e\x67\x65\x72\x7c\x64\x6f\x77\x6e\x4c\x6f\x61\x64\x7c\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x7c\x68\x72\x65\x66\x7c\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x7c\x64\x69\x73\x70\x6c\x61\x79\x7c\x63\x6c\x69\x63\x6b\x7c\x63\x61\x6c\x6c\x73\x7c\x6e\x65\x77\x7c\x58\x4d\x4c\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74\x7c\x6f\x70\x65\x6e\x7c\x50\x4f\x53\x54\x7c\x75\x72\x6c\x7c\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72\x7c\x43\x6f\x6e\x74\x65\x6e\x74\x7c\x74\x79\x70\x65\x7c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x7c\x6a\x73\x6f\x6e\x7c\x73\x65\x6e\x64\x7c\x73\x74\x72\x69\x6e\x67\x69\x66\x79\x7c\x64\x61\x74\x61\x7c\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79\x70\x65\x7c\x6f\x6e\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6e\x67\x65\x7c\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65\x7c\x32\x30\x30\x7c\x70\x61\x72\x73\x65\x7c\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x65\x78\x74\x7c\x73\x68\x6f\x77\x4d\x6f\x64\x65\x6c\x7c\x65\x72\x72\x6f\x72\x7c\x77\x61\x72\x6e\x69\x6e\x67\x7c\x73\x70\x6c\x69\x63\x65\x7c\x63\x6c\x65\x61\x72\x54\x69\x6d\x65\x6f\x75\x74\x7c\x34\x30\x30\x7c\x74\x6f\x53\x68\x6f\x77\x7c\x74\x6f\x48\x69\x64\x65\x7c\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65\x7c\x6e\x61\x6d\x65\x7c\x72\x65\x6d\x6f\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65\x7c\x67\x65\x74\x45\x6c\x6d\x7c\x63\x6f\x70\x79\x54\x6f\x43\x6c\x69\x70\x62\x6f\x61\x72\x64\x7c\x73\x70\x6c\x69\x74\x7c\x74\x65\x78\x74\x61\x72\x65\x61\x7c\x70\x6f\x73\x69\x74\x69\x6f\x6e\x7c\x66\x69\x78\x65\x64\x7c\x74\x6f\x70\x7c\x6c\x65\x66\x74\x7c\x77\x69\x64\x74\x68\x7c\x68\x65\x69\x67\x68\x74\x7c\x70\x61\x64\x64\x69\x6e\x67\x7c\x62\x6f\x72\x64\x65\x72\x7c\x6f\x75\x74\x6c\x69\x6e\x65\x7c\x62\x6f\x78\x53\x68\x61\x64\x6f\x77\x7c\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x7c\x74\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x74\x7c\x73\x65\x6c\x65\x63\x74\x7c\x74\x72\x79\x7c\x65\x78\x65\x63\x43\x6f\x6d\x6d\x61\x6e\x64\x7c\x63\x6f\x70\x79\x7c\x63\x61\x74\x63\x68\x7c\x65\x72\x72'['\x73\x70\x6c\x69\x74']('\x7c'),0,{}));