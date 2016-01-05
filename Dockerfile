FROM node

MAINTAINER Scott Covert <scottbcovert@gmail.com>

# Update aptitude with new repo
RUN apt-get update

# Setup user
RUN useradd -ms /bin/bash dev

# Set Work Directory
WORKDIR /home

# Add folders & files
ADD app /home/app
ADD package.json .bowerrc bower.json gulpfile.js /home/

# Setup user ownership
RUN chown -R dev:dev /home

# Install Prerequisites
RUN npm install -g bower gulp && \
	npm install && \
	bower install --config.interactive=false --allow-root

# Switch to new user
USER dev

# Expose Ports
EXPOSE 8080 35729

# Run gulp default task
CMD ["gulp"]