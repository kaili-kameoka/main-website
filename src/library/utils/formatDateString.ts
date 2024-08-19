import {format} from "date-fns";

export default function formatDateString(dateString: string): string {
	return format(new Date(dateString), "d MMMM yyyy")
}