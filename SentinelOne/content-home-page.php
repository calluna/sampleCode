<!-- Slide 03 -->
<article class="container slide">
	<div id="features">
		<section id="feature-tabs" class="row">
			<div class="tabs">
				<div class="col-md-6">
					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation" class="prevention active">
						<h2><a href="#presentation" aria-controls="presentation" role="tab" data-toggle="tab" aria-expanded="true">Prevention</a></h2>
						</li>
						<li class="detection">
							<h2><a href="#detection" aria-controls="detection" role="tab" data-toggle="tab" aria-expanded="false">Detection</a></h2>
						</li>
						<li class="mitigation">
							<h2><a href="#mitigation" aria-controls="mitigation" role="tab" data-toggle="tab" aria-expanded="false">Mitigation</a></h2>
						</li>
						<li class="remediation">
							<h2><a href="#remediation" aria-controls="remediation" role="tab" data-toggle="tab" aria-expanded="false">Remediation</a></h2>
						</li>
						<li class="forensics">
							<h2><a href="#forensics" aria-controls="forensics" role="tab" data-toggle="tab" aria-expanded="false">Forensics</a></h2>
						</li>
					</ul>
				</div>
				<div id="topscreenshot" class="col-md-6"></div>
			</div>
			<div class="panes">
					<article class="tab-content">
						<div role="tabpanel" class="tab-pane active col-md-12" id="presentation">
							<div class="col-md-6">
								<h3 class=""><?php the_field('prevention_title'); ?></h3>
								<p><?php the_field('prevention_description'); ?></p>
								<a role="button" label="next feature" class="btn btn-primary continue">Next</a>
							</div>
							<section class="screenshot col-md-6">
								<img alt="SentinelOne software screenshot" src="<?php the_field('prevention_screenshot'); ?>">
							</section>
						</div>
						<div role="tabpanel" class="tab-pane col-md-12" id="detection">
							<div class="col-md-6">
								<h3 class=""><?php the_field('detection_title'); ?></h3>
								<p><?php the_field('detection_description'); ?></p>
								<a role="button" label="previous feature" class="btn btn-primary back">Prev</a>
								<a role="button" label="next feature" class="btn btn-primary continue">Next</a>
							</div>
							<section class="screenshot col-md-6">
								<img alt="SentinelOne software screenshot" src="<?php the_field('detection_screenshot'); ?>">
							</section>
						</div>
						<div role="tabpanel" class="tab-pane col-md-12" id="mitigation">
							<div class="col-md-6">
								<h3 class=""><?php the_field('mitigation_title'); ?></h3>
								<p><?php the_field('mitigation_description'); ?></p>
								<a role="button" label="previous feature" class="btn btn-primary back">Prev</a>
								<a role="button" label="next feature" class="btn btn-primary continue">Next</a>
							</div>
							<section class="screenshot col-md-6">
								<img alt="SentinelOne software screenshot" src="<?php the_field('mitigation_screenshot'); ?>">
							</section>
						</div>
						<div role="tabpanel" class="tab-pane col-md-12" id="remediation">
							<div class="col-md-6">
								<h3 class=""><?php the_field('remediation_title'); ?></h3>
								<p><?php the_field('remediation_description'); ?></p>
								<a role="button" label="previous feature" class="btn btn-primary back">Prev</a>
								<a role="button" label="next feature" class="btn btn-primary continue">Next</a>
							</div>
							<section class="screenshot col-md-6">
								<img alt="SentinelOne software screenshot" src="<?php the_field('remediation_screenshot'); ?>">
							</section>
						</div>
						<div role="tabpanel" class="tab-pane col-md-12" id="forensics">
							<div class="col-md-6">
								<h3 class=""><?php the_field('forensics_title'); ?></h3>
								<p><?php the_field('forensics_description'); ?></p>
								<a role="button" label="previous feature" class="btn btn-primary back">Prev</a>
							</div>
							<section class="screenshot col-md-6">
								<img alt="SentinelOne software screenshot" src="<?php the_field('forensics_screenshot'); ?>">
							</section>
						</div>
					</article>
			</div>	
		</section>
	</div>
