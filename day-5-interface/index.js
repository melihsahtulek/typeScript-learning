var MySql = /** @class */ (function () {
    function MySql(hostname, user) {
        this.hostname = hostname;
        this.user = user;
    }
    MySql.prototype.testConnection = function () {
        return "Database Is Running On ".concat(this.hostname);
    };
    return MySql;
}());
var mysqlConnect = new MySql("localhost:80", "root");
console.log(mysqlConnect.testConnection());
