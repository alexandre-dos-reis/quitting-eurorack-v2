FROM node:16-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY . .
WORKDIR /app
RUN pnpm codegen && pnpm install && pnpm build

# https://github.com/PierreZ/goStatic
FROM pierrezemb/gostatic:latest
COPY --from=builder /app/dist /srv/http
EXPOSE 8043
CMD ["goStatic"]