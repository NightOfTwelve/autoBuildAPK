
function linkok(url,msg){
    question = confirm(msg);
    if (question){
    window.location.href = url;
    }
}
$(document).ready(function() 
	    { 
	        $("#myTable").tablesorter(); 
	    } 
	); 
$(document).ready(function() 
	    { 
	        $("#sourcetable").tablesorter(); 
	    } 
	); 

$(document).ready(function(){
	  $("#envhide").click(function(){
	    $("#colation").slideToggle("slow");
	  $("#envhide").toggle(function(){$("#a").show("slow");},function(){$("#a").hide("slow");});
	  });
	});
$(document).ready(function(){
	$("#sourcehide").click(function(){
		$("#sourcehidediv").slideToggle("slow");
		$("#sourcehide").toggle(function(){$("#b").show("slow");},function(){$("#b").hide("slow");});
	});
	$("#xsghide").click(function(){
		$("#xsgcolation").slideToggle("slow");
		$("#xsghide").toggle(function(){$("#c").show("slow");},function(){$("#c").hide("slow");});
	});
});





//链接提示
this.imagePreview = function(a){ 
	/* CONFIG */
	  
	   xOffset = 10;
	   yOffset = 30;
	   
	   // 可以自己设定偏移值
	  
	/* END CONFIG */
	$("a.preview").hover(function(e){
		var $alt = $(this).attr("alt");
	   $("body").append("<div id='preview'>"+$alt+"</div>");        
	   $("#preview")
	    .css("top",(e.pageY - xOffset) + "px")
	    .css("left",(e.pageX + yOffset) + "px")
	    .fadeIn("slow");      
	    },
	function(){
	   $("#preview").fadeOut("fast");
	    }); 
	$("a.preview").mouseout(function(){
		      $('#preview').remove();
		   }),
	$("a.preview").mousemove(function(e){
	   $("#preview")
	    .css("top",(e.pageY - xOffset) + "px")
	    .css("left",(e.pageX + yOffset) + "px");
	});   
	};
	// 页面加载完执行
	$(document).ready(function(){
	imagePreview();
	});
	
//链接提示结束
//	function runcommand(v){
//		this.disabled = true; 
//		alert(v);
//	}
	$(document).ready(function(){
		$(":button").live("click",function(){
			var id = $(this).attr("id");
			$(this).attr("disabled",true);
			$(this).attr("value","Running...");
			$(this).attr("data-button","button"+id);
			$("."+id).html('<a class="preview" href="#" id="bar'+id+'"><img src="../image/load.gif" class="'+id+'" id="'+id+'" height="8px" width="40px"></a>');
			imagePreview();
			$.post("postmysql.php", 
					{ 
				SID:id
					}
			);
	});
		$("tr#a").mouseover(function(){
			$(this).css("background","#CCC");
		}).mouseout(function(){
			$(this).css("background","");
		});
	});
	
	
	
	$(document).ready(function(){
		$.ajaxSetup ({
		   	cache: false //关闭AJAX相应的缓存
		});
		$("img[class]").live("mouseover",function(){
			var id = $(this).attr("id");
			var datasum = $("#"+id).attr("data-sum");
			$.get( '../progress/'+id+'.progress',function(data,status){
				$("#bar"+id).attr("alt","Status:"+data+"/Total:"+datasum);
			});
			$.post("postmysql.php", 
					{ 
				y:"2983",
				yy:id
					},
					function (data){
					 if(data==0){
						 $(":button[id="+id+"]").attr("value","完成");
					 }
					 
					}
			);
		});
	});
	
	
	
