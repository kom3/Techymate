import React, { Component, useState, useEffect } from 'react'
import './ControlPanel.css'
import Calendar from 'react-calendar';
import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'
import FooTer from '../FooTer/FooTer.js';
import Tabletop from 'tabletop';
import './x-frame-bypass.js'
const ControlPanel = (props) => {
	const [Date_, setDate] = useState(new Date());
	const [sheetdata, updateSheetData] = useState({});


	// useEffect(() => {
	// 	Tabletop.init({
	// 		key: '1PRGFxkS4dwtwl9z5nnS7S2h5TQ0DAlMWAbesDHtvwhg',
	// 		callback: googleData => {
	// 			console.log('google sheet data --->', googleData)
	// 		},
	// 		simpleSheet: true
	// 	})
	// }, []);

	const onChange = (date) => {
		// setDate(date)
		// setRf(rf + 1)
	}

	// const onClickDay = (value, event) => document.getElementById("event-details-area").innerHTML="Here is the event deatils for "+{value}

	const MyApp = () => {
		return (
			<div>
				<Calendar
					onChange={onChange}
					onClickDay={({ value, view }) => document.getElementById("event-details-area").innerHTML = "<b>Event deatils of Today</b> <ul><li>Warrior Sync up at 11.30 PM</li><li>Equinix at 2.30 PM</li><li>Microapps support</li></ul>"}
					tileClassName={({ date, view }) => {
						let d = new Date()
						d.setHours(0, 0, 0, 0)
						if (date.getDay() === 0 || date.getDay() === 6 && String(date).trim() !== String(d).trim()) {
							return "holiday"
						}
						else if (view === 'month' && String(date).trim() === String(d).trim()) {
							return "highlight"

						}
						else { return "workingday" }
					}}
				/>
			</div>
		);
	}
	var c = 0
	const AsyncSheetUpdate = () => {
		console.log("calling", c + 1)
		// let inn_html = '<iframe id="iframecust" src="https://docs.google.com/spreadsheets/d/1HhOgQ4VtV-kQZCBBUh0wbLKwUNucEMZQzEZEh3hXRPE/edit?pli=1#gid=0" width="100%", height="500px"></iframe > '
		let inn_html = '<iframe id="iframecust" is="x-frame-bypass" src="https://docs.google.com/spreadsheets/u/0/?tgif=d"></iframe>'
		document.getElementById("asyncupdate").innerHTML = inn_html
}

useEffect(() => {
	AsyncSheetUpdate()

}, []);

return (
	<div>
		<div className="container-fluid">
			<div className="row" style={{ backgroundColor: "#363637", height: "60px", color: "#ffffff", fontStyle: "italic", padding: "15px" }}><b>Techymate</b></div>
			<div className="row" style={{ padding: "5px" }}>
				<div className="col-md-4" style={{ backgroundColor: "white", border: "none" }}><div style={{ backgroundColor: "rgb(232, 232, 232)", minHeight: "600px", borderRadius: "35px", border: "double #fff 12px" }}><br />
					<div style={{ textAlign: "center" }}><b>ATTENDANCE MANAGEMENT</b>&nbsp;<a href="">Back</a></div>
					<div id="asyncupdate">

					</div>

				</div></div>
				<div className="col-md-4" style={{ backgroundColor: "#f7f7f7", boxShadow: "9px 10px 18px 5px #888888", border: "solid 8px #fff", minHeight: "500px" }}><br />
					<div style={{ textAlign: "center" }}>
						<b>CALENDAR EVENTS</b> <br /><br />
						<MyApp />
					</div>
					<div id="event-details-area"></div>
				</div>
				<div className="col-md-4" style={{ backgroundColor: "#f7f7f7", boxShadow: "12px 10px 18px 5px #888888", border: "solid 8px #fff", minHeight: "500px" }}><br />
					<div style={{ textAlign: "center" }}><b>TASK TRACKER</b></div>
					<div>
						<div className="tasktracker-item">
							<p>Add new task</p>
							<FontAwesome
								className="super-crazy-colors"
								name="plus-circle"
								size="2x"
							// style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
							/>
						</div>
					</div>
					<div>
						<div className="tasktracker-item"><p>View tasks</p>
							<FontAwesome
								className="super-crazy-colors"
								name="eye"
								size="2x"
							// style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
							/>
						</div>
					</div>

				</div>
				{/* <div class="col-md-3" style={{backgroundColor:"yellow", height:"100px"}}>col4</div>
					<div class="col-md-2" style={{backgroundColor:"black", height:"100px"}}>col5</div> */}
			</div>
			<FooTer />
		</div>

	</div >
)
}

export default ControlPanel