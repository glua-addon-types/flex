# flex
`package.json`:
```json
{
	"devDependencies": {
		"@glua-addon-types/flex": "^1.1.0"
	}
}
```
`tsconfig.json`:
```
{
	"compilerOptions": {
		"target": "ESNext",
		"lib": [ "ESNext" ],
		"types": [
			"@glua-addon-types/FLEX/index"
		]
	}
}
```