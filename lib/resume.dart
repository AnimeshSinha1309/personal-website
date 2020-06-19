import 'package:flutter/material.dart';

import './drawer.dart';

class ResumePage extends StatefulWidget {
  @override
  _ResumePageState createState() => _ResumePageState();
}

class _ResumePageState extends State<ResumePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('My Resume'),
      ),
      body: new Text('Hello'),
      drawer: new AppDrawer(),
    );
  }
}
