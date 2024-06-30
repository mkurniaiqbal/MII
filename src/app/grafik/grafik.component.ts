import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-grafik',
  templateUrl: './grafik.component.html',
  styleUrls: ['./grafik.component.css'],
})
export class GrafikComponent implements OnInit {
  ngOnInit(): void {
    this.renderDoughnutChart();
    this.renderbarChart();
  }

  doughnutChart: any;
  barChart: any;

  renderDoughnutChart() {
    const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
    this.doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'Doughnut Chart',
            data: [300, 50, 100],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Doughnut Chart',
          },
        },
      },
    });
  }
  renderbarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'Bar Chart',
            data: [300, 50, 100],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Bar Chart',
          },
        },
      },
    });
  }
}
