import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FriendService } from '../friends/friend.service';
import { Friend } from '../friends/friend.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  teams: Task[];
  projects: Task[];

  constructor() {
    this.teams = [
      new Task(
        "ACLimitExceeded",
        "assets/teams/logo_aclimitexceeded.png",
        "This is our Competitive Programming teams. Currently it's composed of Me, Gaurang Tandon, and Dixit Garg. We love to study and practice pretty algorithmic problems. We ranked 30th on ICPC-Amrita regionals last year and hope to do a lot better this time around.",
        "Algorithmic Theory"
      ),
      new Task(
        "BayesianMechanics",
        "assets/teams/logo_bayesianmechanics.png",
        "A Big group of machine learning enthusiasts, this is me, Kanish, Gaurang, Yoogottam, Jai, and hopefully soon, Bhuvanesh. The purpose of this team if competive ML, but since everyone has college research in ML theory, we hope our work will be well inspired.",
        "Machine Learning"
      ),
      new Task(
        "OccamsRazor",
        "assets/teams/logo_occamsrazor.png",
        "Now to our Hackathon Team. This one has me, Kanish, Gaurang, Avni, Arpan and Akshat. First assembled to make the Library App for the Smart India Hackathon (which we won), we stuck around and await the next development opportunities that come our way.",
        "Software Development"
      ),
      new Task(
        "BowsersCastle",
        "assets/teams/logo_bowserscastle.png",
        "With Kalp and Yoogottam at the head, this is our CTF group. We started off with a reasonable performance at PicoCTF, and we keep attempting CTFs on and off with a dream of someday performing well at Google CTF.",
        "Security Engineering"
      ),
      new Task(
        "OptimisticOptimizations",
        "assets/teams/logo_optimisticoptimizations.png",
        "Me, Gaurang, Arpan and Yoogottam started off as a team with Google Hashcode in the first year of college. While we have not made a lot of efforts here, it's an annual tradition to pour in some effort into learning how to best approximate and fail at Hashcode (after an honest try, ofc).",
        "Approximation Algorithms"
      ),
      new Task(
        "PhymlqGroup",
        "assets/teams/logo_phymlqgroup.png",
        "We are just 3 friends and classmate, that's me, Jai and Kalp with shared interests in the same research topics in the intersection of Machine Learning and Physics, mostly on the particle physics side.",
        "Computational Physics Research"
      ),
    ]
    this.projects = [
      new Task(
        "Qubit Routing",
        "assets/teams/icon_quantumcomputation.jpg",
        "The task of Quantum Compilation entails mapping the logical qubits to the physical qubits on the device, and evolving said mapping using swap gates, so that all operations in the logical circuit become local (on physically neighboring qubits).",
        "Reinforcement Learning"
      ),
      new Task(
        "Particle Tagging",
        "assets/teams/icon_hadroncollider.jpg",
        "Collisions of particles in accelerators lead to showers of smaller particles, coming from a single source collision we call them a jet. Classifying the source of these jets (collisions of what types of particles lead to this) is an interesting task in learning from structures in the images (extremely sparse, hence this is a graph task) that they leave on the calorimeters.",
        "Graph Convolutional Networks"
      ),
      new Task(
        "Food Segmentation",
        "assets/teams/icon_foodsegmentation.png",
        "This is the AICrowd challenge. That's standard semantic segmentation, but on a dataset that is much harder than usual, has class imbalances and poor annotations. Low on theory, but this is still an interesting real world ML task out there.",
        "Semantic Segmentation"
      ),
      new Task(
        "Ensemble Biological Sensors",
        "assets/teams/icon_biologicalsensors.jpg",
        "A small project in my Systems Biology course, it constitutes an interesting question. Is the dynamic range of fold change sensors enhanced by ensemble behavior. And how do ensembles of sensors affect sensing in general. Insipired from a paper on a similar idea by Prof. Steven Frank.",
        "Differential Equation Modelling"
      ),
    ]
  }

  ngOnInit() {
  }

}

class Task {
  name: string;
  logo: string;
  description: string;
  subtitle: string;

  constructor(name: string, logo: string,
    description: string, subtitle: string) {
    this.name = name;
    this.logo = logo;
    this.description = description;
    this.subtitle = subtitle;
  }
}