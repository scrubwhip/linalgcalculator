from manim import *
import numpy as np
import manimlib as mn

class Adding(Scene):
	def construct(self):
		template = TexTemplate()
		template.add_to_preamble(r"\usepackage{xcolor}")

		grid = NumberPlane((-10,10),(-10,10))


		matrixAtext = MathTex(r"""\begin{bmatrix} {\color{red}1} & {\color{blue}0} \\ {\color{red}1} & {\color{blue}1} \end{bmatrix}""",
		tex_template=template,
		font_size=60)
		
		ALabel = Text("A")
		matrixAGroup = VGroup(matrixAtext, ALabel)
		matrixAGroup.arrange(DOWN).to_corner(UL, buff=0.5)

		self.add(matrixAGroup, grid)
		self.play(
			Create(grid),
			FadeIn(matrixAGroup)
		)
		self.wait(1)

		
		vector_ai = Vector([1,1])
		vector_ai.set_fill(color='#EA3323', opacity=1)
		vector_aj = Vector([0,1])
		vector_aj.set_fill(color='#0000F5', opacity=1)
		AVectors = VGroup(vector_ai, vector_aj)

		self.add(AVectors)		

		self.play(
			Create(AVectors)
		)


		matrixBtext = MathTex(r"""\begin{bmatrix} {\color{green}1} & {\color{purple}2} \\ {\color{green}2} & {\color{purple}1} \end{bmatrix}""",
		tex_template=template,
		font_size=60)
		BLabel = Text("B")
		matrixBGroup = VGroup(matrixBtext, BLabel)
		matrixBGroup.arrange(DOWN).next_to(matrixAGroup, RIGHT, buff=1)

		self.add(matrixBGroup)
		self.play(
			FadeIn(matrixBGroup)
		)

		vector_bi = Vector([1,2])
		vector_bi.set_fill(color='#75FB4C', opacity=1)
		vector_bj = Vector([2,1])
		vector_bj.set_fill(color='#AF2443', opacity=1)
		BVectors = VGroup(vector_bi, vector_bj)
		self.add(BVectors)

		self.play(
			Create(BVectors)
		)

		addText = MathTex(r"""+""", font_size = 60)
		addText.next_to(matrixAGroup, RIGHT, buff=0.5)
		# vector_ci = Vector([1,2])
		# vector_ci.shift(1*RIGHT)
		# vector_cj = Vector([2,1])
		# vector_cj.shift(1*UP)

		# CVectors = VGroup(vector_ci, vector_cj)


		self.play(
			FadeIn(addText),
			vector_bi.animate.shift(1*RIGHT+1*UP),
			vector_bj.animate.shift(1*UP)
		)

		sumText = MathTex(r"""\begin{bmatrix} {\color{red}2} & {\color{blue}2} \\ {\color{red}3} & {\color{blue}2} \end{bmatrix}""", tex_template=template, font_size=60)
		sumLabel = Text("A + B")
		sumGroup = VGroup(sumText, sumLabel)
		sumGroup.arrange(DOWN).next_to(addText, DOWN, buff=1)

		sum_i = Vector([2,3])
		sum_j = Vector([2,2])
		SumVectors = VGroup(sum_i, sum_j)
		self.play(
			FadeOut(AVectors),
			FadeOut(BVectors),
			FadeIn(sumGroup), 
			Create(SumVectors)
		)
		self.wait(2)

		self.play(
			FadeOut(sumGroup),
			FadeOut(SumVectors),
			FadeOut(addText),
			FadeOut(matrixBGroup),
			FadeOut(matrixAGroup),
		)
		self.wait(1)

		self.play(
			Uncreate(grid)
		)

