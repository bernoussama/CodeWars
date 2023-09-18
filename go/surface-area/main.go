package surfacearea

type ThreeDGeo interface {
	area()
	volume()
}

type Box struct {
	width  int
	height int
	depth  int
}

func (b Box) area() int {
	topBot := b.height * b.width * 2
	frontBack := b.depth * b.width * 2
	rightLeft := b.depth * b.height * 2
	return topBot + frontBack + rightLeft
}

func (b Box) volume() int {
	return b.height * b.width * b.depth
}
func GetSize(w, h, d int) [2]int {
	// your code here
	box := Box{
		width:  w,
		height: h,
		depth:  d,
	}
	return [2]int{box.area(), box.volume()}

}
