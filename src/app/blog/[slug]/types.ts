export type BlogProps = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}