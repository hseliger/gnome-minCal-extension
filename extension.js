import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Calendar from 'resource:///org/gnome/shell/ui/calendar.js';

export default class MiniCalExtension { 

	enable()
	{
		let eventSource = new Calendar.EmptyEventSource();
		Main.panel.statusArea.dateMenu._setEventSource(eventSource);
	}

	disable()
	{
		let eventSource;
		let showEvents = Main.sessionMode.showCalendarEvents;
		if (showEvents)
		{
			eventSource = new Calendar.DBusEventSource();
		} else
		{
			eventSource = new Calendar.EmptyEventSource();
		}
		Main.panel.statusArea.dateMenu._setEventSource(eventSource);
	}
}