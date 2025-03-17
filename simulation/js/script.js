const canvas = document.querySelector("#simscreen");

const taskTitleText = document.querySelector(".task-title--text");

const simControl = document.querySelector(".sim-icon--control");

simControl.addEventListener("click", function () {
  document.querySelector("#variables").scrollIntoView({
    behavior: "smooth",
  });
});
const simIcons = document.querySelector(".sim-icons");
const stepInfo = document.querySelector(".step-info");
const stepTitle = document.querySelector(".practice-step-info");
const btnTop = document.querySelector(".btn-top");
const radioButtons = document.querySelectorAll('input[name="navigation"]');
const buttonBox = document.querySelector(".practice-step-button");
function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });
  simIcons.classList.remove("flex");
  simIcons.classList.add("hide");
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
    taskTitleText.textContent = "Objective";
    // document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementsByClassName("observation")[0].style.display = "none";
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
    taskTitleText.textContent = "Apparatus";
    // document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    console.log("graphhidden");
    document.getElementsByClassName("observation")[0].style.display = "none";
  }
  if (ele.classList.contains("tool-help")) {
    // document.querySelector(".help").classList.remove("hide");
    taskTitleText.textContent = "Help";
    document.getElementById("instructions").style.display = "block";
    // document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    document.getElementsByClassName("observation")[0].style.display = "none";
  }
  if (ele.classList.contains("tool-practice")) {
    document.querySelector("#simulation").scrollIntoView({
      behavior: "smooth",
    });
    simIcons.classList.remove("hide");
    simIcons.classList.add("flex");
    document.getElementById("variables").style.display = "block";
    document.querySelector(".practice").classList.remove("hide");

    taskTitleText.textContent = "Experiment";

    document.getElementById("instructions").style.display = "none";
    $(stepTitle).css("margin-left", "5rem");

    // btnTop.classList.add("hide");

    console.log("reched here");

    radioButtons.forEach((radio) => {
      radio.checked = false;
    });

    circle1 = new Path2D();

    $(".canvas").css("display", "none");

    $(buttonBox).css("display", "none");
    let selectedOption = document.querySelector('input[name="exp"]:checked');
    if (selectedOption) {
      let option = selectedOption.value;
      if (option == "Distilled water") {
        taskTitleText.textContent = "Distilled water";
        // Show only the variable section
        // document.getElementById("Results").style.display = "none";
        document.getElementById("variables").style.display = "block";
        document.getElementById("grm2").innerHTML = 53.8;
      } else if (option == "Kerosene") {
        taskTitleText.textContent = "Kerosene";
        document.getElementById("grm2").innerHTML = 50.123;
        // Show both the variable and result sections
        // document.getElementById("Results").style.display = "block";
        document.getElementById("variables").style.display = "block";
      }
    }
  }
}

function blurring() {
  if (blurr == true) {
    // document.getElementById("simoptions").style.filter = "blur(2px)";
    document.getElementById("appdiv").style.filter = "blur(0px)";
    // document.getElementById("buttondown").style.filter = "blur(2px)";
  } else if (blurr == false) {
    // document.getElementById("simoptions").style.filter = "blur(0px)";
    document.getElementById("appdiv").style.filter = "blur(0px)";
    // document.getElementById("content3").style.display = "none";
    // document.getElementById("graph").style.display = "none";
    // document.getElementById("buttondown").style.filter = "blur(0px)";
  }
}

// Next button
// let a = 1;
let b = 3.6;
let hvoltage = 0;
let magi = 200;
let halli = 0;
let e = 1.6 * Math.pow(10, -19);
let c = 0;
let concentration;
let magcount = -1;
let hallcount = -1;
let sampleXarray = [];
let sampleYarray = [];
let ibXarray = [];
let ibYarray = [];
let blurr;
let pcheck;
let table;
let ibtable;
let row;
let ibrow;
let rH = 0;
let raisedtoTen;

// function blurring() {
//     if (blurr == true) {
//         document.getElementById("simoptions").style.filter = 'blur(2px)';
//         document.getElementById("mainsimulation").style.filter = 'blur(2px)';
//         document.getElementById("buttondown").style.filter = 'blur(2px)';
//     } else if (blurr == false) {
//         document.getElementById("simoptions").style.filter = 'blur(0px)';
//         document.getElementById("mainsimulation").style.filter = 'blur(0px)';
//         document.getElementById("buttondown").style.filter = 'blur(0px)';
//     }
// }

