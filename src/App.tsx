/**@jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import differenceInDays from "date-fns/differenceInDays";
import isAfter from "date-fns/isAfter";

const someCssColors = [
  "Aqua",
  "Aquamarine",
  "Bisque",
  "CadetBlue",
  "Chartreuse",
  "Coral",
  "CornflowerBlue",
  "Crimson",
  "Cyan",
  "DeepPink",
  "DeepSkyBlue",
  "DodgerBlue",
  "ForestGreen",
  "Fuchsia",
  "Gold",
  "GoldenRod",
  "Green",
  "GreenYellow",
  "HotPink",
  "IndianRed",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSteelBlue",
  "Lime",
  "LimeGreen",
  "Magenta",
  "MediumAquaMarine",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "Orange",
  "OrangeRed",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PeachPuff",
  "Pink",
  "Plum",
  "PowderBlue",
  "Red",
  "SkyBlue",
  "SpringGreen",
  "SteelBlue",
  "Teal",
  "Tomato",
  "Turquoise",
  "Violet",
  "Yellow",
  "YellowGreen"
];

const App: React.FC = () => {
  const [birthday, setBirthday] = React.useState(``);
  const [colorName, setColorName] = React.useState(``);
  const today = new Date();
  const currentYear = today.getFullYear();

  const getYear = (day: string): number =>
    isAfter(new Date(`${day} ${currentYear}`), today)
      ? currentYear
      : currentYear + 1;

  const days = [
    { name: `jack`, date: `April 7` },
    { name: `leila`, date: `January 11` },
    { name: `nicole`, date: `July 29` },
    { name: `rob`, date: `February 28` },
    { name: `jen`, date: `December 15` },
    { name: `richard`, date: `August 13` },
    { name: `esther`, date: `March 29` },
    { name: `jamie`, date: `August 11` },
    { name: 'natalie', date: 'October 27' },
    { name: 'christmas', date: 'December 25' }
  ];

  const daysUntil: {
    name: string;
    date: string;
    numDays: number;
  }[] = days
    .map((day: { name: string; date: string }) => ({
      name: day.name,
      date: day.date,
      numDays: differenceInDays(
        new Date(`${day.date} ${getYear(day.date)}`),
        today
      )
    }))
    .sort((a, b) => (a.numDays > b.numDays ? 1 : -1));

  const transition = "all 250ms ease-in";

  return (
    <div
      css={{
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: 40
      }}
    >
      <div
        css={{
          width: "100%",
          maxWidth: "480px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white"
        }}
      >
        <h1
          css={{
            fontStyle: "italic",
            fontSize: 32,
            borderBottom: "4px solid white",
            paddingBottom: 10,
            textTransform: "capitalize",
            marginBottom: 32
          }}
        >
          days until
        </h1>
        <span
          css={{
            minHeight: 56,
            fontSize: 20,
            fontWeight: "bold",
            color: colorName,
            transition
          }}
        >
          {birthday}
        </span>
        <ol
          css={{
            listStyle: "none",
            width: "100%",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          {daysUntil.map(
            (days: { name: string; date: string; numDays: number }) => (
              <li
                css={{
                  marginBottom: 24,
                  borderBottom: "2px solid",
                  borderColor: birthday === days.date ? colorName : "white",
                  paddingBottom: 8,
                  transition
                }}
              >
                <button
                  css={{
                    width: "100%",
                    backgroundColor: "inherit",
                    color: birthday === days.date ? colorName : "inherit",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    textTransform: "capitalize",
                    fontSize: 20,
                    fontWeight: "bold",
                    padding: 0,
                    margin: 0,
                    outline: "none",
                    transition
                  }}
                  onClick={() => {
                    setColorName(
                      someCssColors[
                        Math.floor(Math.random() * someCssColors.length)
                      ]
                    );
                    setBirthday(days.date);
                  }}
                >
                  <span>{days.name}'s birthday</span>
                  <span>{days.numDays}</span>
                </button>
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default App;
