# Use the official PostgreSQL image
FROM postgres:13

# Copy the initialization SQL script to the Docker image
COPY init.sql /docker-entrypoint-initdb.d/

# Set environment variables for PostgreSQL
ENV POSTGRES_DB=auth_db
ENV POSTGRES_USER=username
ENV POSTGRES_PASSWORD=password
