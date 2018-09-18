<?php
/**
* Displayed when no products are found matching the current query
*
* This template can be overridden by copying it to yourtheme/woocommerce/loop/no-products-found.php.
*
* HOWEVER, on occasion WooCommerce will need to update template files and you
* (the theme developer) will need to copy the new files to your theme to
* maintain compatibility. We try to do this as little as possible, but it does
* happen. When this occurs the version of the template file will be bumped and
* the readme will list any important changes.
*
* @see 	    https://docs.woocommerce.com/document/template-structure/
* @author 		WooThemes
* @package 	WooCommerce/Templates
* @version     2.0.0
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>
<div class="no-content">
	<h2><?php esc_html_e( 'Nothing found', 'purism' ); ?></h2>
	<p><?php _e( 'No products were found matching your selection.', 'woocommerce' ); ?></p>
	<div class="search-form-container">
		<?php wc_get_template( 'product-searchform.php' ); ?>
	</div>
</div>