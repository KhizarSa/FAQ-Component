"use strict";

const qaEl = document.querySelectorAll(".qa");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const icon = document.querySelectorAll(".icon");

qaEl.forEach((qa) => {
  qa.addEventListener("click", function (e) {
    if (!e.target.classList.contains("allow")) return;

    const el = e.target.closest(".qa");

    qaEl.forEach((q) => {
      if (q === el) return;
      q.classList.remove("active");
    });

    el.classList.toggle("active");

    answer.forEach((ans) => {
      ans.classList.add("hidden");
      if (ans.closest(".qa").classList.contains("active")) {
        ans.classList.remove("hidden");
      }
    });
  });
});