// Next button
let a = 1;

function up() {
  a += 1;
  next();
}

function down() {
  a -= 1;
  next();
}

function next() {
  if (a == 1) {
    document.getElementById("buttondown").style.display = "none";
    document.getElementById("buttonup").style.display = "block";
    document.getElementById("content").style.display = "block";
    document.getElementById("content2").style.display = "none";
  } else if (a == 2) {
    document.getElementById("buttondown").style.display = "block";
    document.getElementById("content").style.display = "none";
    document.getElementById("content2").style.display = "block";
    // document.getElementById("content3").style.display = 'none';
    document.getElementById("buttonup").style.display = "none";
    document.getElementById("observation").style.display = "none";
  } else if (a == 3) {
    document.getElementById("buttonup").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "block";
    closeobservation();
    // plotting();
  }
}

// procedure selection
function update() {
  // Check if a radio button is selected
  //   let selectedOption = document.querySelector('input[name="exp"]:checked');
  //   if (!selectedOption) {
  //       alert("Please select an experiment option");
  //       return; // Exit the function if no option is selected
  //   }
  let select = document.getElementById("exp");
  let option = select.options[select.selectedIndex].value;
  if (option == "Distilled water") {
    //   document.getElementById("procedure-title").style.display = 'none';
    //   document.getElementById("proc").style.display = 'none';
    document.getElementById("insert").innerHTML = "Start";
    // document.getElementById("remove").innerHTML = 'Start';
    document.getElementById("a1-1").style.display = "block";
    document.getElementById("a1-2").style.display = "block";
    document.getElementById("a1-3").style.display = "none";
    document.getElementById("a2-11").style.display = "none";
    document.getElementById("a2-12").style.display = "none";
    document.getElementById("grm2").style.display = "none";
    document.getElementById("voltagevalue").style.display = "none";
    document.getElementById("insert").disabled = true;
    // document.getElementById("electromagnet").style.display = 'block';
    document.getElementById("a1-4").style.display = "block";
    stepInfo.innerHTML = "Finding weight of the empty beaker in grams.";
    document.getElementById("a1-4").style.animation = "moveBeaker 2s forwards";
    setTimeout(function () {
      document.getElementById("grm").style.display = "block";
      document.getElementById("weightBeaker1").innerHTML = "48.20 gm";
      document.getElementById("insert").disabled = false;
      document.getElementById("exp").disabled = true;
      stepInfo.innerHTML = "";
    }, 2000);
    pcheck = true;
    // slider_reset();
    // disable();
    // remove();
  } else if (option == "Kerosene") {
    document.getElementById("observationbutton").disabled = true;
    document.getElementById("a1-11").style.display = "none";
    document.getElementById("a1-12").style.display = "none";
    document.getElementById("a1-6").style.display = "none";
    document.getElementById("grm2").style.display = "none";
    document.getElementById("grad").style.display = "none";
    document.getElementById("a1-1").style.display = "block";
    document.getElementById("a1-2").style.display = "none";
    document.getElementById("a1-3").style.display = "block";
    document.getElementById("insert").innerHTML = "Start";
    // document.getElementById("remove").innerHTML = 'Start';
    document.getElementById("insert").disabled = true;
    stepInfo.innerHTML = "Finding weight of the empty beaker in grams.";
    document.getElementById("a1-4").style.display = "block";
    document.getElementById("a1-4").style.animation = "moveBeaker 2s forwards";
    setTimeout(function () {
      document.getElementById("grm").style.display = "block";
      document.getElementById("weightBeaker1").innerHTML = "48.20 gm";
      document.getElementById("insert").disabled = false;
      document.getElementById("exp").disabled = true;
      stepInfo.innerHTML = "";
    }, 2000);

    pcheck = false;
    // slider_reset();
    // remove()
  }
}

