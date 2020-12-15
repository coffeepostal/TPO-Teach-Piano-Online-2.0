<template>
	<div id="app">
		<div id="messages">
			<div
				v-for="(message, index) in messages"
				:key="message.id"
				class="message"
				:class="message.type"
			>
				<p>{{ message.text }}</p>
				<button class="button" @click="killMessage(index)">X</button>
			</div>
		</div>

		<header id="header">
			<div id="header-content">
				<h1>Welcome!</h1>
				<p>
					Please choose between the Practice Sheet Generator and the
					Random Number Generator.
				</p>

				<div id="generation-form">
					<fieldset class="title">
						<input
							id="toggle-on"
							class="toggle toggle-left"
							name="toggle"
							type="radio"
							value="practice"
							v-model="sheet"
							checked
						/>
						<label for="toggle-on" class="btn"
							>Practice Sheets</label
						>
						<input
							id="toggle-off"
							class="toggle toggle-right"
							name="toggle"
							type="radio"
							value="random"
							v-model="sheet"
						/>
						<label for="toggle-off" class="btn"
							>Random Numbers</label
						>
					</fieldset>

					<fieldset>
						<legend>Piece Title:</legend>
						<input
							type="text"
							v-model="piece"
							placeholder="Input Piece Title"
							name="piece"
						/>
					</fieldset>

					<fieldset>
						<legend>Composer</legend>
						<input
							type="text"
							v-model="composer"
							placeholder="Input Composer's Name (optional)"
							name="composer"
						/>
					</fieldset>

					<fieldset>
						<legend>Student's Name:</legend>
						<input
							type="text"
							v-model="student"
							placeholder="Input Student's Name (optional)"
							name="student"
						/>
					</fieldset>

					<fieldset v-show="sheet === 'practice'">
						<legend>Number of Measures</legend>
						<input
							v-model.number="measures"
							@keyup="repeatRange"
							type="number"
							min="1"
							max="96"
						/>
					</fieldset>

					<fieldset v-show="sheet === 'random'">
						<legend>Starting Measure</legend>
						<input
							v-model.number="startingMeasure"
							@keyup="repeatRange"
							type="number"
							min="1"
						/>
					</fieldset>

					<fieldset v-show="sheet === 'random'">
						<legend>Ending Measure</legend>
						<input
							v-model.number="endingMeasure"
							@keyup="repeatRange"
							type="number"
						/>
					</fieldset>

					<fieldset>
						<legend>{{ repeatType }}</legend>
						<input
							v-model.number="repeat"
							@keyup="repeatRange"
							type="number"
							min="1"
						/>
					</fieldset>

					<fieldset>
						<legend
							title="We require an email address to track uses"
						>
							Email Address ❓
						</legend>
						<input
							type="email"
							v-model="email"
							placeholder="user@domain.com"
							name="email"
						/>
					</fieldset>
				</div>

				<div id="generation-button">
					<button @click="exportPDF">Export PDF</button>
				</div>
			</div>

			<div id="header-controls">
				<a href="#" @click="showHideControls">
					<div class="control">
						<div id="bar-1" class="header-control-bar"></div>
						<div id="bar-2" class="header-control-bar"></div>
						<div id="bar-3" class="header-control-bar"></div>
						<div id="bar-4" class="header-control-bar"></div>
					</div>
				</a>
			</div>
		</header>

		<div id="container">
			<div id="paper">
				<div id="page">
					<div id="copyright">
						<img src="@/assets/c2ch-yellowcat.jpg" />
					</div>

					<div id="info">
						<div v-if="piece || composer || student">
							<h4>{{ piece }}</h4>
							<h4 v-show="composer">by {{ composer }}</h4>
							<h5>{{ student }}</h5>
						</div>
						<div v-else>
							<h6>Please input info above...</h6>
						</div>
					</div>

					<div id="grid">
						<div
							class="grid-practice"
							v-show="sheet === 'practice'"
						>
							<div
								class="grid-tile"
								v-for="grid in repeat"
								:key="grid.id"
							>
								<div
									class="measure"
									v-for="(measure, index) in measures"
									:key="measure.id"
								>
									<div class="inner-measure">
										{{ index + 1 }}
									</div>
								</div>
							</div>
						</div>

						<div class="grid-random" v-show="sheet === 'random'">
							<div
								class="measure"
								v-for="(measure, index) in randomizedMeasures"
								:key="measure.id"
							>
								<div class="inner-measure">
									{{ randomizedMeasures[index] }}
								</div>
							</div>
						</div>
					</div>

					<div id="footer">
						<div class="footer-column">
							<h4 class="footer-column-title">Weekly Missions</h4>
							<div class="footer-column-number">1</div>
							<div class="footer-column-box"></div>
							<div class="footer-column-number">2</div>
							<div class="footer-column-box"></div>
							<div class="footer-column-number">3</div>
							<div class="footer-column-box"></div>
						</div>

						<div class="footer-column">
							<h4 class="footer-column-title">Lesson Goals</h4>
							<div class="footer-column-number">1</div>
							<div class="footer-column-box"></div>
							<div class="footer-column-number">2</div>
							<div class="footer-column-box"></div>
							<div class="footer-column-number">3</div>
							<div class="footer-column-box"></div>
						</div>
					</div>

					<div id="logo-date">
						<div id="logo">
							<img src="@/assets/tpo-logo.jpg" />
						</div>
						<div id="date">
							<h4>{{ date }}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//  Importing Packages
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import moment from 'moment'

