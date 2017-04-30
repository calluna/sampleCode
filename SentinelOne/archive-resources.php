<?php
/*
Template Name: Archives resources
*/
 ?>

<div class="container insight-posts">
	<nav class="col-md-3">
		<?php dynamic_sidebar('insight-sidebar'); ?>
	</nav>
	<section class="col-md-9">
		<header class="row">
			<h1 class="entry-title"><?php the_title(); ?></h1>
			<div class="entry-content">
				<?php the_post(); ?>
			</div>
			<div class="post-search">
				<?php get_search_form(); ?>
			</div>
		</header>

		<!-- Featured loop -->
		<?php
		$feat_loop = new WP_Query( array (
		  'post_type' => 'Resource',
		  'resource-type'  => 'main-featured',
		  'posts_per_page' => 1
		) );
		// The Loop
		if ( $feat_loop->have_posts() ) { 
			while ( $feat_loop->have_posts() ): $feat_loop->the_post(); ?>
			
			<?php $thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>
			<div <?php post_class(); ?> id="featured">
				<div class="row">
					<div class="featured-image" style="background-image: url('<?php echo $thumb['0'];?>')"></div>
					<div class="featured-resource col-lg-3 col-lg-offset-9 col-md-6 col-md-offset-6">
						<p class="webinar-times">Posted: <?php the_time('m/d/y'); ?></p>
						<h2 class="title"><?php the_title(); ?></h2>
						<a class="resource-cta" href="<?php the_field('cta_url'); ?>"><?php the_field('cta_button'); ?></a>
					</div>
				</div>
			</div>
			<?php endwhile; ?>
			<!-- Restore original Post Data -->
			<?php wp_reset_postdata();
		}; ?>

		<!-- Resource loop -->
		<?php 
		$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
		$loop = new WP_Query( array( 
			'post_type' => array('Resource', 'Webinar'), 
        	'posts_per_page' => 12,
        	'paged' => $paged
        ) ); ?>
        <div class="row">
        	<?php
        		// The Loop
			if ( $loop->have_posts() ) { 
		        while ( $loop->have_posts() ) : $loop->the_post(); ?>
		     
		        <?php get_template_part( 'templates/content', 'archives-resources' ); // loading our custom file. ?>
				<!-- Restore original Post Data -->
				<?php endwhile; wp_reset_query();
			}; ?>
        </div>
		
		<!-- Pagination -->
		<?php if ($loop->max_num_pages > 1) { // check if the max number of pages is greater than 1  ?>
		<div class="row">
			<nav class="pagination"><?php wp_pagenavi( array( 'query' => $loop ) ); ?></nav>
		</div>
		<?php } ?>
	</section>	
</div>
