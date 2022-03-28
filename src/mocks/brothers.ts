import { findGroup } from "helpers/helpers";
import type { IBrother } from "types/brothers";

export const EMPTY_BROTHER = {
	_id: '...',
	name: "",
	isTalker: true,
	fieldGroup: "Costeira",
	isElder: true,
	isVideoSupporter: true,
}

export const brothers: IBrother[] = [
	{
		_id: 'Mario Cesar Melo',
		name: "Mario Cesar Melo",
		isTalker: true,
		fieldGroup: findGroup("mario"),
		isElder: true,
		isVideoSupporter: false,
	},
	{
		_id: 'Patrik França',
		name: "Patrik França",
		isTalker: true,
		fieldGroup: findGroup("patrick"),
		isElder: true,
		isVideoSupporter: true,
	},
	{
		_id: 'Sadi Frandoloso',
		name: "Sadi Frandoloso",
		isTalker: true,
		fieldGroup: findGroup('sadi'),
		isElder: true,
		isVideoSupporter: true,
	},
	{
		_id: 'José Medeiros',
		name: "José Medeiros",
		fieldGroup: findGroup("jose medeiros"),
		isTalker: true,
		isElder: false,
		isVideoSupporter: false,
	},
	{
		_id: 'Milton Melo',
		name: "Milton Melo",
		fieldGroup: findGroup("Milton Melo"),
		isElder: true,
		isTalker: true,
		isVideoSupporter: false,
	},
	{
		_id: 'Isaac Corrêa',
		name: "Isaac Corrêa",
		fieldGroup: findGroup("Isaac Corrêa"),
		isElder: true,
		isTalker: true,
		isVideoSupporter: true,
	},
	{
		_id: 'Paulo Costa',
		name: "Paulo Costa",
		fieldGroup: findGroup('Paulo Costa'),
		isElder: false,
		isTalker: true,
		isVideoSupporter: false
	},
	{
		_id: 'Diorge',
		name: "Diorge",
		fieldGroup: findGroup('Diorge'),
		isElder: false,
		isTalker: true,
		isVideoSupporter: false,
	},
	{
		_id: 'Richard',
		name: "Richard",
		fieldGroup: findGroup('richard'),
		isElder: true,
		isTalker: true,
		isVideoSupporter: true
	},
	{
		_id: 'Vitor Malagoli',
		name: "Vitor Malagoli",
		fieldGroup: findGroup("vitor"),
		isElder: false,
		isTalker: true,
		isVideoSupporter: true
	},
	{
		_id: 'Marcelo Frandoloso',
		name: "Marcelo Frandoloso",
		fieldGroup: findGroup('marcelo'),
		isElder: true,
		isTalker: true,
		isVideoSupporter: true,
	},
	{
		_id: 'Julio Raimundo',
		name: "Julio Raimundo",
		fieldGroup: findGroup("julio"),
		isElder: true,
		isTalker: true,
		isVideoSupporter: false,
	},
	{
		_id: 'Gabriel Oliveira',
		name: "Gabriel Oliveira",
		fieldGroup: findGroup("Gabriel Oliveira"),
		isElder: false,
		isTalker: true,
		isVideoSupporter: true
	},
	{
		_id: 'Alexandre Malagoli',
		name: "Alexandre Malagoli",
		fieldGroup: findGroup("alexandre malagoli"),
		isElder: true,
		isTalker: true,
		isVideoSupporter: true
	}
]