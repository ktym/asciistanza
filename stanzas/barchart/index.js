// npm install d3
import * as d3 from "d3";
// npm install d3-scale
import * as d3_scale from "d3-scale";
// cd lib; curl -O https://raw.githubusercontent.com/togostanza/metastanza/master/lib/load-data.js
import loadData from "@/lib/load-data";

export default async function barchart(stanza, params) {
  const data = await loadData(params["data-url"], params["data-type"]);
  const range = [0, params["max-bar-length"] || 50];
  const padding = params["max-label-length"] || 10;
  console.log(data)
  const labelVariable = params["category"];  // x
  const valueVariable = params["value"];     // y
  const groupVariable = params["group-by"];  // z

  let labels = [];
  let values = [];
  let groups = [];

  data.forEach(function(item) {
    labels.push(item[labelVariable]);
    values.push(Number(item[valueVariable]));
    if (groupVariable && item[groupVariable]) {
      groups.push(item[groupVariable]);
    }
  });
  let scale = d3_scale.scaleLinear().domain(d3.extent(values)).range(range).nice();

  let lines = [];
  for (let i = 0; i < labels.length; i++) {
    let label = labels[i].slice(0, padding).padStart(padding, " ");
    let value = scale(values[i]);
    let group = groups[i] ? " " + groups[i] : "";
    let line = "  " + label + " | " + "*".repeat(value) + " " + values[i] + group;
    lines.push(line);
  }

  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      graph: lines.join("\n"),
    }
  });
}
