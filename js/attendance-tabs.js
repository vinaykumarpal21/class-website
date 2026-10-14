/* Attendance page: Student / Staff tabs (also opens via attendance.html#student or #staff) */
(function () {
  'use strict';
  var tabs = [].slice.call(document.querySelectorAll('.att-tab'));
  if (!tabs.length) return;
  function show(name, push) {
    if (name !== 'staff') name = 'student';
    tabs.forEach(function (t) {
      var on = t.dataset.tab === name;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      var p = document.getElementById('panel-' + t.dataset.tab);
      p.classList.toggle('active', on);
      p.hidden = !on;
    });
    if (push) { try { history.replaceState(null, '', '#' + name); } catch (e) {} }
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.tab, true); }); });
  window.addEventListener('hashchange', function () { show(location.hash.slice(1)); });
  show(location.hash.slice(1));
})();