</article>
<!-- Slide 03 -->
<article class="container slide">
	<div id="testimonial">
		<div class="row">		
			<section id="testimonial-video"  class="col-md-6">
				<div class="bg" style="background-image:url('<?php the_field("testimonial_1_image"); ?>'); background-size: cover;">
					<!-- Button trigger video modal -->
					<?php if( get_field('video_testimonial') ): ?>
						<span class="play glyphicon glyphicon-play-circle"><?php the_field('video_testimonial'); ?></span>
					<?php endif; ?>
				</div>
			</section>
			<section id="testimonial-1" class="col-md-6">
				<div class="testimonial-text col-sm-8 col-sm-offset-2">
					<blockquote><?php the_field('testimonial_1'); ?></blockquote>
					<span><?php the_field('testimonial_1_name'); ?></span>
				</div>
			</section>
		</div>
	</div>
</article>
<!-- Slide 04 -->
<article class="container slide">
	<div id="quote">
		<div class="row">
			<section id="testimonial-2" class="col-md-6">
				<div class="testimonial-text col-sm-8 col-sm-offset-2">
					<blockquote><?php the_field('testimonial_2'); ?></blockquote>
					<span><?php the_field('testimonial_2_name'); ?></span>
				</div>
			</section>
			<div id="testimonial-image" class="col-md-6" style="background-image:url('<?php the_field('testimonial_2_image'); ?>">
			</div>
		</div>
	</div>
</article>
<!-- Slide 05 -->
<article class="container slide">
	<div id="homepage-why" style="background-image:url('<?php the_field("hero_image"); ?>');">
		<div class="row">
			<section id="why-sentinelone">
				<h2>Why choose SentinelOne</h2>
				<!-- Accordion 1 -->
			    <div class="panel-group col-md-4 col-md-offset-1" id="accordion1" role="tablist" aria-multiselectable="false">
		        	<div class="panel panel-default">
			            <div class="panel-heading actives">
			                <h3 class="panel-title">
			                    <a data-toggle="collapse" data-parent="#accordion1" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><?php the_field('why_1_title'); ?></a>
			                </h3>
			            </div>
			            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
			                <div class="panel-body">
			                    <p><?php the_field('why_1_statement'); ?></p>
			                    <a href="<?php the_field('why_1_link'); ?>"><?php the_field('why_1_button_text'); ?></a>
			                </div>
			            </div>
			        </div>
			        <div class="panel panel-default">
			            <div class="panel-heading">
			                <h3 class="panel-title">
			                    <a data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><?php the_field('why_2_title'); ?></a>
			                </h3>
			            </div>
			            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
			                <div class="panel-body">
			                    <p><?php the_field('why_2_statement'); ?></p>
			                    <a href="<?php the_field('why_2_link'); ?>"><?php the_field('why_2_button_text'); ?></a>
			                </div>
			            </div>
			        </div>
			        <div class="panel panel-default">
			            <div class="panel-heading">
			                <h3 class="panel-title">
			                    <a data-toggle="collapse" data-parent="#accordion1" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><?php the_field('why_3_title'); ?></a>
			                </h3>
			            </div>
			            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
			                <div class="panel-body">
			                    <p><?php the_field('why_3_statement'); ?></p>
			                    <a href="<?php the_field('why_3_link'); ?>"><?php the_field('why_3_button_text'); ?></a>
			                </div>
			            </div>
			        </div>
			    </div>
			    <!-- Accordion 2 -->
		        <div class="panel-group col-md-4 col-md-offset-2" id="accordion2" role="tablist" aria-multiselectable="false">
		        	<div class="panel panel-default">
			            <div class="panel-heading actives">
			                <h3 class="panel-title">
			                    <a data-toggle="collapse" data-parent="#accordion2" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour"><?php the_field('why_4_title'); ?></a>
			                </h3>
			            </div>
			            <div id="collapseFour" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingFour">
			                <div class="panel-body">
			                    <p><?php the_field('why_4_statement'); ?></p>
			                    <a href="<?php the_field('why_4_link'); ?>"><?php the_field('why_4_button_text'); ?></a>
			                </div>
			            </div>
			        </div>
			        <div class="panel panel-default">
			            <div class="panel-heading">
			                <h3 class="panel-title">
			                    <a data-toggle="collapse" data-parent="#accordion2" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><?php the_field('why_5_title'); ?></a>
			                </h3>
			            </div>
			            <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
			                <div class="panel-body">
			                    <p><?php the_field('why_5_statement'); ?></p>
			                    <a href="<?php the_field('why_5_link'); ?>"><?php the_field('why_5_button_text'); ?></a>
			                </div>
			            </div>
			        </div>
			        <div class="panel panel-default">
			            <div class="panel-heading">
			                <h3 class="panel-title">
			                    <a data-toggle="collapse" data-parent="#accordion2" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix"><?php the_field('why_6_title'); ?></a>
			                </h3>
			            </div>
			            <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
			                <div class="panel-body">
			                    <p><?php the_field('why_6_statement'); ?></p>
			                    <a href="<?php the_field('why_6_link'); ?>"><?php the_field('why_6_button_text'); ?></a>
			                </div>
			            </div>
			        </div>
		        </div>
			</section>
		</div>
	</div>
