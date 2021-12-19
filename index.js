btn=document.getElementById("submit");
cropName=document.getElementById("name");

cropQuantity=document.getElementById("quantity");
cropPrice=document.getElementById("price");
btn.addEventListener("click",function(e){
    e.preventDefault();
    cropImage=document.getElementById("image").files[0].name; 
    console.log(cropImage);
    
    i=URL.createObjectURL(document.getElementById("image").files[0]);
let html="";
html=`<div class="ad-item">
<p><b>Crop:</b> ${cropName.value}</p>
<img id="crop" src="${i}" alt="">
<p><b>Quantity:</b> ${cropQuantity.value}</p>
<p><b>Price:</b> ${cropPrice.value}</p>
</div>
<hr>`;
ad=document.getElementById("ad");
ad.innerHTML+=html;
cropName.value="";
cropPrice.value="";
cropQuantity.value="";
cropImage.value=null;
})