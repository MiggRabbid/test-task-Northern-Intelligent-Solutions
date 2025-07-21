i:
	npm ci

ir:
	rm -rf node_modules package-lock.json
	npm cache clean --force
	npm install

l:
	npm run lint

ln:
	npm run next-lint

f:
	npm run format

d:
	npm run dev

s:
	npm run start

b:
	rm -rf .next
	npm run build
	
cl:
	rm -rf .next

tr:
	tree -I 'node_modules|.vscode|.next|.vercel'