//  Importing PostsService to send piece title, composer, and email address to JSON file
import PostsService from '@/services/PostsService'

export default {
	name: 'Practice Sheet',
	data() {
		return {
			sheet: 'practice',
			student: '',
			piece: '',
			composer: '',
			date: moment().format('dddd, MMMM Do YYYY'),
			measures: 40,
			measuresMax: 96,
			repeat: 1,
			repeatMax: 6,
			startingMeasure: 13,
			endingMeasure: 28,
			measureRange: [],
			numberOfLargemeasuresMax: 210,
			numberOfSmallmeasuresMax: 336,
			messages: [],
			email: '',
		}
	},
	computed: {
		randomizedMeasures() {
			console.log('randomizedMeasures() has been called')
			//	Setup variables
			let rangedMeasures = []
			let repeat = this.repeat
			let randomizedMeasures = []

			//	Create array from low/high values
			for (let i = this.startingMeasure; i <= this.endingMeasure; i++) {
				//	Add 'repeat' copies of this number
				for (let i2 = 0; i2 < repeat; i2++) {
					//	Add 'i' to array
					rangedMeasures.push(i)
				}
			}

			//	Randomize the measures
			randomizedMeasures = rangedMeasures.sort(function () {
				return 0.5 - Math.random()
			})

			//	Set the value of measureRange to the randomized, repeated array
			// return (this.measureRange = randomizedMeasures);
			return randomizedMeasures
		},
		repeatType() {
			if (this.sheet === 'practice') {
				return 'Repeat Grid'
			} else {
				return 'Repeat Range'
			}
		},
	},
	methods: {
		async addPost() {
			await PostsService.addPost({
				piece: this.piece,
				composer: this.composer,
				email: this.email,
			})
			// this.$router.push({ name: 'Posts' })
		},
		errorMessages() {
			//	 Set variables
			const repeat = this.repeat
			var repeatMax = this.repeatMax
			const measures = this.measures
			const sheet = this.sheet
			const measureRange = this.measureRange.length
			const startingMeasure = this.startingMeasure
			const endingMeasure = this.endingMeasure
			const email = this.email

			if (!email) {
				this.message('error', 'You must provide an email address')
			}

			//	Check to see which sheet if visible
			if (sheet == 'practice') {
				//	Don't let the repeat go less than 1
				if (repeat < 1) {
					this.repeat = 1
					this.message('alert', 'There must be at least one grid')
				}

				//	Check to see if there are too many grids of measures to render the PDF
				if (repeat > 2) {
					switch (true) {
						case 0 <= measures && measures <= 8:
							repeatMax = 18
							break
						case 8 < measures && measures <= 16:
							repeatMax = 10
							break
						case 16 < measures && measures <= 32:
							repeatMax = 6
							break
						case 32 < measures && measures <= 48:
							repeatMax = 4
							break
						default:
							repeatMax = 2
					}

					if (repeat > repeatMax) {
						this.repeat = repeatMax
						this.message(
							'error',
							'With this many measures, you can only have ' +
								repeatMax +
								' grids'
						)
					}
				}

				//	 Check to see if there are too many measures to render the PDF correctly
				if (measures < 8) {
					this.measures = 8
					this.message(
						'error',
						'There can be a minimum of 8 measures'
					)
				}
				if (measures > 96) {
					this.measures = 96
					this.message(
						'error',
						'There can be a maximum of 96 measures'
					)
				}
			} else {
				//	Don't let the repeat go less than 1
				if (startingMeasure < 1) {
					this.startingMeasure = 1
					this.message(
						'alert',
						"You can't start a piece before the first measure"
					)
				}

				//	Make sure the ending measrue is higher than the starting measure
				if (endingMeasure <= startingMeasure) {
					this.endingMeasure = startingMeasure + 1
					this.message(
						'alert',
						'The Ending Measure must be larger than the Starting Measure'
					)
				}

				//	Make sure there aren't too many boxes to render PDF
				if (measureRange > 192) {
					console.log('Too big')
					this.endingMeasure = startingMeasure + 191
					this.message(
						'error',
						'There can only be a maximum of 192 total random measures'
					)
				}
			}
		},
		exportPDF() {
			//  Run through the error messages
			this.errorMessages()

			if (this.piece != '' && this.email != '') {
				//  Add the data to the JSON file via Axios
				this.addPost()

				//	Get the title of the piece, and format the name
				const date = moment().format('YYYY-MM-DD')
				const piece = this.piece.replace(/\s+/g, '-').toLowerCase()
				const measures =
					this.sheet == 'practice'
						? this.measures + 'x' + this.repeat
						: this.startingMeasure +
						  '-' +
						  this.endingMeasure +
						  '-' +
						  this.repeat +
						  'x'
				const filename = `${date}.${piece}-${measures}`

				const element = document.getElementById('paper')

				html2canvas(element, { scale: 2, useCORS: true }).then(
					(canvas) => {
						const imgData = canvas.toDataURL('image/jpeg', 1.0)

						// document.body.appendChild(canvas)

						const doc = new jspdf('p', 'pt', 'letter')
						doc.addImage(imgData, 'JPEG', 0, 0, 612, 792)
						doc.save(filename + '.pdf')

						//	Send success message
						this.message('success', 'PDF has been created.')
					}
				)
			} else {
				this.message('error', 'You must input at least the piece name')
			}
		},
		killMessage(index) {
			console.log('"index[' + index + ']" has been deleted')
			this.$delete(this.messages, index)
		},
		limitNumber: function (val, oldVal, decimals, min, max) {
			if (isNaN(val)) {
				return oldVal
			}
			return parseFloat(Math.max(Math.min(val, max), min)).toFixed(
				decimals
			)
		},
		message(type, message) {
			//	Get messages array
			const messagesArray = this.messages

			//	Push message to array
			messagesArray.push({ type: type, text: message })
		},
		repeatRange() {
			//	 Set variables
			const repeat = this.repeat
			// const repeatMax = this.repeatMax;
			// const measures = this.measures;
			// const sheet = this.sheet;
			// const measureRange = this.measureRange.length;
			const startingMeasure = this.startingMeasure
			const endingMeasure = this.endingMeasure

			//	Combine variables to make other variables
			const subtotalMeasures = endingMeasure - startingMeasure
			const totalMeasures = subtotalMeasures * repeat

			console.log(totalMeasures)
		},
		showHideControls() {
			//  Get the elements
			// let header = document.getElementById("header");
			let headerControls = document.getElementById('header-controls')
			let form = document.getElementById('header-content')

			// Calculates form height, adds "-" and "px"
			let height = '-' + form.clientHeight + 'px'

			//  Check to see if the "closed" class is on the headerControls
			if (headerControls.classList == '') {
				//  Add the "closed" class to the headerControls
				headerControls.classList.add('closed')

				// Add negative margin of form's height to header
				form.style.marginTop = height
			} else {
				//  Remove the "closed" class to the headerControls
				headerControls.classList.remove('closed')

				// Add negative margin of form's height to header
				form.style.marginTop = 0
			}
		},
	},
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i|Oswald|Source+Serif+Pro');
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

body {
	font-family: 'Source Serif Pro', serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
}
h1 {
	font-family: 'Oswald', 'Montserrat', sans-serif;
	font-size: 3rem;
	color: $primary-color;
}
h2 {
	font-size: 2rem;
}
h3 {
	font-size: 1.5rem;
}
h4 {
	font-size: 1rem;
}
h5 {
	font-size: 1rem;
	margin-top: 1rem;
}
h6 {
	font-family: 'Source Serif Pro', serif;
	font-size: 1rem;
	font-style: italic;
	color: $secondary-color;
}
p {
	font-size: 1rem;
}
.inner-cell {
	color: rgba($black, 0.25);
	font-size: 0.75rem;
	font-weight: 700;
	font-style: italic;
}

/* Layout */
#messages {
	position: fixed;
	bottom: 20px;
	left: 20px;
	width: 320px;

	.message {
		display: grid;
		grid-template-columns: 1fr 40px;
		padding: 20px;
		margin-top: 10px;
		box-shadow: 0 5px 20px rgb(100, 100, 100);
		font-style: italic;

		p {
			align-self: center;
			justify-self: center;
		}
		.button {
			padding: 10px;
			background: rgba(0, 0, 0, 0.2);
			color: white;
			border: 0;
			margin-left: 10px;
			align-self: center;
			justify-self: center;
		}

		&.alert {
			background: rgb(253, 251, 147);
			color: black;
		}
		&.error {
			background: rgb(131, 38, 38);
			color: white;
		}
		&.success {
			background: rgb(36, 126, 76);
			color: white;
		}
	}
}
#header {
	#header-content {
		padding: 20px 20px 0;
		transition: margin-top 0.5s;
	}

	#generation-form {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
		margin-top: 20px;
		.title {
			grid-column: 1 / -1;
		}
	}
	#generation-button {
		display: flex;
		margin-top: 20px;
		justify-content: center;
		button {
			grid-column: 2 / 3;
			background: $primary-color;
			color: white;
			padding: 20px 40px;
			border-radius: 5px;
			text-transform: uppercase;
			font-weight: 700;
			font-size: 1rem;
			letter-spacing: 3px;
			cursor: pointer;
			transition: background 0.25s;
			&:hover {
				background: darken($primary-color, 10%);
			}
		}
	}
	#header-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform ease 0.5s;

		//	Bar Controls
		$arrow-length: 30px;
		$arrow-thickness: 4px;
		$base-rotation: 28deg;
		$base-gap: 14px;
		$hover-rotation: 35deg;
		$hover-gap: 10px;

		//	Bar Control Calcs
		$arrow-vert-center: $arrow-thickness / 2;
		$arrow-horz-center: $arrow-length / 2;

		$container-vert-center: $arrow-length;
		$container-horz-center: $arrow-length;

		$bar-horz-position-left: 0px + ($arrow-thickness / 4);
		$bar-horz-position-right: $container-horz-center -
			($arrow-thickness / 4);

		$bar-vert-position-top: $container-vert-center - 7 -
			($arrow-thickness / 2) - ($base-gap / 2);
		$bar-vert-position-bottom: $container-vert-center - 7 -
			($arrow-thickness / 2) + ($base-gap / 2);

		a {
			.control {
				height: $arrow-length * 2;
				width: $arrow-length * 2;
				.header-control-bar {
					position: absolute;
					background: $secondary-color;
					width: $arrow-length;
					height: $arrow-thickness;
					border-radius: $arrow-thickness / 2;
					transition: transform ease 0.125s;
				}
				#bar-1 {
					transform: translate(
							$bar-horz-position-left,
							$bar-vert-position-top
						)
						rotate(-$base-rotation);
					transform-origin: 100% 50%;
				}
				#bar-2 {
					transform: translate(
							$bar-horz-position-right,
							$bar-vert-position-top
						)
						rotate($base-rotation);
					transform-origin: 0% 50%;
				}
				#bar-3 {
					transform: translate(
							$bar-horz-position-left,
							$bar-vert-position-bottom
						)
						rotate(-$base-rotation);
					transform-origin: 100% 50%;
				}
				#bar-4 {
					transform: translate(
							$bar-horz-position-right,
							$bar-vert-position-bottom
						)
						rotate($base-rotation);
					transform-origin: 0% 50%;
				}
			}
			&:hover {
				.control {
					#bar-1 {
						transform: translate(
								$bar-horz-position-left,
								$bar-vert-position-top
							)
							rotate(-$hover-rotation);
					}
					#bar-2 {
						transform: translate(
								$bar-horz-position-right,
								$bar-vert-position-top
							)
							rotate($hover-rotation);
					}
					#bar-3 {
						transform: translate(
								$bar-horz-position-left,
								$bar-vert-position-bottom
							)
							rotate(-$hover-rotation);
					}
					#bar-4 {
						transform: translate(
								$bar-horz-position-right,
								$bar-vert-position-bottom
							)
							rotate($hover-rotation);
					}
				}
			}
		}
		&.closed {
			transform: rotate(180deg);
		}
	}
}

