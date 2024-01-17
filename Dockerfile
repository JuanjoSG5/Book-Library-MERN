# Stage 1: Backend
FROM node:latest AS backend

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install
COPY backend/models backend/routes backend/config.js backend/index.js ./

EXPOSE 80

CMD ["npm", "run", "dev"]

FROM node:latest AS frontend

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install
COPY frontend/public frontend/src ./

CMD ["npm", "run", "dev"]

FROM node:latest

WORKDIR /app

COPY --from=backend /app/backend /app/backend
COPY --from=frontend /app/frontend /app/frontend
