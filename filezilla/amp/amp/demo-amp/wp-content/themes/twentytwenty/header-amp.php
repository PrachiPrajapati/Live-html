<?php
/**
 * Header file for the Twenty Twenty WordPress default theme.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

?>
<header>
        <div class="container">
            <div class="logo-section">
                <a href="#" class="logo"><amp-img alt="service-img" src="https://www.yudiz.com/wp-content/uploads/2019/10/yudiz-logo.png" width="240" height="60" layout="responsive"></amp-img></a>
            </div>
            <div class="nav-section">
				<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
            </div>
        </div>
    </header>