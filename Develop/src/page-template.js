// create the team
const generateTeamMembers = (team) => {
  return team.map(member => {
    if (member.getRole() === 'Engineer') {
      return `
        <article>
        <h2>${member.getRole()}</h2>
        <ul>
          <li>ID: ${member.getId()}2</li>
          <li>Email: ${member.getEmail()}</li>
          <li>GitHub: <a href="#github">${member.getGitHub()}</a></li>
        </ul>
      </article>
      `
    }
    if (member.getRole() === 'Intern') {
      return `
        <article>
        <h2>${member.getRole()}</h2>
        <ul>
          <li>ID: ${member.getId()}2</li>
          <li>Email: ${member.getEmail()}</li>
          <li>School: ${member.getSchool()}</li>
        </ul>
      </article>
      `
    }
    if (member.getRole() === 'Manager') {
      return `
        <article>
        <h2>${member.getRole()}</h2>
        <ul>
          <li>ID: ${member.getId()}2</li>
          <li>Email: ${member.getEmail()}</li>
          <li>Office:${member.getOfficeNumber()}</li>
        </ul>
      </article>
      `
    }
  }).join('');
};

// export function to generate entire page
module.exports = (team) => {
  // TODO: MAIN HTML TEMPLATE LITERAL GOES HERE
  return `
    <!-- Instructor provided template -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ENTER PAGE TITLE HERE</title>
  <!-- Minified version -->
  <link href="./style.css" rel = "stylesheet">
  <style>
    @import "https://cdn.simplecss.org/simple.min.css";

    main {
      display: grid;
      grid-column: 1/-1;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      max-width: 1140px;
      margin: auto;
    }

    @media screen and (max-width: 1140px) {
      main {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (max-width: 720px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>
    ${generateTeamMembers(team)}
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html>

    `
};
