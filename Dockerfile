FROM node:16-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY . .
WORKDIR /app

ARG VITE_API_ENDPOINT
ENV VITE_API_ENDPOINT=${VITE_API_ENDPOINT}
ARG VITE_ACCESS_TOKEN
ENV VITE_ACCESS_TOKEN=${VITE_ACCESS_TOKEN}
ARG VITE_EMAIL
ENV VITE_EMAIL=${VITE_EMAIL}

RUN pnpm install && pnpm build

# https://github.com/PierreZ/goStatic
FROM pierrezemb/gostatic:latest
COPY --from=builder /app/dist /srv/http
EXPOSE 8043
CMD ["goStatic"]