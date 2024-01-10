<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'demo-amp' );

/** MySQL database username */
define( 'DB_USER', 'demo-amp' );

/** MySQL database password */
define( 'DB_PASSWORD', 'AyctbHQd3QPkB0Sd' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'UhGzL6>KoGir/%O9YIG-XgUdOh j:-ahzJ4cYIyQMW#*#5ujgy<t)w58M:V]d<}g' );
define( 'SECURE_AUTH_KEY',  'b~H-Wtm^k%COd$EdL&EOwUr#Kf5k/RvF|O<EZuU`7Q#)L^3:@fY2]X<D%]WQ/(g{' );
define( 'LOGGED_IN_KEY',    '.!?T5ENl||3`@|bU8P1@l4tL*UQbNq0Q.O78#Tv9tD53G@G~vp+%;}_$642rnKf$' );
define( 'NONCE_KEY',        'u#k~E<yhqmcXLv:a}I1c|t;Ja#z&>!x$>Q@!OP|8T]G&RM5LcxN[0-._&fr!i#N~' );
define( 'AUTH_SALT',        '#v%t1%ddg.Hg-$(n=*fz![/EW~!G UmII9;nAVGX|:O:.gFPsr7dv(hm?9}*nhtr' );
define( 'SECURE_AUTH_SALT', ';KJ+wBAQ,c0;MC_$C%!oH$?*52w^Qwg0I/2U8WYD`+^QQJ//h?t&A:2/(C2]7o=~' );
define( 'LOGGED_IN_SALT',   '<8sQeE?E?#}1Gt<i^)IrAd8vzR.o?LR7PuccEO{oZbBN,PcuQSJxF5K&VMz2tV/~' );
define( 'NONCE_SALT',       'C;[^Jh&MJlBVY5,`LR4zeQawI,B=+ Kn`xi)4X)5%QA~..QjB4$p-:WY9#hFc+_s' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
