interface IDatabaseConfig {
  hostname: string;
  user: string;
  testConnection();
}

class MySql implements IDatabaseConfig {
  public hostname: string;
  public user: string;

  constructor(hostname: string, user: string) {
    this.hostname = hostname;
    this.user = user;
  }

  testConnection() {
    return `Database Is Running On ${this.hostname}`;
  }
}

const mysqlConnect = new MySql("localhost:80", "root");
console.log(mysqlConnect.testConnection());
