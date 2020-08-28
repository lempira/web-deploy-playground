FROM nginx
ARG DOMAIN_ARG
ENV DOMAIN ${DOMAIN_ARG}
COPY ./cloudrun.conf /etc/nginx/conf.d/default.conf.template
COPY site /var/www/${DOMAIN}
CMD envsubst '$DOMAIN' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'