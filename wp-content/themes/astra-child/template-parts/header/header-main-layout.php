<?php
/**
 * Template for Primary Header
 *
 * The header layout 2 for Astra Theme. ( No of sections - 1 [ Section 1 limit - 3 )
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @see https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package     Astra
 * @author      Astra
 * @copyright   Copyright (c) 2020, Astra
 * @link        https://wpastra.com/
 * @since       Astra 1.0.0
 */

?>
<div class="above-header">
    <a href="/#mainpage-form">ПОДКЛЮЧИТЬСЯ</a>
    <p>г. Рудный, ул. Гагарина, 11.<br><span>Часы работы:<br>ПН-СБ 08:00 - 19:00, ВС 10:00-17:00</span></p>
    <p><span>Подключение:</span><br>8 (71431) 55-111, 4-79-44</p>
    <p><span>Техподдержка:</span><br>8 (71431) 47-300</p>
</div>
<div class="main-header-bar-wrap">
	<div <?php echo astra_attr( 'main-header-bar' ); ?>>
		<?php astra_main_header_bar_top(); ?>
		<div class="ast-container">
			<div class="ast-flex main-header-container">
				<?php astra_masthead_content(); ?>
			</div><!-- Main Header Container -->
		</div><!-- ast-row -->
		<?php astra_main_header_bar_bottom(); ?>
	</div> <!-- Main Header Bar -->
</div> <!-- Main Header Bar Wrap -->
