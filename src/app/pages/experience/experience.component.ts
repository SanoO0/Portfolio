import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,

  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  education = [
    {
      title: 'BACHELOR OF COMPUTER SCIENCE APPLICATION DEVELOPMENT',
      years: '2020 - 2025',
      place: 'High School Louvain in Hainaut Mons',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      title: 'HIGHER SECONDARY EDUCATION CERTIFICATE - COMPUTER TECHNICIAN',
      years: '2017 - 2020',
      place: 'Ath Provincial Institute of Secondary Education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
  ];

  experience = [
    {
      title: 'DEVELOPER INTERNSHIP AT BNP PARIBAS FORTIS',
      years: '2025 - Present',
      place: 'BNP Paribas Fortis, Bruxelles',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      title: 'FREELANCE',
      years: '2021 - 2023',
      place: 'Loginfo, Ath',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      title: 'COMPUTER TECHNICIAN INTERNSHIP AT CDY',
      years: '2020',
      place: 'CDY, Bouvignies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
  ];
}
