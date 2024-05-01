import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  plugins,
} from "chart.js";
import { useContext } from "react";

import { Line } from "react-chartjs-2";
import { MyContext } from "../../Context/Contex";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  plugins
);

const Graph = () => {
  const { totalStudents } = useContext(MyContext);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Data = [null, 1, 2, 4, 6];
  const data = {
    labels,
    datasets: [
      {
        label: "students",
        data: totalStudents ? filterData(totalStudents, labels) : "",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "monthly student added",
      },
    },
  };
  return <Line height={'100%'} width={'100%'} data={data} options={options} />;
};

function filterData(Data, months) {
  const arr = [0, 0, 0, null, null,null,null,null,null];


  Data.forEach((data, ind) => {
    const date = new Date(data.createdAt);
    const monthIndex = date.getMonth();
    const month = months[monthIndex];

    data.month = month.toLowerCase();

    if (data.month == "april") {
      arr[monthIndex] = arr[monthIndex] + 1;

      // arr[monthIndex]=arr[monthIndex]+1
    } else if (data.month == "may") {
      if (ind === 0) {
        arr[monthIndex] = 1;
      } else {
        arr[monthIndex] = arr[monthIndex] + 1;
      }
    } else if (data.month == "june") {
      if (ind === 0) {
        arr[monthIndex] = 0;
        arr[monthIndex] = arr[monthIndex] + 1;
      } else {
        arr[monthIndex] = arr[monthIndex] + 1;
      }
    } else if (data.month == "july") {
      if (ind === 0) {
        arr[monthIndex] = 0;
        arr[monthIndex] = arr[monthIndex] + 1;
      } else {
        arr[monthIndex] = arr[monthIndex] + 1;
      }
    } else if (data.month == "august") {
      if (ind === 0) {
        arr[monthIndex] = 0;
        arr[monthIndex] = arr[monthIndex] + 1;
      } else {
        arr[monthIndex] = arr[monthIndex] + 1;
      }
    } else if (data.month == "september") {
      if (ind === 0) {
        arr[monthIndex] = 0;
        arr[monthIndex] = arr[monthIndex] + 1;
      } else {
        arr[monthIndex] = arr[monthIndex] + 1;
      }
    } else if (data.month == "october") {
      if (ind === 0) {
        arr[monthIndex] = 0;
        arr[monthIndex] = arr[monthIndex] + 1;
      } else {
        arr[monthIndex] = arr[monthIndex] + 1;
      }
    } else if (data.month == "november") {
      if (ind === 0) {
        arr[monthIndex] = 0;
        arr[monthIndex] = arr[monthIndex] + 1;
      } else {
        arr[monthIndex] = arr[monthIndex] + 1;
      }
    } else if (data.month == "december") {
      if (ind === 0) {
        arr[monthIndex] = 0;
        arr[monthIndex] = arr[monthIndex] + 1;
      } else {
        arr[monthIndex] = arr[monthIndex] + 1;
      }
    }
  });
  console.log(arr);
  return arr;
}

export default Graph;
