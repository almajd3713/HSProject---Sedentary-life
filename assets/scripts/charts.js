
let data = {
  datasets: [{
    type: "pie",
    label: "People with this lifestyle versus ones without it",
    data: [58, 100-58],
    backgroundColor: [
      "green", "red"
    ]
  }, {
    type: "pie",
    label: "Males with this lifestyles",
    data: [50, 50],
    backgroundColor: [
      "#0e25f6", "gray"
    ]
  },{
    type: "pie",
    label: "Females with this lifestyles",
    data: [76.6, 100-76.6],
    backgroundColor: [
      "#da0bb4", "gray"
    ]
  }]
}

export default () => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    responsive: true,
    data: data
  })
}