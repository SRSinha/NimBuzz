// secure or not?

var ad_width = ad_width ? ad_width : '100%' ;
var ad_height = ad_height ? ad_height : '0' ;

var finalwidth="%3Cimg  id='bnrid' src='images/1.jpg' style='width:"+ ad_width +"; ";
if(ad_height=='0')
	fheight= "";
else
	var fheight="height:"+ ad_height + "; ";
document.write(unescape( finalwidth + fheight + " '  /%3E "));


//document.write(unescape("%3Cscript src='ban2.js' type='text/javascript'%3E%3C/script%3E")));

/*document.write(unescape("%3Cdiv style='width:"+ad_width+"px; font-family: verdana, arial, helvetica, sans-serif; cursor:pointer; font-size:11px;'%3E"));
        document.write(unescape("%3Ca href='" + myHost + "kevindubois.com/index.php?referral="+referral_code+"' style='text-decoration:none;color:white'%3E"));

        document.write(unescape("%3Cdiv style='border-top:5px solid #0F0442; width:"+ad_width+"px; background-color:#FF6204; color:#FFF; padding-bottom:10px '%3E"));
        document.write(unescape("%3Cul%3E"));    
        document.write(unescape("%3Cli style='margin-left:-15px'%3EThis is a demo for <a href='http://kevindubois.com/blog/2009/11/16/creating-advertisement-widgets-for-3rd-party-websites'>http://kevindubois.com/blog/2009/11/16/creating-advertisement-widgets-for-3rd-party-websites</a>%3C/li%3E"));    
        document.write(unescape("%3Cli style='margin-left:-15px'%3bla bla bla%3C/li%3E"));    
        document.write(unescape("%3Cli style='margin-left:-15px'%3Ebla bla bla%3C/li%3E"));    
        document.write(unescape("%3Cli style='margin-left:-15px'%3Ebla bla bla%3C/li%3E"));    
        document.write(unescape("%3C/ul%3E  "));    
        document.write(unescape("%3Cdiv style='text-align:center;font-weight:bold; font-size:12px; '%3E LEARN MORE %3C/div%3E"));    
        document.write(unescape("%3C/div%3E"));    
        document.write(unescape("%3C/a%3E"));    
        document.write(unescape("%3C/div%3E"));*/