//  UPFILE文件内使用的
	$(document).ready(function(){
		$("#add").live("click",function(){   
			var _hide=$(".hide"),
			uid =parseInt(_hide.attr("id"));
			if(uid>=9){
				return false;
			}
			var _inputhide= $("input:hidden"),
			ver = _inputhide.attr("id"),
			cla = _inputhide.attr("class");
			uid++;
			_hide.attr("id",uid); 
			_inputhide.attr("value",uid);
//			$("#all").append('<div class="upleft"  id="upleft"><div class="upbrowse" id="'+uid+'"><input name="upfile[]" type="file"  id="upfile'+uid+'"  onchange="if(!upFileName(this.id)){this.value = \'\'}; "></div><p>包　名：<span id="span'+uid+'"></span></p><p>版本号：<input type="text" class="ver" name="ver'+uid+'" id="text'+uid+'" placeholder="'+ver+'" onchange="if (this.value.search(/^[a-zA-Z0-9\.]*$/g)== -1){alert("抱歉，只能输入 \'a-zA-Z0-9.\'"); this.value = \'\'; this.focus(); }"></p><p>VersionCode号：<input type="text" class="versioncode" name="versioncode'+uid+'" id="versioncode'+uid+'" placeholder="'+cla+'" onchange="if (this.value.search(/^[0-9]*$/g)== -1){alert("抱歉，只能输入数字！！"); this.value = \'\'; this.focus(); }"></p><p>环　境：<select name="plat'+uid+'" id="plat'+uid+'"><option value="-1">请选此包对应环境</option></select></p><p>功　能：<select name="flat'+uid+'" id="flat'+uid+'"><option value="-1">请选此包对应功能</option></select></p></div><br>');
			$("#all").append('<div class="upleft"  id="upleft'+uid+'">'
					+'<div class="upbrowse" id="upbrowse'+uid+'" date-id="'+uid+'">'
					+'<input name="upfile[]" type="file"  id="upfile'+uid+'"  onchange="if(!upFileName(this.id)){this.value = \'\'};this.focus(); "></div>'
						+'<p>包　名：<span id="span'+uid+'" date-y="n"></span></p>'
						+'<p>版本号：<input type="text" class="ver" name="ver'+uid+'" id="text'+uid+'" placeholder="'+ver+'" onchange="return test(0,this.id,this.value)"></p>'
						+'<p>VersionCode号：<input type="text" class="versioncode" name="versioncode'+uid+'" id="versioncode'+uid+'" placeholder="'+cla+'" onchange="return test(1,this.id,this.value)"></p>'
						+'<p>平　台：<select name="clientplatform'+uid+'" id="clientplatform'+uid+'"><option value="-1">请选此包对应平台</option><option value="0">Vancl</option><option value="1">Xsg</option></select></p>'
						+'<p>环　境：<select name="plat'+uid+'" id="plat'+uid+'"><option value="-1">请选此包对应环境</option></select></p>'
						+'<p>功　能：<select name="flat'+uid+'" id="flat'+uid+'"><option value="-1">请选此包对应功能</option></select></p>'
						+'<br></div>');
//			$("#all").append('<div class="upleft"  id="upleft'+uid+'">'
//					+'<div class="upbrowse" id="upbrowse'+uid+'" date-id="'+uid+'">'
//					+'<input name="upfile[]" type="file"  id="upfile'+uid+'"  onchange="if(!upFileName(this.id)){this.value = \'\'};this.focus(); "></div>'
//						+'<p>包　名：<span id="span'+uid+'"></span></p>'
//						+'<p>版本号：<input type="text" class="ver" name="ver'+uid+'" id="text'+uid+'" placeholder="'+ver+'" onchange="if (this.value.search(/^[a-zA-Z0-9\.]*$/g)== -1){alert("抱歉，只能输入 \'a-zA-Z0-9.\'"); this.value = \'\'; this.focus(); }"></p>'
//						+'<p>VersionCode号：<input type="text" class="versioncode" name="versioncode'+uid+'" id="versioncode'+uid+'" placeholder="'+cla+'" onchange="if (this.value.search(/^[0-9]*$/g)== -1){alert("抱歉，只能输入数字！！"); this.value = \'\'; this.focus(); }"></p>'
//						+'<p>VersionCode号：<input type="text" class="versioncode" name="versioncode'+uid+'" id="versioncode'+uid+'" placeholder="'+cla+'" onchange="return test(this.value)"></p>'
//						+'<p>环　境：<select name="plat'+uid+'" id="plat'+uid+'"><option value="-1">请选此包对应环境</option></select></p>'
//						+'<p>功　能：<select name="flat'+uid+'" id="flat'+uid+'"><option value="-1">请选此包对应功能</option></select></p>'
//						+'<br></div>');
			
		});
		$("#del").live("click",function(){  
			var _hide=$(".hide"),
			_inputhide= $("input:hidden"),
			uid = _hide.attr("id");
			if(uid==1){
				return false;
			}
			$("#upleft"+uid).hide("1");
			$("#upbrowse"+uid).parent().remove();
			var uid = uid*1 - 1*1;
			_hide.attr("id",uid);
			_inputhide.attr("value",uid);
		});

	});

	function upFileName(id){ //判断包
		var file=$("#"+id).val();
		var apk=file;
		var z=file;
		var idd=id;
		var idz=idd.replace(/.*[a-zA-Z]/g,"");
//		alert(idz);
		var grepname=/^[0-9a-zA-Z_\.]+$/g;
		var filename=file.replace(/.*(\/|\\)/, "");//windows or  linux
		var type =z.substr(z.lastIndexOf("."));
		var grepapk=/.apk$/;
		if(!grepapk.test(apk) || !grepname.test(filename) ){
			alert("文件名或扩展名不符合规则!\r\n正确格式：\r扩展名:APK\r包名可包含：半角数字(0-9)、英文字母(a-zA-Z)、下划线(_)、句号(.)");
			$("#span"+idz).html("请添加无签名渠道包");
			return false;
		}
//		alert(filename);
		$("#span"+idz).attr("date-y","1");
		$("#span"+idz).html(filename);
		return true;
		
	}
	function getSelect(){
		var j=0;
		$("select[id^=plat]").each(function(i,o){  
			if($(this).children().length>1){  
				j=(i+1);
				return false;
			}
		});
		return j;
	}
	$(document).ready(function(){
		$(".ver").live("focus",function(){
			var that=$(this),
			id=that.parents(".upleft").children(".upbrowse").attr("date-id"),
			_plat=$("#plat"+id),
			_flat=$("#flat"+id);
			_clientplat=$("#clientplatform"+id);
			plat1=$("#plat1");
			var i=getSelect();
//			alert(i);
			if(i>0){
				plat1=$("#plat"+i);
			}
			if(_plat.children().length>1 && _flat.children().length>1){
				 
				return true;
			}else{
				if(plat1.length>0 && plat1.children().length>1){
					var _platData=plat1.html();
					var _clientplatData=$("#clientplatform"+i).html();
					var _flatData=$("#flat"+i).html();
					_plat.html(_platData);
					_clientplat.html(_clientplatData);
					_flat.html(_flatData);
//					alert(i+"如这里有，则直接复制过来");
				}else{
					
//					alert(i+"里没有，重新请求数据");
					$.post("postmysql.php", 
							{ 
						p:"1"
							},
							function (data){
								 
								_plat.html(data);  
							}
					);
					$.post("postmysql.php", 
							{ 
						t:"2"
							},
							function (data){
							 
								_flat.html(data); 
							}
					);
				}}
		   });
	    $(":submit").live("click",function(){ //提交做判断
	    	var _hide=$(".hide");
	    	id = _hide.attr("id");
	    	var dateid = $("#span"+id).attr("date-y");//默认值为n
	    		for(i=1;i<=id;i++){ //判断所有页面数据
	    			var sd=$("#span"+i).attr("date-y");
	    			var vv=$("#ver"+i).attr("value");
	    			var cp=$("#clientplatform"+i).attr("value");
	    			var vc=$("#versioncode"+i).attr("value");
	    			var sp=$("#plat"+i).attr("value");
	    			var sptext=$("#plat"+i).find("").html();
//	    			alert("aaaaaaaaa"+sptext);
	    			var sf=$("#flat"+i).attr("value");
	    			if(sd=="n"){
	    				alert("有文件未添加!");
	    				return false;
	    			}
	    			if(cp=="-1"){
	    				alert("平台不能为空!");
	    				return false;
	    			}
	    			if(sd=="n"){
	    				alert("有文件未添加!");
	    				return false;
	    			}
	    			if(vc==""){
	    				alert("有VersionCode号不能为空!");
	    				return false;
	    			}
	    			if(sp=="-1"){
	    				alert("环境未选取!");
	    				return false;
	    			}
	    			if(sf=="-1"){
	    				alert("功能未选取!");
	    				return false;
	    			}
	    		};  	
	    });
	    
	}); 
	
	
	function test(i,idd,val){ //实践
		var grepcode=/^[0-9]*$/g;//数字
		var grepver=/^[0-9a-zA-Z\.]*$/g;//a-zA-Z0-9.
		if (i==1 && !grepcode.test(val)||i==1 && val=="")
		{
			alert("抱歉，只能输入半角数字！！"); 
			return false;
		}
		if (i==0 && !grepver.test(val)|| i==0 && val=="" )
		{
			alert("抱歉，只能输入半角a-zA-Z0-9及小数点"); 
			this.focus(); 
			return false;
		}
		
	}
