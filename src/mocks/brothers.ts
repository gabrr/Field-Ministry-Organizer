import { findGroup } from "helpers/helpers";
import type { IBrother } from "types/brothers";

export const brothers: IBrother[] = [
	{
		id: 'Mario Cesar Melo',
		name: "Mario Cesar Melo",
		isTalker: true,
		fieldGroup: findGroup("mario"),
		isElder: true,
		isVideoSupporter: false,
	},
	{
		id: 'Patrik França',
		name: "Patrik França",
		isTalker: true,
		fieldGroup: findGroup("patrick"),
		isElder: true,
		isVideoSupporter: true,
	},
	{
		id: 'Sadi Frandoloso',
		name: "Sadi Frandoloso",
		isTalker: true,
		fieldGroup: findGroup('sadi'),
		isElder: true,
		isVideoSupporter: true,
	},
	{
		id: 'José Medeiros',
		name: "José Medeiros",
		fieldGroup: findGroup("jose medeiros"),
		isTalker: true,
		isElder: false,
		isVideoSupporter: false,
	},
	{
		id: 'Milton Melo',
		name: "Milton Melo",
		fieldGroup: findGroup("Milton Melo"),
		isElder: true,
		isTalker: true,
		isVideoSupporter: false,
	},
	{
		id: 'Isaac Corrêa',
		name: "Isaac Corrêa",
		fieldGroup: findGroup("Isaac Corrêa"),
		isElder: true,
		isTalker: true,
		isVideoSupporter: true,
	},
	{
		id: 'Paulo Costa',
		name: "Paulo Costa",
		fieldGroup: findGroup('Paulo Costa'),
		isElder: false,
		isTalker: true,
		isVideoSupporter: false
	},
	{
		id: 'Diorge',
		name: "Diorge",
		fieldGroup: findGroup('Diorge'),
		isElder: false,
		isTalker: true,
		isVideoSupporter: false,
	},
	{
		id: 'Richard',
		name: "Richard",
		fieldGroup: findGroup('richard'),
		isElder: true,
		isTalker: true,
		isVideoSupporter: true
	},
	{
		id: 'Vitor Malagoli',
		name: "Vitor Malagoli",
		fieldGroup: findGroup("vitor"),
		isElder: false,
		isTalker: true,
		isVideoSupporter: true
	},
	{
		id: 'Marcelo Frandoloso',
		name: "Marcelo Frandoloso",
		fieldGroup: findGroup('marcelo'),
		isElder: true,
		isTalker: true,
		isVideoSupporter: true,
	},
	{
		id: 'Julio Raimundo',
		name: "Julio Raimundo",
		fieldGroup: findGroup("julio"),
		isElder: true,
		isTalker: true,
		isVideoSupporter: false,
	},
	{
		id: 'Gabriel Oliveira',
		name: "Gabriel Oliveira",
		fieldGroup: findGroup("Gabriel Oliveira"),
		isElder: false,
		isTalker: true,
		isVideoSupporter: true
	},
	{
		id: 'Alexandre Malagoli',
		name: "Alexandre Malagoli",
		fieldGroup: findGroup("alexandre malagoli"),
		isElder: true,
		isTalker: true,
		isVideoSupporter: true
	}
]