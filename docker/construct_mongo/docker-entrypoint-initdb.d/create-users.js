var users = [{
    user: 'youruser',
    pwd: 'youruserpasswd',
    roles: [{
        role: 'dbOwner',
        db: 'youruserdb'
    }]
}];

for (var i = 0, length = users.length; i < length; ++i) {
    db.createUser(users[i]);
}