defaultValsHandler
==================

defaultValsHandler is a simple jQuery plugin for remembering default values of input fields and contenteditable elements, useful when using flat design where label next to input field describing it is just extra element wasting space.

It is using new HTML5 data attribute to store default value of element

Behavior
--------

- If User clicks the input element, description is blanked.
- If user leaves input without writing anything, description goes back.
- If User writes anything, then leave the field and then goes back to continue to write or modify something, nothing happens.
- If User writes something and then leave field and later delete all, description goes back

Possible issues/future plans/do not use when
--------------------------------------------

- password fields 
- app design where is ability to submit forms with empty fields

Tryout
------

[defaultValsHandler on JSFiddle](https://jsfiddle.net/Kovo/zzaj33of/1/)

