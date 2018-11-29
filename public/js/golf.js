var hole, score, total;

$(startup);

function startup() {
  $("#btnrecord").click(updatescore);
  $("#btnclear").click(clearscore);
  hole = 1;
  score = 0;
}

function updatescore() {
  // ask for score
  score = Number(prompt("Enter Score for Hole " + hole));
  //add score to total
  total += score;
  // add results to list

  $("#scorelist").append("<option>Hole " + hole + ": " + score + "</options>");

  // go to next hole
  hole += 1;

  //update total display
  $("#totalbox").html("Total:" + total);
}

function clearscore() {
  $("#scorelist").html("");
  $("#totalbox").html("Total: 0");
  hole = 1;
  total = 0;
}