</article>
<!-- Slide 06 -->
<article class="container slide">
	<div id="homepage-test-results" style="background-image:url('<?php the_field("test_results_background"); ?>'); background-size: cover;">
		<div class="row">
			<section id="test-results">
				<div class="col-md-12">
					<h2>Industry tested, globally trusted</h2>
				</div>
				<div class="col-md-4 col-md-offset-1">
					<span><?php the_field('test_result_1'); ?></span>
					<p><?php the_field('test_result_1_description'); ?></p>
					<img alt="test company logo" src="<?php the_field('test_result_1_image'); ?>" style="<?php the_field('test_result_image_1_dimensions'); ?>">
				</div>
				<div class="col-md-4 col-md-offset-2">
					<span><?php the_field('test_result_2'); ?></span>
					<p><?php the_field('test_result_2_description'); ?></p>
					<img alt="test company logo" src="<?php the_field('test_result_2_image'); ?>">
				</div>
			</section>
			<section id="customer-logos">
				<div class="col-md-3">
					<img alt="<?php the_field('customer_1_name'); ?>" src="<?php the_field('customer_1_logo'); ?>" style="<?php the_field('customer_1_logo_dimensions'); ?>">
				</div>
				<div class="col-md-3">
					<img alt="<?php the_field('customer_2_name'); ?>" src="<?php the_field('customer_2_logo'); ?>" style="<?php the_field('customer_2_logo_dimensions'); ?>">
				</div>
				<div class="col-md-3">
					<img alt="<?php the_field('customer_3_name'); ?>" src="<?php the_field('customer_3_logo'); ?>" style="<?php the_field('customer_3_logo_dimensions'); ?>">
				</div>
				<div class="col-md-3">
					<img alt="<?php the_field('customer_4_name'); ?>" src="<?php the_field('customer_4_logo'); ?>" style="<?php the_field('customer_4_logo_dimensions'); ?>">
				</div>
			</section>
		</div>
	</div>
</article>
<!-- Slide 07 -->
<article class="container slide">
	<div id="homepage-resources">
		<div class="row">
			<section id="resources" class="resource-sidebar">
				<h2>Resources</h2>
				<?php dynamic_sidebar('homepage-resources'); ?>
			</section>
		</div>
	</div>
</article>
</section><!-- start tag on page header -->