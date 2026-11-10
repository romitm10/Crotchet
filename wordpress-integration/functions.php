<?php
/**
 * Knot & Bloom Atelier - Theme Functions
 */

if (!defined('ABSPATH')) {
    exit;
}

function knot_bloom_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('woocommerce');
    add_theme_support('html5', array('search-form', 'comment-form', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'knot_bloom_theme_setup');

function knot_bloom_enqueue_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'knot-bloom-google-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );

    // Theme CSS
    wp_enqueue_style(
        'knot-bloom-main-style',
        get_template_directory_uri() . '/css/style.css',
        array(),
        '1.0.0'
    );

    // Brand config & Products data
    wp_enqueue_script(
        'knot-bloom-brand-config',
        get_template_directory_uri() . '/js/brand-config.js',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'knot-bloom-products-data',
        get_template_directory_uri() . '/js/products-data.js',
        array('knot-bloom-brand-config'),
        '1.0.0',
        true
    );

    // Core interactive engine
    wp_enqueue_script(
        'knot-bloom-app',
        get_template_directory_uri() . '/js/app.js',
        array('knot-bloom-products-data'),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'knot_bloom_enqueue_scripts');
