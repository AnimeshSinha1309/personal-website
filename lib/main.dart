import 'package:flutter/material.dart';
import 'package:personalwebsite/friends.dart';
import 'package:personalwebsite/programming.dart';
import 'package:personalwebsite/projects.dart';
import 'package:personalwebsite/research.dart';
import 'package:personalwebsite/teams.dart';

import './drawer.dart';
import './resume.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'LibMate',
        theme: ThemeData(
          primarySwatch: Colors.red,
          accentColor: Colors.purpleAccent,
        ),
        home: MyHomePage(),
        routes: <String, WidgetBuilder>{
          '/home': (BuildContext context) => new MyHomePage(),
          '/resume': (BuildContext context) => new ResumePage(),
          '/projects': (BuildContext context) => new ProjectsPage(),
          '/friends': (BuildContext context) => new FriendsPage(),
          '/teams': (BuildContext context) => new TeamsPage(),
          '/programing': (BuildContext context) => new ProgrammingPage(),
          '/research': (BuildContext context) => new ResearchPage(),
        });
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Hi, I am Animesh!'),
      ),
      drawer: AppDrawer(),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text('You Pressed $_counter Times',
                style: Theme.of(context).textTheme.headline4),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.android),
      ),
    );
  }
}