#container {
	background: rgb(210, 210, 210);
	display: flex;
	justify-content: center;
	padding: 24pt 0 72pt;
}

#paper {
	background: white;
	box-shadow: 0 15px 50px rgb(100, 100, 100);
	width: 612pt;
	height: 792pt;

	#page {
		height: 720pt;
		margin: 36pt;
		display: grid;
		grid-template-rows: 9pt 84pt auto 88pt 45pt;
		grid-gap: 18pt;

		#copyright {
			text-align: right;
			img {
				height: 8pt;
				width: auto;
			}
		}

		#info {
			// background: blue;
		}

		#grid {
			.grid-random,
			.grid-practice {
				display: grid;
			}

			.grid-practice {
				grid-template-columns: repeat(2, 264pt);
				grid-gap: 12pt;

				.grid-tile {
					display: grid;
					grid-template-columns: repeat(8, 33pt);
					grid-auto-rows: 33pt;
					border-top: 1px solid black;
					border-left: 1px solid black;
				}
			}

			.grid-random {
				grid-template-columns: repeat(16, 33pt);
				grid-auto-rows: 33pt;
				border-top: 1px solid black;
				border-left: 1px solid black;
				margin: 0 6pt;
			}
		}
		.measure {
			border-right: 1px solid black;
			border-bottom: 1px solid black;
			padding: 5px;
			.inner-measure {
				width: 100%;
				height: 100%;
				color: rgba($black, $alpha: 0.5);
				font-size: 0.75rem;
			}
		}

		#footer {
			// background: red;
			display: grid;
			grid-template-columns: auto auto;
			grid-gap: 18pt;

			.footer-column {
				display: grid;
				grid-template-columns: 15pt auto;
				grid-template-rows: repeat(4, 22pt);
			}

			.footer-column-title {
				grid-column: 1 / 3;
			}

			.footer-column-number,
			.footer-column-box {
				display: flex;
				align-items: center;
				justify-content: center;
				border-bottom: 1px solid black;
			}

			.footer-column-box {
				border-left: 0;
			}
		}

		#logo-date {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 20px;

			#logo {
				img {
					height: 45pt;
					width: auto;
				}
			}

			#date {
				display: flex;
				align-items: flex-end;
				justify-content: flex-end;
				h4 {
					color: rgba($black, $alpha: 0.5);
				}
			}
		}
	}
}

