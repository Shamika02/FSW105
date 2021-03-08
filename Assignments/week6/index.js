
    function Employee(name, title,salary,status) {
        this.name = name;
        this.title = title;
        this.salary=salary;
        this.status=status;
    }
    
    Employee.prototype.myEmployee = function() {
        console.log("Employee Info " + this.name + "   (" + this.title  + this.salary + this.status + "" );
    };
    
    function Consultant(name) {
        Employee.call(this, name, "Consultant");
    }
    Consultant.prototype = Object.create(Employee.prototype);
    Consultant.prototype.constructor = Consultant;
    
    Consultant.prototype.myEmployee = function() {
        console.log("Employee" + this.name + " " + this.title +  this.salary +""); " -- New employess information."
    };
    
    var one = new Employee("Sara", "Engineer", "75,000","full-time");
    one.myEmployee();
    
    var two = new Employee("Rachel", "Supervisor","52,000","full-time");
    two.myEmployee();

    var three = new Employee("Michelle", "Administrator","48,000","part-time");
    three.myEmployee()

    var fourth = new Employee("Michael", "Manager","89,000","full-time");
    fourth.myEmployee()