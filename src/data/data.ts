export class User{
  name: FormDataEntryValue;
  username: FormDataEntryValue;
  email: FormDataEntryValue;
  password: FormDataEntryValue;
  constructor(name: FormDataEntryValue, username: FormDataEntryValue, email: FormDataEntryValue, password: FormDataEntryValue){
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
