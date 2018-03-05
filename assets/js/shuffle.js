/*!
 * kana.js
 *
 * (C) 2016 OGAWA Katsuhiro
 */
!function($) {
  'use strict';

  class Shuffler {
    constructor(formElement) {
      this.formElement = formElement;
      this.btnElement = this.formElement.querySelector("js-shuffle-button");

      this.groupingField = this.formElement["grouping"];
      this.numbersField = this.formElement["numbers"];
      this.inputField = this.formElement["input"];
      this.outputField = this.formElement["output"];
      this.glueField = this.formElement["glue"];

      this.isShuffling = false;

      this.formElement.addEventListener('submit', (event) => {
        event.preventDefault();

        this.onShuffle();
      });

      this.outputField.addEventListener('click', (event) => {
        this.outputField.select();
      });

      this.config = {
        rolling: 15,
      }

      this.onShuffle = this.onShuffle.bind(this)
      this.shuffleMembers = this.shuffleMembers.bind(this)
      this.shuffleArray = this.shuffleArray.bind(this)
    }

    onShuffle() {
      if (this.isShuffling) {
        return;
      }

      this.isShuffling = true;

      let listMembers = [];
      let rollingCount = 0;
      let timer;

      timer = setInterval(() => {
        listMembers = this.shuffleArray(this.inputField.value.split("\n"))
          .filter((s) => {
            return (s.trim() != '');
          });

        this.outputField.value = this.shuffleMembers(listMembers)
          .map((members) => {
            return members.join(this.glueField.value);
          }).join("\n");

        if (++rollingCount > this.config.rolling) {
          clearInterval(timer);

          this.isShuffling = false;
        }
      }, 50);
    }

    shuffleArray(ary) {
      for (var i = ary.length - 1, r, tmp; i >= 0; i--) {
        r = Math.floor(i * Math.random());
        tmp = ary[i];
        ary[i] = ary[r];
        ary[r] = tmp;
      }

      return ary;
    }

    shuffleMembers(listMembers) {
      var num = Math.max(parseInt(this.numbersField.value), 1);

      switch (this.groupingField.value) {
        case 'P':
          return this.groupByPeople(listMembers, num);
          break;
        case 'G':
          return this.groupByGroups(listMembers, num);
          break;
        default:
          console.error("Invalid grouping type")
      }

      return []
    }

    groupByPeople(listMembers, num) {
      var result = [];

      for (var i = 0, len = Math.ceil(listMembers.length / num); i < len; i++) {
        var j = i * num;

        result.push(listMembers.slice(j, j + num));
      }

      return result;
    }

    groupByGroups(listMembers, num) {
      var result = [];

      for (var i = 0; i < num; i++) {
        result[i] = [];
      }

      for (var i = 0, len = listMembers.length; i < len; i++) {
        result[i % num].push(listMembers[i]);
      }

      return result;
    }

    enableKeyboardShortcut(key) {
      document.addEventListener('keydown', function (event) {
        if (event.srcElement === document.body || event.srcElement === this.btnElement) {
          if (event.key === 'r' && event.metaKey === false) {
            this.onShuffle();
          }
        }
      });
    }
  }


  document.addEventListener('DOMContentLoaded', function () {
    var shuffler = new Shuffler(document.querySelector('.js-shuffle-form'));
  });


}(window.jQuery);
