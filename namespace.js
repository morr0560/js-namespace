var MORR0560 = {
    init: function(){
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "morr0560";
        document.getElementById("boxes").appendChild(div);
        div.addEventListener("click", onClick);
        div.addEventListener("mouseover", onHover);
        div.addEventListener("mouseout", onExit);

        function onClick(ev){
            ev.currentTarget.style.backgroundColor = "beige";
            ev.currentTarget.style.borderColor = "maroon";
        }

        function onHover(ev){
            ev.currentTarget.classList.toggle("highlight");
        }

        function onExit(ev){
            ev.currentTarget.classList.toggle("highlight");
        }
    }
};