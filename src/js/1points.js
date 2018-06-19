import { documentScrollTop, elementOffsetTop, elementHeight, browserIsMSIE } from './utils'

export default class Onepoints {
  start() {
    this.applyContentActivation()

    window.addEventListener('scroll', (event) => {
      this.applyContentActivation()
    }, false)

    window.addEventListener('resize', (event) => {
    }, false)

    document.querySelector('.nav-toggle').addEventListener('click', (event) => {
      this.toggleNav()
    }, false)

    document.querySelectorAll('.nav__link').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        if (this.navIsOpen()) {
          this.closeNav()
        }
      })
    });

    if (browserIsMSIE())  {
      document.body.style.transform = 'rotate(-0.0000000001deg)';
    }
  }

  applyContentActivation() {
    if (this.headlineIsWithinRange()) {
      this.activateHeadline()
    } else {
      this.deactivateHeadline()
    }

    if (this.aboutIsWithinRange()) {
      this.activateAbout()
    } else {
      this.deactivateAbout()
    }

    if (this.worksIsWithinRange()) {
      this.activateWorks()
    } else {
      this.deactivateWorks()
    }

    if (this.companyIsWithinRange()) {
      this.activateCompany()
    } else {
      this.deactivateCompany()
    }

    if (this.recruitIsWithinRange()) {
      this.activateRecruit()
    } else {
      this.deactivateRecruit()
    }

    if (this.contactIsWithinRange()) {
      this.activateContact()
    } else {
      this.deactivateContact()
    }
  }

  navIsOpen() {
    return document.querySelector('.nav').classList.contains('nav--open')
  }

  openNav() {
    document.querySelector('.nav').classList.add('nav--open')
    document.querySelector('.nav-toggle').classList.add('nav-toggle--open')
  }

  closeNav() {
    document.querySelector('.nav').classList.remove('nav--open')
    document.querySelector('.nav-toggle').classList.remove('nav-toggle--open')
  }

  toggleNav(toggleSwitch) {
    if (!(typeof toggleSwitch === 'boolean')) {
      toggleSwitch = !this.navIsOpen()
    }
    if (toggleSwitch) {
      this.openNav()
    } else {
      this.closeNav()
    }
  }

  navIsWithinRange() {
    return documentScrollTop() >= elementOffsetTop(document.querySelector('.nav'))
  }

  headlineIsWithinRange() {
    const scrollTop = documentScrollTop()
    const elem = document.querySelector('.headline')
    const elemHeight = elementHeight(elem)
    const elemTop = elementOffsetTop(elem)
    return scrollTop > elemTop - elemHeight && scrollTop < elemTop + elemHeight
  }

  aboutIsWithinRange() {
    const scrollTop = documentScrollTop()
    const elem = document.querySelector('.about')
    const elemHeight = elementHeight(elem)
    const elemTop = elementOffsetTop(elem)
    return scrollTop > elemTop - elemHeight && scrollTop < elemTop + elemHeight
  }

  worksIsWithinRange() {
    const scrollTop = documentScrollTop()
    const elem = document.querySelector('.works')
    const elemHeight = elementHeight(elem)
    const elemTop = elementOffsetTop(elem)
    return scrollTop > elemTop - elemHeight && scrollTop < elemTop + elemHeight
  }

  companyIsWithinRange() {
    const scrollTop = documentScrollTop()
    const elem = document.querySelector('.company')
    const elemHeight = elementHeight(elem)
    const elemTop = elementOffsetTop(elem)
    return scrollTop > elemTop - elemHeight && scrollTop < elemTop + elemHeight
  }

  recruitIsWithinRange() {
    const scrollTop = documentScrollTop()
    const elem = document.querySelector('.recruit')
    const elemHeight = elementHeight(elem)
    const elemTop = elementOffsetTop(elem)
    return scrollTop > elemTop - elemHeight && scrollTop < elemTop + elemHeight
  }

  contactIsWithinRange() {
    const scrollTop = documentScrollTop()
    const elem = document.querySelector('.contact')
    const elemHeight = elementHeight(elem)
    const elemTop = elementOffsetTop(elem)
    return scrollTop > elemTop - elemHeight && scrollTop < elemTop + elemHeight
  }

  activateHeadline() {
    document.querySelector('.headline').classList.add('active')
  }

  deactivateHeadline() {
    document.querySelector('.headline').classList.remove('active')
  }

  activateAbout() {
    document.querySelector('.about').classList.add('active')
  }

  deactivateAbout() {
    document.querySelector('.about').classList.remove('active')
  }

  activateWorks() {
    document.querySelector('.works').classList.add('active')
  }

  deactivateWorks() {
    document.querySelector('.works').classList.remove('active')
  }

  activateCompany() {
    document.querySelector('.company').classList.add('active')
  }

  deactivateCompany() {
    document.querySelector('.company').classList.remove('active')
  }

  activateRecruit() {
    document.querySelector('.recruit').classList.add('active')
  }

  deactivateRecruit() {
    document.querySelector('.recruit').classList.remove('active')
  }

  activateContact() {
    document.querySelector('.contact').classList.add('active')
  }

  deactivateContact() {
    document.querySelector('.contact').classList.remove('active')
  }
}
