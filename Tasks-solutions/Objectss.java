import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;

class Person {
    String fname = "John";
    String lname = "Doe";
    int age = 25;
    public void updateAge(int age){
        Person person = new Person();
        person.age = age;
    }
}
class Book {
    String title = "1984";
    String author = "George Orwell";
    int yearPublished = 1949;
    static void getBookInfo(){
        Book book = new Book();
        System.out.println("The book " + book.title + " was written by " + book.author + " in " + book.yearPublished + ".");
    }
}
class Car {
    String brand = "Toyora";
    String model = "Corolla";
    int year = 2020;
    static boolean hasProperty(String property){
        Car car = new Car();
        Field[] fields = car.getClass().getDeclaredFields();
        for (Field field : fields){
            if (field.getName().equals(property)) return true;
        }
        return false;
    }
}
class Student{
    String name = "Alice";
    ArrayList<String> subjects = new ArrayList<>();
    HashMap<String, Integer> grades = new HashMap<>();
    static void addSubject(String subject){
        Student student = new Student();
        if(!subject.contains(subject)){
            student.subjects.add(subject);
            student.grades.put(subject, 0);
        }else System.err.println("Already exists, nothing to do.");
    }
}
class City{
    String name = "Paris";
    String country = "France";
    int population = 2148000;
    static void describeCity(){
        City city = new City();
        System.out.println("The city " + city.name + " is located in " + city.country + " and has population of " + city.population + ".");
    }
}
public class Objectss {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }    
}
