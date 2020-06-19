import 'dart:html';

import 'package:flutter/material.dart';

import './drawer.dart';

class TeamsPage extends StatefulWidget {
  @override
  _TeamsPageState createState() => _TeamsPageState();
}

class _TeamsPageState extends State<TeamsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: new CustomScrollView(slivers: [
        SliverAppBar(
          leading: IconButton(
              icon: Icon(Icons.filter_1),
              onPressed: () {
                // Do something
              }
          ),
          expandedHeight: 420.0,
          floating: true,
          pinned: true,
          snap: true,
          elevation: 50,
          backgroundColor: Colors.pink,
          flexibleSpace: Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                colors: [Colors.red, Colors.orange, Colors.yellow, Colors.green,
                  Colors.blue, Colors.indigo, Colors.purple],
                stops: [0.14, 0.28, 0.42, 0.56, 0.70, 0.84, 0.98],
              )
            ),
            child: FlexibleSpaceBar(
              centerTitle: true,
              title: Text('Hi, I am Animesh!',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 50.0,
                  )
              ),
            ),
          )
        ),
        new SliverList(
            delegate: new SliverChildListDelegate(_buildList(50))
        ),
      ],
      ),
      drawer: new AppDrawer(),
    );
  }

  List _buildList(int count) {
    List<Widget> listItems = List();
    for (int i = 0; i < count; i++) {
      listItems.add(
          new Padding(padding: new EdgeInsets.all(20.0),
          child: new Text(
              'Item ${i.toString()}',
              style: new TextStyle(fontSize: 25.0)
          )
      ));
    }

    return listItems;
  }
}
