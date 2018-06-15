import { documentScrollTop, elementOffsetTop, elementHeight } from './utils';

export default class Onepoints {
  start() {
  }

  navIsWithinRange() {
    return documentScrollTop() >= elementOffsetTop(document.querySelector('.nav'))
  }

  aboutIsWithinRange() {
    const scrollTop = documentScrollTop()
    const elem = document.querySelector('#about')
    const elemHeight = elementHeight(elem)
    const elemTop = elementOffsetTop(elem)
    return scrollTop > elemTop - elemHeight && scrollTop < elemTop + elemHeight
  }

  worksIsWithinRange() {
    const scrollTop = documentScrollTop()
    const elem = document.querySelector('#works')
    const elemHeight = elementHeight(elem)
    const elemTop = elementOffsetTop(elem)
    return scrollTop > elemTop - elemHeight && scrollTop < elemTop + elemHeight
  }

  companyIsWithinRange() {
    const scrollTop = documentScrollTop()
    const elem = document.querySelector('#company')
    const elemHeight = elementHeight(elem)
    const elemTop = elementOffsetTop(elem)
    return scrollTop > elemTop - elemHeight && scrollTop < elemTop + elemHeight
  }

  activateNav() {
    const navElem = document.querySelector('.nav')
    navElem.classList.remove('run')
    navElem.classList.add('active')
  }

  deactivateNav() {
    const navElem = document.querySelector('.nav')
    navElem.classList.add('run')
    navElem.classList.remove('active')
  }

  activateHeader() {
    document.querySelector('#header').classList.add('is-active')
  }

  deactivateHeader() {
    document.querySelector('#header').classList.remove('is-active')
  }

  activateTopToBtn() {
    // document.querySelector('.top-to-button').classList.add('is-active')
  }

  deactivateTopToBtn() {
    // document.querySelector('.top-to-button').classList.remove('is-active')
  }

  activateAbout() {
    document.querySelector('#about').classList.add('is-active')
  }

  deactivateAbout() {
    document.querySelector('#about').classList.remove('is-active')
  }

  activateWorks() {
    document.querySelector('#works').classList.add('is-active')
    document.querySelector('#main').classList.add('change-background')
  }

  deactivateWorks() {
    document.querySelector('#works').classList.remove('is-active')
    document.querySelector('#main').classList.remove('change-background')
  }

  activateCompany() {
    document.querySelector('#company').classList.add('is-active')
  }

  deactivateCompany() {
    document.querySelector('#company').classList.remove('is-active')
  }

  onScroll() {
    if (this.navIsWithinRange()) {
      this.activateHeader()
      this.activateNav()
      this.activateTopToBtn()
    } else {
      this.deactivateHeader()
      this.deactivateNav();
      this.deactivateTopToBtn()
    }

    if (this.aboutIsWithinRange()) {
      this.activateAbout();
    } else {
      this.deactivateAbout();
    }

    if (this.worksIsWithinRange()) {
      this.activateWorks();
    } else {
      this.deactivateWorks();
    }

    if (this.companyIsWithinRange()) {
      this.activateCompany();
    } else {
      this.deactivateCompany();
    }

    if (this.contactIsWithinRange()) {
      this.activateContact();
    } else {
      this.deactivateContact();
    }

    //    if ($(window).scrollTop() > contactTop - contact.height() && $(window).scrollTop() < contactTop + contact.height()) {
    //      contact.addClass('is-active');
    //    } else {
    //      contact.removeClass('is-active');
    //    }

  }
}
