window.linkCopy=function(t){return{success:!1,error:!1,copyText:t,onCopy:function(t){try{if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",this.$refs.link.textContent);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var e=document.createElement("textarea");e.textContent=this.$refs.link.textContent,e.style.position="fixed",document.body.appendChild(e),e.select();try{return document.execCommand("copy")}catch(t){return console.warn("Copy to clipboard failed.",t),!1}finally{document.body.removeChild(e)}}this.success=!0,setTimeout((()=>{this.success=!1}),2e3)}catch(t){console.log(t),this.error=!0,setTimeout((()=>{this.error=!1}),2e3)}},onError:function(t){alert("Failed to copy texts")}}};