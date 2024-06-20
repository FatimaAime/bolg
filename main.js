var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fpng-blmua&psig=AOvVaw2TY-xn0I76SzzADSBrOW4X&ust=1718937201504000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDox6GS6YYDFQAAAAAdAAAAABAE", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","David Cano", "Karla Hernandez", "Natalia Cano", "Larissa Cano", "Fatima Cano"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Depura el código para almacenar la lista de imágenes en updatedImage. Utiliza images[i]
    var updatedImage = [images];
    //Depura el código para almacenar la lista de nombres en updatedName. Utiliza names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
