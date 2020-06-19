import 'package:flutter/material.dart';

import './drawer.dart';

class ProjectsPage extends StatefulWidget {
  @override
  _ProjectsPageState createState() => _ProjectsPageState();
}

class _ProjectsPageState extends State<ProjectsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('My Projects'),
      ),
      body: new Text('Hello'),
      drawer: new AppDrawer(),
    );
  }
}