// sensor/probe button
function insert() {
  document.getElementById("insert").disabled = true;
  document.getElementById("a1-1").style.display = "none";

  // document.getElementById("insert").style.display = 'none';
  document.getElementById("grm").style.display = "none";
  document.getElementById("a1-2").style.display = "none";
  // document.getElementById("remove").style.display = 'block';

  document.getElementById("a1-3").style.display = "none";
  document.getElementById("observationbutton").disabled = true;

  // document.getElementById("cslider").style.opacity = '1';
  // document.getElementById("cslider").disabled = false;

  if (pcheck == true) {
    // document.getElementById("a1-6").style.display = 'block';

    document.getElementById("a1-7").style.display = "block";
    document.getElementById("a1-6").style.display = "block";
    document.getElementById("grad").style.display = "block";
    document.getElementById("grad2").style.display = "block";
    stepInfo.innerHTML =
      "Distilled water is sucked into the stalagmometer (till point A) using a rubber bulb attached to the mouth of stalagmometer.";

    document.getElementById("a1-4").style.animation = "moveBeaker1 2s forwards";
    setTimeout(function () {
      document.getElementById("a1-7").style.animation =
        "moveBurette 2s forwards";
      setTimeout(function () {
        document.getElementById("grad1").style.display = "block";
        document.getElementById("grad1").style.animation =
          "moveWater 2s forwards";
        setTimeout(function () {
          document.getElementById("grad").style.animation =
            "moveWater1 2s forwards";

          setTimeout(function () {
            document.getElementById("grad1").style.display = "none";
            document.getElementById("a1-7").style.display = "none";
            document.getElementById("a1-8").style.display = "block";
            document.getElementById("a1-5").style.display = "block";
            document.getElementById("a1-8").style.animation =
              "moveStalag 2s forwards";
            setTimeout(function () {
              document.getElementById("a1-4").style.display = "none";
              // document.getElementById("a1-9").style.display = 'block';
              document.getElementById("a1-5").style.display = "none";
              document.getElementById("a1-8").style.display = "none";
              document.getElementById("a1-10").style.display = "block";
              document.getElementById("grad4").style.display = "block";
              document.getElementById("dialogue").style.display = "block";
              stepInfo.innerHTML = "";
              document.getElementById("ok1").onclick = function () {
                document.getElementById("dialogue").style.display = "none";
                document.getElementById("grad4").style.animation =
                  "moveGrad 20s forwards";
                document.getElementById("a1-15").style.display = "block";
                document.getElementById("a1-15").style.animation =
                  "moveDrop 1s forwards";
                setTimeout(function () {
                  stepInfo.innerHTML = `Drop: 1`;
                  document.getElementById("a1-15").style.display = "block";
                  document.getElementById("a1-15").style.animation =
                    "moveDrop1 1s forwards";
                  setTimeout(function () {
                    stepInfo.innerHTML = `Drop: 2`;
                    document.getElementById("a1-15").style.display = "block";
                    document.getElementById("a1-15").style.animation =
                      "moveDrop2 1s forwards";
                    setTimeout(function () {
                      stepInfo.innerHTML = `Drop: 3`;
                      document.getElementById("a1-15").style.display = "block";
                      document.getElementById("a1-15").style.animation =
                        "moveDrop3 1s forwards";
                      setTimeout(function () {
                        stepInfo.innerHTML = `Drop: 4`;
                        document.getElementById("a1-15").style.display =
                          "block";
                        document.getElementById("a1-15").style.animation =
                          "moveDrop4 1s forwards";
                        setTimeout(function () {
                          stepInfo.innerHTML = `Drop: 5`;
                          document.getElementById("a1-15").style.display =
                            "block";
                          document.getElementById("a1-15").style.animation =
                            "moveDrop5 1s forwards";
                          setTimeout(function () {
                            stepInfo.innerHTML = `Drop: 6`;
                            document.getElementById("a1-15").style.display =
                              "block";
                            document.getElementById("a1-15").style.animation =
                              "moveDrop6 1s forwards";
                            setTimeout(function () {
                              stepInfo.innerHTML = `Drop: 7`;
                              document.getElementById("a1-15").style.display =
                                "block";
                              document.getElementById("a1-15").style.animation =
                                "moveDrop7 1s forwards";
                              setTimeout(function () {
                                stepInfo.innerHTML = `Drop: 8`;
                                document.getElementById("a1-15").style.display =
                                  "block";
                                document.getElementById(
                                  "a1-15"
                                ).style.animation = "moveDrop8 1s forwards";
                                setTimeout(function () {
                                  stepInfo.innerHTML = `Drop: 9`;
                                  document.getElementById(
                                    "a1-15"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "a1-15"
                                  ).style.animation = "moveDrop9 1s forwards";
                                  setTimeout(function () {
                                    stepInfo.innerHTML = `Drop: 10`;
                                    document.getElementById(
                                      "a1-15"
                                    ).style.display = "block";
                                    document.getElementById(
                                      "a1-15"
                                    ).style.animation =
                                      "moveDrop10 1s forwards";
                                    document.getElementById(
                                      "grad5"
                                    ).style.display = "block";
                                    document.getElementById(
                                      "grad5"
                                    ).style.animation =
                                      "moveGrad1 20s forwards";
                                    setTimeout(function () {
                                      stepInfo.innerHTML = `Drop: 11`;
                                      document.getElementById(
                                        "a1-15"
                                      ).style.display = "block";
                                      document.getElementById(
                                        "a1-15"
                                      ).style.animation =
                                        "moveDrop11 1s forwards";
                                      setTimeout(function () {
                                        stepInfo.innerHTML = `Drop: 12`;
                                        document.getElementById(
                                          "a1-15"
                                        ).style.display = "block";
                                        document.getElementById(
                                          "a1-15"
                                        ).style.animation =
                                          "moveDrop12 1s forwards";
                                        setTimeout(function () {
                                          stepInfo.innerHTML = `Drop: 13`;
                                          document.getElementById(
                                            "a1-15"
                                          ).style.display = "block";
                                          document.getElementById(
                                            "a1-15"
                                          ).style.animation =
                                            "moveDrop13 1s forwards";
                                          setTimeout(function () {
                                            stepInfo.innerHTML = `Drop: 14`;
                                            document.getElementById(
                                              "a1-15"
                                            ).style.display = "block";
                                            document.getElementById(
                                              "a1-15"
                                            ).style.animation =
                                              "moveDrop14 1s forwards";
                                            setTimeout(function () {
                                              stepInfo.innerHTML = `Drop: 15`;
                                              document.getElementById(
                                                "a1-15"
                                              ).style.display = "block";
                                              document.getElementById(
                                                "a1-15"
                                              ).style.animation =
                                                "moveDrop15 1s forwards";
                                              setTimeout(function () {
                                                stepInfo.innerHTML = `Drop: 16`;
                                                document.getElementById(
                                                  "a1-15"
                                                ).style.display = "block";
                                                document.getElementById(
                                                  "a1-15"
                                                ).style.animation =
                                                  "moveDrop16 1s forwards";
                                                setTimeout(function () {
                                                  stepInfo.innerHTML = `Drop: 17`;
                                                  document.getElementById(
                                                    "a1-15"
                                                  ).style.display = "block";
                                                  document.getElementById(
                                                    "a1-15"
                                                  ).style.animation =
                                                    "moveDrop17 1s forwards";
                                                  setTimeout(function () {
                                                    stepInfo.innerHTML = `Drop: 18`;
                                                    document.getElementById(
                                                      "a1-15"
                                                    ).style.display = "block";
                                                    document.getElementById(
                                                      "a1-15"
                                                    ).style.animation =
                                                      "moveDrop18 1s forwards";
                                                    setTimeout(function () {
                                                      stepInfo.innerHTML = `Drop: 19`;
                                                      document.getElementById(
                                                        "a1-15"
                                                      ).style.display = "block";
                                                      document.getElementById(
                                                        "a1-15"
                                                      ).style.animation =
                                                        "moveDrop19 1s forwards";
                                                      setTimeout(function () {
                                                        stepInfo.innerHTML = `Drop: 20`;
                                                        document.getElementById(
                                                          "a1-15"
                                                        ).style.display =
                                                          "block";
                                                        document.getElementById(
                                                          "a1-15"
                                                        ).style.animation =
                                                          "moveDrop20 1s forwards";
                                                        setTimeout(function () {
                                                          document.getElementById(
                                                            "a1-15"
                                                          ).style.display =
                                                            "none";

                                                          setTimeout(
                                                            function () {
                                                              stepInfo.innerHTML = `Finding weight of beaker with distilled water in grams.`;
                                                              document.getElementById(
                                                                "grad5"
                                                              ).style.display =
                                                                "none";
                                                              document.getElementById(
                                                                "grad4"
                                                              ).style.display =
                                                                "none";
                                                              document.getElementById(
                                                                "a1-12"
                                                              ).style.display =
                                                                "block";
                                                              document.getElementById(
                                                                "a1-10"
                                                              ).style.display =
                                                                "none";
                                                              document.getElementById(
                                                                "a1-11"
                                                              ).style.display =
                                                                "block";
                                                              document.getElementById(
                                                                "a1-12"
                                                              ).style.animation =
                                                                "moveDist 2s forwards";
                                                              setTimeout(
                                                                function () {
                                                                  document.getElementById(
                                                                    "grm2"
                                                                  ).style.display =
                                                                    "block";
                                                                  document.getElementById(
                                                                    "grm2"
                                                                  ).innerHTML =
                                                                    "53.8";
                                                                  document.getElementById(
                                                                    "observationbutton"
                                                                  ).disabled = false;

                                                                  // document.getElementById("observation").style.display = 'block';
                                                                },
                                                                2000
                                                              );
                                                            },
                                                            2000
                                                          );
                                                        }, 100);
                                                      }, 1000);
                                                    }, 1000);
                                                  }, 1000);
                                                }, 1000);
                                              }, 1000);
                                            }, 1000);
                                          }, 1000);
                                        }, 1000);
                                      }, 1000);
                                    }, 1000);
                                  }, 1000);
                                }, 1000);
                              }, 1000);
                            }, 1000);
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              };
            }, 2000);
          }, 2000);
        }, 500);
      }, 2000);
    }, 2000);

    // document.getElementById("fieldvalue").innerText = b;
  } else if (pcheck == false) {
    document.getElementById("a2-7").style.display = "block";
    document.getElementById("a2-6").style.display = "block";
    document.getElementById("grad111").style.display = "block";

    document.getElementById("grad222").style.display = "block";
    stepInfo.innerHTML =
      "Kerosene is sucked into the stalagmometer (till point A) using a rubber bulb attached to the mouth of stalagmometer.";
    document.getElementById("a1-4").style.animation =
      "moveBeaker21 2s forwards";
    setTimeout(function () {
      document.getElementById("a2-7").style.animation =
        "moveBurette21 2s forwards";
      setTimeout(function () {
        document.getElementById("grad21").style.display = "block";
        document.getElementById("grad21").style.animation =
          "moveKerosene 2s forwards";
        setTimeout(function () {
          document.getElementById("grad111").style.animation =
            "moveKerosene1 2s forwards";
          setTimeout(function () {
            document.getElementById("grad21").style.display = "none";
            document.getElementById("a2-7").style.display = "none";
            document.getElementById("a2-8").style.display = "block";
            document.getElementById("a1-5").style.display = "block";
            document.getElementById("a2-8").style.animation =
              "moveStalag 2s forwards";
            setTimeout(function () {
              document.getElementById("a1-4").style.display = "none";

              // document.getElementById("a2-4").style.display = 'none';
              // document.getElementById("a1-9").style.display = 'block';
              document.getElementById("a1-5").style.display = "none";
              document.getElementById("a2-8").style.display = "none";
              document.getElementById("a2-10").style.display = "block";
              stepInfo.innerHTML = "";
              document.getElementById("grad24").style.display = "block";
              document.getElementById("dialogue").style.display = "block";
              document.getElementById("ok1").onclick = function () {
                document.getElementById("dialogue").style.display = "none";
                document.getElementById("grad24").style.animation =
                  "moveGrad24 20s forwards";
                document.getElementById("a1-16").style.display = "block";
                document.getElementById("a1-16").style.animation =
                  "moveDrop 1s forwards";
                setTimeout(function () {
                  stepInfo.innerHTML = `Drop: 1`;
                  document.getElementById("a1-16").style.display = "block";
                  document.getElementById("a1-16").style.animation =
                    "moveDrop1 1s forwards";
                  setTimeout(function () {
                    stepInfo.innerHTML = `Drop: 2`;
                    document.getElementById("a1-16").style.display = "block";
                    document.getElementById("a1-16").style.animation =
                      "moveDrop2 1s forwards";
                    setTimeout(function () {
                      stepInfo.innerHTML = `Drop: 3`;
                      document.getElementById("a1-16").style.display = "block";
                      document.getElementById("a1-16").style.animation =
                        "moveDrop3 1s forwards";
                      setTimeout(function () {
                        stepInfo.innerHTML = `Drop: 4`;
                        document.getElementById("a1-16").style.display =
                          "block";
                        document.getElementById("a1-16").style.animation =
                          "moveDrop4 1s forwards";
                        setTimeout(function () {
                          stepInfo.innerHTML = `Drop: 5`;
                          document.getElementById("a1-16").style.display =
                            "block";
                          document.getElementById("a1-16").style.animation =
                            "moveDrop6 1s forwards";
                          setTimeout(function () {
                            stepInfo.innerHTML = `Drop: 6`;
                            document.getElementById("a1-16").style.display =
                              "block";
                            document.getElementById("a1-16").style.animation =
                              "moveDrop6 1s forwards";
                            setTimeout(function () {
                              stepInfo.innerHTML = `Drop: 7`;
                              document.getElementById("a1-16").style.display =
                                "block";
                              document.getElementById("a1-16").style.animation =
                                "moveDrop7 1s forwards";
                              setTimeout(function () {
                                stepInfo.innerHTML = `Drop: 8`;
                                document.getElementById("a1-16").style.display =
                                  "block";
                                document.getElementById(
                                  "a1-16"
                                ).style.animation = "moveDrop8 1s forwards";
                                setTimeout(function () {
                                  stepInfo.innerHTML = `Drop: 9`;
                                  document.getElementById(
                                    "a1-16"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "a1-16"
                                  ).style.animation = "moveDrop9 1s forwards";
                                  setTimeout(function () {
                                    stepInfo.innerHTML = `Drop: 10`;
                                    document.getElementById(
                                      "a1-16"
                                    ).style.display = "block";
                                    document.getElementById(
                                      "a1-16"
                                    ).style.animation =
                                      "moveDrop10 1s forwards";
                                    document.getElementById(
                                      "grad25"
                                    ).style.display = "block";
                                    document.getElementById(
                                      "grad25"
                                    ).style.animation =
                                      "moveGrad1 20s forwards";
                                    setTimeout(function () {
                                      stepInfo.innerHTML = `Drop: 11`;
                                      document.getElementById(
                                        "a1-16"
                                      ).style.display = "block";
                                      document.getElementById(
                                        "a1-16"
                                      ).style.animation =
                                        "moveDrop11 1s forwards";
                                      setTimeout(function () {
                                        stepInfo.innerHTML = `Drop: 12`;
                                        document.getElementById(
                                          "a1-16"
                                        ).style.display = "block";
                                        document.getElementById(
                                          "a1-16"
                                        ).style.animation =
                                          "moveDrop12 1s forwards";
                                        setTimeout(function () {
                                          stepInfo.innerHTML = `Drop: 13`;
                                          document.getElementById(
                                            "a1-16"
                                          ).style.display = "block";
                                          document.getElementById(
                                            "a1-16"
                                          ).style.animation =
                                            "moveDrop13 1s forwards";
                                          setTimeout(function () {
                                            stepInfo.innerHTML = `Drop: 14`;
                                            document.getElementById(
                                              "a1-16"
                                            ).style.display = "block";
                                            document.getElementById(
                                              "a1-16"
                                            ).style.animation =
                                              "moveDrop14 1s forwards";
                                            setTimeout(function () {
                                              stepInfo.innerHTML = `Drop: 15`;
                                              document.getElementById(
                                                "a1-16"
                                              ).style.display = "block";
                                              document.getElementById(
                                                "a1-16"
                                              ).style.animation =
                                                "moveDrop15 1s forwards";

                                              setTimeout(function () {
                                                stepInfo.innerHTML = `Drop: 16`;
                                                document.getElementById(
                                                  "a1-16"
                                                ).style.display = "block";
                                                document.getElementById(
                                                  "a1-16"
                                                ).style.animation =
                                                  "moveDrop16 1s forwards";
                                                setTimeout(function () {
                                                  stepInfo.innerHTML = `Drop: 17`;
                                                  document.getElementById(
                                                    "a1-16"
                                                  ).style.display = "block";
                                                  document.getElementById(
                                                    "a1-16"
                                                  ).style.animation =
                                                    "moveDrop17 1s forwards";
                                                  setTimeout(function () {
                                                    stepInfo.innerHTML = `Drop: 18`;
                                                    document.getElementById(
                                                      "a1-16"
                                                    ).style.display = "block";
                                                    document.getElementById(
                                                      "a1-16"
                                                    ).style.animation =
                                                      "moveDrop18 1s forwards";
                                                    setTimeout(function () {
                                                      stepInfo.innerHTML = `Drop: 19`;
                                                      document.getElementById(
                                                        "a1-16"
                                                      ).style.display = "block";
                                                      document.getElementById(
                                                        "a1-16"
                                                      ).style.animation =
                                                        "moveDrop19 1s forwards";
                                                      setTimeout(function () {
                                                        stepInfo.innerHTML = `Drop: 20`;
                                                        document.getElementById(
                                                          "a1-16"
                                                        ).style.display =
                                                          "block";
                                                        document.getElementById(
                                                          "a1-16"
                                                        ).style.animation =
                                                          "moveDrop20 1s forwards";

                                                        setTimeout(function () {
                                                          stepInfo.innerHTML = `Finding weight of beaker with kerosene in grams.`;

                                                          document.getElementById(
                                                            "a1-16"
                                                          ).style.display =
                                                            "none";

                                                          setTimeout(
                                                            function () {
                                                              document.getElementById(
                                                                "grad25"
                                                              ).style.display =
                                                                "none";
                                                              document.getElementById(
                                                                "grad24"
                                                              ).style.display =
                                                                "none";
                                                              document.getElementById(
                                                                "a2-12"
                                                              ).style.display =
                                                                "block";
                                                              document.getElementById(
                                                                "a2-10"
                                                              ).style.display =
                                                                "none";
                                                              document.getElementById(
                                                                "a2-11"
                                                              ).style.display =
                                                                "block";
                                                              document.getElementById(
                                                                "a2-12"
                                                              ).style.animation =
                                                                "moveDist1 2s forwards";
                                                              setTimeout(
                                                                function () {
                                                                  document.getElementById(
                                                                    "grm2"
                                                                  ).style.display =
                                                                    "block";
                                                                  document.getElementById(
                                                                    "grm2"
                                                                  ).innerHTML =
                                                                    "50.123";
                                                                  document.getElementById(
                                                                    "observationbutton"
                                                                  ).disabled = false;

                                                                  // document.getElementById("observation").style.display = 'block';
                                                                },
                                                                500
                                                              );
                                                            },
                                                            2000
                                                          );
                                                        }, 100);
                                                      }, 1000);
                                                    }, 1000);
                                                  }, 1000);
                                                }, 1000);
                                              }, 1000);
                                            }, 1000);
                                          }, 1000);
                                        }, 1000);
                                      }, 1000);
                                    }, 1000);
                                  }, 1000);
                                }, 1000);
                              }, 1000);
                            }, 1000);
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              };
            }, 2000);
          }, 2000);
        }, 500);
      }, 2000);
    }, 2000);
    // enable()
  }
}

function remove() {
  document.getElementById("remove").style.display = "none";
  document.getElementById("insert").style.display = "block";

  document.getElementById("fieldvalue").innerText = "0";
  document.getElementById("observationbutton").disabled = true;
  document.getElementById("addbutton").disabled = true;

  if (pcheck == true) {
    document.getElementById("circuit1").style.display = "block";
    document.getElementById("circuit2").style.display = "none";
    document.getElementById("circuit3").style.display = "none";
    document.getElementById("circuit4").style.display = "none";

    document.getElementById("cslider").style.opacity = "0.5";
    document.getElementById("cslider").disabled = true;

    document.getElementById("probe").style.display = "none";
    document.getElementById("probe").style.animation = "";
    document.getElementById("wire").style.display = "none";
    document.getElementById("wire").style.animation = "";

    document.getElementById("hallprobe").style.display = "none";
    document.getElementById("hallprobe").style.animation = "";
    document.getElementById("hallwire").style.display = "none";
    document.getElementById("hallwire").style.animation = "";

    document.getElementById("hprobe").style.display = "none";
    document.getElementById("hallsensor").style.display = "block";
  } else if (pcheck == false) {
    document.getElementById("circuit1").style.display = "none";
    document.getElementById("circuit2").style.display = "none";
    document.getElementById("circuit3").style.display = "block";
    document.getElementById("circuit4").style.display = "none";

    document.getElementById("cslider").style.opacity = "0.5";
    document.getElementById("cslider").disabled = true;

    document.getElementById("probe").style.display = "none";
    document.getElementById("probe").style.animation = "";
    document.getElementById("wire").style.display = "none";
    document.getElementById("wire").style.animation = "";

    document.getElementById("hallprobe").style.display = "none";
    document.getElementById("hallprobe").style.animation = "";
    document.getElementById("hallwire").style.display = "none";
    document.getElementById("hallwire").style.animation = "";

    document.getElementById("hprobe").style.display = "block";
    document.getElementById("hallsensor").style.display = "none";

    document.getElementById("voltagevalue").innerText = "0";
    disable();
  }
}

// current slider
// let cslider = document.getElementById("cslider");
// let coutput = document.getElementById("currentvalue");
// coutput.innerHTML = cslider.value;
// cslider.oninput = function () {
//     coutput.innerHTML = this.value;
// }

// function slider_reset() {
//     document.getElementById('currentvalue').innerText = "200";
//     document.getElementById('cslider').value = 200;
//     if (pcheck == true) {
//         b = 3.60;
//     } else if (pcheck == false) {
//         optionmaterial();
//     }
// }

// document.getElementById("materials").addEventListener("change", slider_reset);

function optionmaterial() {
  let select = document.getElementById("materials");
  let option = select.options[select.selectedIndex].value;
  if (option == "Germanium") {
    hvoltage = 0.0006;
    document.getElementById("voltagevalue").innerHTML = hvoltage;
  } else if (option == "Silicon") {
    hvoltage = 0.0079;
    document.getElementById("voltagevalue").innerHTML = hvoltage;
  } else if (option == "Copper") {
    hvoltage = 0.0287;
    document.getElementById("voltagevalue").innerHTML = hvoltage;
  } else {
    document.getElementById("voltagevalue").innerHTML = 0;
  }
}

function openobservation() {
  stepInfo.innerHTML = "";
  if (pcheck == false) {
    document.getElementById("observation1").style.display = "block";

    // document.getElementById('blocker').style.display = 'block';
  } else if (pcheck == true) {
    document.getElementById("observation").style.display = "block";
    // document.getElementById("insert").disabled = false;

    // document.getElementById('blocker').style.display = 'block';
  }
  blurr = true;
  blurring();
}

function closeobservation() {
  if (pcheck == false) {
    document.getElementById("observation1").style.display = "none";
    // document.getElementById('blocker').style.display = 'block';
    document.getElementById("finalresult").disabled = false;
  } else if (pcheck == true) {
    document.getElementById("observation").style.display = "none";
    // document.getElementById('blocker').style.display = 'block';
    document.getElementById("exp").disabled = false;
  }
  blurr = false;
  blurring();
  // document.getElementById('IBgraph').style.display = 'none';
  // document.getElementById('blocker').style.display = 'none';
  // document.getElementById('myChart').style.display = 'none';
  document.getElementById("instructions").style.display = "none";

  document.getElementById("finalresult").disabled = false;
}
function Refresh() {
  window.location = window.location.href;
}

// 3rd page
let checkCount = 0;
function checkClicked(evt) {
  // checkCount += evt.target.checked == true ? 1 : -1;
  document.getElementById("finalresult").disabled =
    option == 2 ? "false" : "true";
}

function clearing() {
  if (pcheck == false) {
    for (var i = 1; i < table.rows.length; ) {
      table.deleteRow(i);
    }
    hallcount = -1;
    sampleXarray.length = 0;
    sampleYarray.length = 0;
    document.getElementById("finalresult").disabled = true;
    document.getElementById("coefficientvalue").innerHTML = 0;
    document.getElementById("carriercon").innerHTML = 0;
  } else if (pcheck == true) {
    for (var i = 1; i < ibtable.rows.length; ) {
      ibtable.deleteRow(i);
    }
    magcount = -1;
    ibXarray.length = 0;
    ibYarray.length = 0;
    document.getElementById("finalresult").disabled = true;
    document.getElementById("coefficientvalue").innerHTML = 0;
    document.getElementById("carriercon").innerHTML = 0;
  }
}

function timer() {
  // document.getElementById('add').style.display = 'none';
}

function help() {
  document.getElementById("instructions").style.display = "block";
  // document.getElementById('blocker').style.display = 'block';
}

function hallcovalue() {
  document.getElementById("a2-12").style.display = "none";
  document.getElementById("a2-11").style.display = "none";
  document.getElementById("grm2").style.display = "none";
  document.getElementById("a2-6").style.display = "none";
  document.getElementById("grad111").style.display = "none";
  // document.getElementById('blocker').style.display = 'block';
  document.getElementById("observation3").style.display = "block";
  document.getElementById("exp").disabled = true;

  // blurr = true;
  // blurring();
}

function closeobservation3() {
  document.getElementById("observation3").style.display = "none";
  // document.getElementById('blocker').style.display = 'none';
  // document.getElementById("exp").disabled = false;
  // blurr = false;
  // blurring();
}
