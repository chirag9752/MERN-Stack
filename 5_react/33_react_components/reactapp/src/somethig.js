
const getUser = (firstname , lastname, title , skills) => {
    return `${firstname} ${lastname} , a ${title} developer.He knows ${skills}`
  }
  
  const skills = ['HTML' , 'CSS' , 'JAVASCRIPT'];
  console.log(getUser("abhilash" , "Malviya", "frontend" , skills));
  // "Abhilash Malviya , a frontend developer.He knows HTMl CSS JAVASCRIPT"
  
  
  // classes in javascript
  class Parent {
    constructor(firstname , lastname , country , title){
      this.firstname = firstname
      this.lastname = lastname 
      this.country = country
      this.title = title
    }
    getInfo() {
      return `${this.firstname} ${this.lastname} , a ${this.title} developer.He is from ${this.country}`
    }
  }
  
  const p1 = new Parent('abhishek' , 'yadav' , 'India' , 'pubgPlayer');
  
  class Child extends Parent {
    constructor(firstname , lastname , country , title , skills) {
      super(firstname , lastname , country , title)
      this.skills = skills
    }
  
  getChildInfo() {
    return `${this.firstname} ${this.lastname} , a ${this.title} developer.He is from ${this.country} . He knows ${this.skills}`
  }
  }
  
  const c1 = new Child('Gagan' , 'Jain' , 'India' , 'Backend', 'Reactjs')
  
  