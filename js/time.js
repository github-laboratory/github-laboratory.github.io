<script>
onload=function(){
	setInterval(function(){
		var date = new Date();
		document.getElementById("time").innerHTML = date.toLocaleString();
	},1000);
}
