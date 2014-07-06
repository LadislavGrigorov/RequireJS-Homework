/*global require */
(function () {
    'use strict';
    require.config({
        paths: {
            "jquery": "libs/jquery-2.1.1.min",
            "handlebars": 'libs/handlebars-v1.3.0',
            "controls": 'ComboBox/controls'
        }
    });

    require(["jquery", "controls"], function ($, controls) {
        var people = [
            { id: 1, name: "Doncho Minkov", age: 18, avatarUrl: "images/minkov.jpg" },
            { id: 2, name: "Nikolay Kostov", age: 19, avatarUrl: "images/niki2.jpg" },
            { id: 3, name: "Ivaylo Kenov", age: 20, avatarUrl: "images/ivo.jpg" },
            { id: 4, name: "Todor Stoyanov", age: 21, avatarUrl: "images/todor.jpg" }
        ];

        var comboBox = controls.ComboBox(people),
            template = $("#person-template").html(),
            comboBoxHtml = comboBox.render(template);
            $('body').append(comboBoxHtml);
    });
}());