import projects from '$data/projects';

export const get = async ({ params }) => {
	const { projectType } = params;

	const body = projects.filter(({type}) => type === projectType);

	return { body };
};
