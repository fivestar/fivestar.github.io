/*!
 * (C) 2016 Ancar Inc.
 */
+function () {

  'use strict';

  var MEMBERS = [
    '城',
    '岩本',
    '林',
    '岡野',
    '塚本',
    '池田',
    '竹内',
    '須藤',
    '勢田',
    '島倉',
    '横田'
  ];

  var Shuffler;

  Shuffler = function (form, defaultMembers) {
    this.form = form;
    this.inputMembers = form.querySelector('.form-shuffle__input-members');
    this.inputResult = form.querySelector('.form-shuffle__input-result');
    this.inputGrouping = form.querySelector('.form-shuffle__input-grouping');
    this.isShuffling = false;

    this.form.addEventListener('submit', function (event) {
      event.preventDefault();
      this.shuffle();
    }.bind(this));

    this.inputResult.addEventListener('click', function (event) {
      this.inputResult.select();
    }.bind(this));

    this.inputMembers.value = _format(defaultMembers);
  }

  Shuffler.prototype.shuffle = function () {
    if (this.isShuffling) {
      return;
    }

    this.isShuffling = true;

    var currentMembers = this.inputMembers.value.split("\n");
    var listMembers;
    var rollingTimes = 15;
    var rollingCount = 0;
    var timer;

    timer = setInterval(function () {
      listMembers = _shuffleArray(currentMembers)
        .filter(function (s) {
          return (s.trim() != '');
        });

      this.inputResult.value = _format(listMembers, this.inputGrouping.value);

      if (++rollingCount > rollingTimes) {
        clearInterval(timer);

        this.isShuffling = false;
      }
    }.bind(this), 50);
  }

  function _shuffleArray(ary) {
    for (var i = ary.length - 1, r, tmp; i >= 0; i--) {
      r = Math.floor(i * Math.random());
      tmp = ary[i];
      ary[i] = ary[r];
      ary[r] = tmp;
    }

    return ary;
  }

  function _format(listMembers, groupingType) {
    if (!groupingType) {
      groupingType = 'P1';
    }

    var type = groupingType.substring(0, 1);
    var num = parseInt(groupingType.substring(1));
    var membersSet = [];
    var output = '';

    if (num < 1) {
      console.error('Invalid grouping type: ' + groupingType);

      return;
    }

    switch (type) {
      case 'P':
        membersSet = _groupByPersons(listMembers, num);
        break;
      case 'G':
        membersSet = _groupByGroups(listMembers, num);
        break;
    }

    output = membersSet.map(function (members) {
      return members.join('・');
    }).join("\n");


    return output;
  }

  function _groupByPersons(listMembers, num) {
    var membersSet = [];

    for (var i = 0, len = Math.ceil(listMembers.length / num); i < len; i++) {
      var j = i * num;

      membersSet.push(listMembers.slice(j, j + num));
    }

    return membersSet;
  }

  function _groupByGroups(listMembers, num) {
    var membersSet = [];

    for (var i = 0; i < num; i++) {
      membersSet[i] = [];
    }

    for (var i = 0, len = listMembers.length; i < len; i++) {
      membersSet[i % num].push(listMembers[i]);
    }

    return membersSet;
  }


  document.addEventListener('DOMContentLoaded', function () {

    var shuffler = new Shuffler(document.querySelector('#formShuffle'), MEMBERS);

    // reshuffle on `r` key down
    document.addEventListener('keydown', function (event) {
      if (event.srcElement === document.body || event.srcElement.classList.contains('form-shuffle__btn-shuffle')) {
        if (event.key === 'r' && event.metaKey === false) {
          shuffler.shuffle();
        }
      }
    });

  });

}();
