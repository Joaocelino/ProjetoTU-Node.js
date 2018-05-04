# ProjetoTU
ProjetoTU - Coleta de óleo (version: "1.0.0")
<br />
## DESCRIPTION:
**PT-BR:**
	* Web App que ira auxiliar empresas e conveniados na coleta de óleo descartado.
**EN-US:**
	* A Web App that will assist companies and partners in collecting discarded oil.
<br />
<br />
## TOOLS:
Visual Studio 2017
JavaScript(JQuery, JSON)
Node.js(npm, express, ejs, pm2, nodemon, express-load)
HTML5 and CSS3(Bootstrap 4, Popper.js)
MySQL(Workbench, Mysql Server)
<br />
<br />
## USING THE PROJECT:
**How to use(Windows):**
<p>1 - Install the Node.js (https://nodejs.org/) in your computer.</p>
<p>2 - Open CMD as administrator.</p>
<p>3 - Update the NPM(Node Package Manager) with the command "npm update".</p>
<p>4 - Clone the project folder to your workplace</p>
<p>5 - Using NPM, install the following packages:</p>
<p>
```
	npm i popper
		npm i jquery
		npm i bootstrap
		npm i express
		npm i express-load
		npm i ejs
		npm i mysql
		npm i nodemon
		npm install pm2 -g (this package will keep the server on after closing the console(only at AWS Ec2), check the documentation at the official site: http://pm2.keymetrics.io/).
```
</p>
<p>
	> You can install all modules inside the project folder, through the CMD select the folder and type "--save" after each npm command line(exemple: npm i popper --save).
	> After installing all packeges, make sure it's in the "node_modules" folder, then let's go to the next step.
</p>
<p></p>
<p></p>
<p></p>
<p></p>		
		you can install all modules inside the project folder, through the CMD select the folder and type "--save" after each npm command line(exemple: npm i popper --save).
		After installing all packeges, make sure it's in the "node_modules" folder, then let's go to the next step.

	5 - (still in the project folder)using nodemon, start the server typing on the console: 
	nodemon app.js
	5.1 - (still in the project folder)using PM2, start the server typing on the console: 
	pm2 start app.js
	5.2 - Check the pm2 server status typing:
	pm2 status
	6 - Wait until the confirmation message: 
	Server rodando na porta 3000


That's all Folks, Enjoy!