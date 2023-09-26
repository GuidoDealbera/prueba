import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const beneficios = [0, 10, 50, 25, 18, 15, 26, 8, 19, 35, 80, 60];
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const miData = {
  labels: meses,
  datasets: [{
    label: 'Beneficios',
    data: beneficios,
    tension: 0.5,
    fill: true,
  }],
};

const options = {
    responsive: true,
}

const LineBar = () => {
    return <Line data={miData} options={options} width={'auto'}/>
};

export default LineBar;