import 'package:flutter/material.dart';

class AppDrawer extends StatefulWidget {
  @override
  _AppDrawerState createState() => _AppDrawerState();
}

class _AppDrawerState extends State<AppDrawer> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
        child: new ListView(children: <Widget>[
          new UserAccountsDrawerHeader(
            accountName: new Text('John Doe'),
            accountEmail: new Text('test@mail.com'),
            currentAccountPicture: new CircleAvatar(
              backgroundImage: new NetworkImage('https://i.pravatar.cc/300'),
            ),
          ),
          new ListTile(
              leading: Icon(Icons.home),
              title: new Text('Home'),
              onTap: () {
                Navigator.of(context).pop();
                Navigator.pushReplacementNamed(context, '/home');
              }),
          new ListTile(
              leading: Icon(Icons.laptop_chromebook),
              title: new Text('Resume'),
              onTap: () {
                Navigator.of(context).pop();
                Navigator.pushReplacementNamed(context, '/resume');
              }),
          new ListTile(
              leading: Icon(Icons.people),
              title: new Text('Friends'),
              onTap: () {
                Navigator.of(context).pop();
                Navigator.pushReplacementNamed(context, '/friends');
              }),
          new ListTile(
              leading: Icon(Icons.all_inclusive),
              title: new Text('Teams'),
              onTap: () {
                Navigator.of(context).pop();
                Navigator.pushReplacementNamed(context, '/teams');
              }),
          new ListTile(
              leading: Icon(Icons.book),
              title: new Text('Research'),
              onTap: () {
                Navigator.of(context).pop();
                Navigator.pushReplacementNamed(context, '/research');
              }),
          new ListTile(
              leading: Icon(Icons.android),
              title: new Text('Projects'),
              onTap: () {
                Navigator.of(context).pop();
                Navigator.pushReplacementNamed(context, '/projects');
              }),
          new ListTile(
              leading: Icon(Icons.code),
              title: new Text('Programming'),
              onTap: () {
                Navigator.of(context).pop();
                Navigator.pushReplacementNamed(context, '/programming');
              }),
          new Divider(
            color: Colors.grey,
            thickness: 0.5,
          ),
          new ListTile(
              leading: Icon(Icons.account_circle),
              title: new Text('Accounts'),
              onTap: () {
                Navigator.of(context).pop();
                Navigator.pushReplacementNamed(context, '/accounts');
              }),
          new ListTile(
              leading: Icon(Icons.info),
              title: new Text('App Info'),
              onTap: () {
                Navigator.of(context).pop();
                Navigator.pushReplacementNamed(context, '/info');
              }),
        ]));
  }
}
