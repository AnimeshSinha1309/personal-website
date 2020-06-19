import 'package:flutter/material.dart';

import './drawer.dart';

class ResearchPage extends StatefulWidget {
  @override
  _ResearchPageState createState() => _ResearchPageState();
}

class _ResearchPageState extends State<ResearchPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('My Research'),
      ),
      body: new Text('Hello'),
      drawer: new AppDrawer(),
    );
  }
}
