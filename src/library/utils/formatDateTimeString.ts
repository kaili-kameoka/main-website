import {format} from "date-fns";

export default function formatDateTimeString (dateString: string): string {
	return format(new Date(dateString), "d MMMM yyyy '@' h:mm a")
}