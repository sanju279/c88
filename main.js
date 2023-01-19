    //Create "mouseEvent" variable and set it as “Empty”.
var mouseEvent="empty";
    //Create two variables "last_position_of_x" and  "last_position_of_y".
var position_x, postition_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables color and width_of_line and assign values.
    color="black";
    width_of_line=1;
    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        //Addictonal Activity start
        color=document.getElementById("color"). value;
        width_of_line=document.getElementById("width_of_line"). value;
        //Addictonal Activity ends

        mouseEvent = "mousedown";
    }

    //Create the addEventListener() function for mouseup(). 
canvas.addEventListener("mouseup", my_mouseup);   
function my_mouseup(e)
{
    mouseEvent="mouseup";
}

    //Create the addEventListener() function for mouseleave(). 
    canvas.addEventListener("mouseleave", my_mouseleave);   
    function my_mouseleave(e)
    {
        mouseEvent="mouseleave";
    }




    //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
        
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + position_x + "y = " + position_y);
        ctx.moveTo(position_x, postition_y);
        
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo( current_position_of_mouse_x,  current_position_of_mouse_y);
        ctx.stroke();

        }
        position_x = current_position_of_mouse_x; 
        position_y = current_position_of_mouse_y;
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
