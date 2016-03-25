<VirtualHost *:8080>
       ServerAdmin webmaster@magnit-chudes.ru
       ServerName magnit-chudes.ru
       ServerAlias www.magnit-chudes.ru xn--80agdenvj9agk7b.xn--p1ai www.xn--80agdenvj9agk7b.xn--p1ai
       DocumentRoot /var/www/magnit-chudes.ru
	
       <Directory /var/www/magnit-chudes.ru/>
           Options Indexes MultiViews FollowSymLinks
           AllowOverride All
           Require all granted
       </Directory>	


ErrorLog ${APACHE_LOG_DIR}/error.log
	# Possible values include: debug, info, notice, warn, error, crit,
	# alert, emerg.
	LogLevel warn
	CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
<VirtualHost *:443>
	    ServerAdmin webmaster@magnit-chudes.ru
	    ServerName magnit-chudes.ru
	    ServerAlias www.magnit-chudes.ru xn--80agdenvj9agk7b.xn--p1ai www.xn--80agdenvj9agk7b.xn--p1ai
	    #ServerAlias www.magnit-chudes.ru:443 
	    ###xn--80agdenvj9agk7b.xn--p1ai www.xn--80agdenvj9agk7b.xn--p1ai
	DocumentRoot /var/www/magnit-chudes.ru
        <Directory /var/www/magnit-chudes.ru/>
           Options Indexes MultiViews FollowSymLinks
           AllowOverride All
           Require all granted
        </Directory>


	ErrorLog ${APACHE_LOG_DIR}/error.log
	LogLevel warn
	CustomLog ${APACHE_LOG_DIR}/ssl_access.log combined
	SSLEngine on

	    SSLCertificateFile		/etc/ssl/private/magnit-chudes.crt
	    SSLCertificateKeyFile	/etc/ssl/private/magnit-chudes.key

#	#SSLCertificateChainFile /etc/apache2/ssl.crt/server-ca.crt
#	#SSLCACertificatePath /etc/ssl/certs/
#	#SSLCACertificateFile /etc/apache2/ssl.crt/ca-bundle.crt
</VirtualHost>