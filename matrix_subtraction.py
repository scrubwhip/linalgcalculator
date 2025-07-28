from manim import *
import numpy as np

class Subtraction(Scene):
	def construct(self):
		template = TexTemplate()
		template.add_to_preamble(r"\usepackage{xcolor}")

		grid = NumberPlane((-10,10),(-10,10))
		grid.background_lines.set_opacity(0.4)


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

		subText = MathTex(r"""-""", font_size = 60)
		subText.next_to(matrixAGroup, RIGHT, buff=0.25)
		
		self.play(
			FadeIn(subText)
		)
		
		self.wait(1)
		
		addText = MathTex(r"""+""", font_size=60)
		addText.next_to(matrixAGroup, RIGHT, buff=0.25)
		
		newBtext = MathTex(r"""\begin{bmatrix} {\color{green}{-1}} & {\color{purple}{-2}} \\ {\color{green}{-2}} & {\color{purple}{-1}} \end{bmatrix}""", tex_template=template, font_size=60)
		newBGroup = VGroup(newBtext, BLabel)
		newBGroup.arrange(DOWN).next_to(matrixAGroup, RIGHT, buff=1)
		self.add(newBGroup)
		
		neg_bi = Vector([-1, -2])
		neg_bj = Vector([-2, -1])
		neg_bi.set_fill(color='#75FB4C', opacity=1)
		neg_bj.set_fill(color='#AF2443', opacity=1)
		newBVectors = VGroup(neg_bi, neg_bj)
		self.add(newBVectors)
		
		self.play(
			FadeTransform(subText, addText),
			FadeTransform(matrixBGroup, newBGroup),
			FadeOut(BVectors),
			FadeIn(newBVectors)
        )
		
		self.wait(1)
		
		self.play(
			neg_bi.animate.shift(1*RIGHT+1*UP),
			neg_bj.animate.shift(1*UP)
        )

		diffText = MathTex(r"""\begin{bmatrix} {\color{red}0} & {\color{blue}{-1}} \\ {\color{red}{-2}} & {\color{blue}0} \end{bmatrix}""", tex_template=template, font_size=60)
		diffLabel = Text("A - B")
		diffGroup = VGroup(diffText, diffLabel)
		diffGroup.arrange(DOWN).next_to(addText, DOWN, buff=3)

		diff_i = Vector([0,-1])
		diff_i.set_fill(color='#EA3323', opacity=1)
		diff_j = Vector([-2,0])
		diff_j.set_fill(color='#0000F5', opacity=1)
		diffVectors = VGroup(diff_i, diff_j)

		self.play(
			FadeOut(AVectors),
			FadeOut(newBVectors),
			FadeIn(diffGroup), 
			Create(diffVectors)
		)
		self.wait(2)

		self.play(
			FadeOut(diffGroup),
			FadeOut(diffVectors),
			FadeOut(addText),
			FadeOut(newBGroup),
			FadeOut(matrixAGroup),
		)
		self.wait(1)

		self.play(
			Uncreate(grid)
		)

