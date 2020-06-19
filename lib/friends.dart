import 'package:flutter/material.dart';

import './drawer.dart';

class FriendsPage extends StatefulWidget {
  @override
  _FriendsPageState createState() => _FriendsPageState();
}

class _FriendsPageState extends State<FriendsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('My Friends'),
      ),
      body: new Text('Hello'),
      drawer: new AppDrawer(),
    );
  }
}
