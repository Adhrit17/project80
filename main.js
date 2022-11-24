function submit()
{
var display_student_array=[];
for(var a=1; a <= 4; a++)
    {
var name_of_the_student = document.getElementById("name_of_the_student_"+a).value;
console.log(name_of_the_student);
name_of_the_student_array.push(name_of_the_student);

    } 
console.log(name_of_the_student_array);
var length_of_name_of_students_array=name_of_the_student_array.length;
console.log(length_of_name_of_students_array);



for (var b=0; b <length_of_name_of_students_array; b++)
{
display_student_array.push("<h4> name is"+ name_of_the_student_array[b]+"</h4>");
console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML = display_student_array;

}