// Form Styles
fieldset {
	legend {
		font-size: 0.75rem;
		text-transform: uppercase;
		font-family: 'Montserrat', sans-serif;
		font-weight: 900;
		margin-bottom: 5px;
	}
	input[type='text'],
	input[type='number'],
	input[type='email'] {
		font-family: 'Source Serif Pro', serif;
		border: 0;
		border-bottom: 1px solid $black;
		font-size: 1rem;
		font-weight: 300;
		padding-bottom: 2px;
		width: 100%;
	}

	&.title {
		min-height: 40px;
		.btn {
			display: inline-block;
			font-family: 'Montserrat', sans-serif;
			font-weight: 700;
			letter-spacing: 2px;
			text-transform: uppercase;
			background: $secondary-color;
			color: darken($secondary-color, 10%);
			padding: 20px 40px;
			text-transform: uppercase;
			font-weight: 700;
			font-size: 1rem;
			letter-spacing: 3px;
			transition: background 0.25s, color 0.25s;
			cursor: pointer;
		}

		input[type='radio'].toggle {
			display: none;

			& + label {
				&:hover {
					background: darken($secondary-color, 10%);
					color: lighten($secondary-color, 20%);
				}
				&:first-of-type {
					margin-right: 18px;
				}
			}
			&:checked + label {
				background: $primary-color;
				color: $white;
				cursor: pointer;
			}
		}
	}
}
</style>