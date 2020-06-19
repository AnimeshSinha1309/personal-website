import 'package:flutter/material.dart';

import './drawer.dart';

class ProgrammingPage extends StatefulWidget {
  @override
  _ProgrammingPageState createState() => _ProgrammingPageState();
}

class _ProgrammingPageState extends State<ProgrammingPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('My Code'),
      ),
      body: new Text('Hello'),
      drawer: new AppDrawer(),
    );
  }
}
