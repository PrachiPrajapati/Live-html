<?php
/**
 * The template for displaying the footer
 *
 * Contains the opening of the #site-footer div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

?>
			<footer>
		  	<div class="container">
				  <p class="footer-copyright">&copy;
					<?php
					echo date_i18n(
						/* translators: Copyright date format, see https://www.php.net/date */
						_x( 'Y', 'copyright date format', 'twentytwenty' )
					);
					?>
					<?php bloginfo( 'name' ); ?> All Rights Reserved.
				</p>
			</div>
		</footer>
  	</body>
</html>