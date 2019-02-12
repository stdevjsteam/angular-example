'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-template documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-957ea1c6c6b0ca7f1eab7f80e90419df"' : 'data-target="#xs-components-links-module-AppModule-957ea1c6c6b0ca7f1eab7f80e90419df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-957ea1c6c6b0ca7f1eab7f80e90419df"' :
                                            'id="xs-components-links-module-AppModule-957ea1c6c6b0ca7f1eab7f80e90419df"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link">ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-959fd350365be6604a8505bf74d62105"' : 'data-target="#xs-components-links-module-ContactModule-959fd350365be6604a8505bf74d62105"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-959fd350365be6604a8505bf74d62105"' :
                                            'id="xs-components-links-module-ContactModule-959fd350365be6604a8505bf74d62105"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link">ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactServiceModule.html" data-type="entity-link">ContactServiceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-9bcb9231e983bca3a26a1d4a3bc38d46"' : 'data-target="#xs-components-links-module-CoreModule-9bcb9231e983bca3a26a1d4a3bc38d46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-9bcb9231e983bca3a26a1d4a3bc38d46"' :
                                            'id="xs-components-links-module-CoreModule-9bcb9231e983bca3a26a1d4a3bc38d46"' }>
                                            <li class="link">
                                                <a href="components/TitleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TitleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-9bcb9231e983bca3a26a1d4a3bc38d46"' : 'data-target="#xs-injectables-links-module-CoreModule-9bcb9231e983bca3a26a1d4a3bc38d46"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-9bcb9231e983bca3a26a1d4a3bc38d46"' :
                                        'id="xs-injectables-links-module-CoreModule-9bcb9231e983bca3a26a1d4a3bc38d46"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerServiceModule.html" data-type="entity-link">CustomerServiceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CustomersModule.html" data-type="entity-link">CustomersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomersModule-3488c6ce1bc9933ed57eef87ccb5fc45"' : 'data-target="#xs-components-links-module-CustomersModule-3488c6ce1bc9933ed57eef87ccb5fc45"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomersModule-3488c6ce1bc9933ed57eef87ccb5fc45"' :
                                            'id="xs-components-links-module-CustomersModule-3488c6ce1bc9933ed57eef87ccb5fc45"' }>
                                            <li class="link">
                                                <a href="components/CustomersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomersDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomersDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomersListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomersListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomersRoutingModule.html" data-type="entity-link">CustomersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ItemsModule.html" data-type="entity-link">ItemsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ItemsModule-6340ce42421eef8297cff810cfd6e0a6"' : 'data-target="#xs-components-links-module-ItemsModule-6340ce42421eef8297cff810cfd6e0a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ItemsModule-6340ce42421eef8297cff810cfd6e0a6"' :
                                            'id="xs-components-links-module-ItemsModule-6340ce42421eef8297cff810cfd6e0a6"' }>
                                            <li class="link">
                                                <a href="components/ItemsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemsDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemsDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ItemsModule-6340ce42421eef8297cff810cfd6e0a6"' : 'data-target="#xs-injectables-links-module-ItemsModule-6340ce42421eef8297cff810cfd6e0a6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ItemsModule-6340ce42421eef8297cff810cfd6e0a6"' :
                                        'id="xs-injectables-links-module-ItemsModule-6340ce42421eef8297cff810cfd6e0a6"' }>
                                        <li class="link">
                                            <a href="injectables/ItemService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ItemService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ItemsRoutingModule.html" data-type="entity-link">ItemsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-daec19acc4812ab7c5c052d7c571d862"' : 'data-target="#xs-directives-links-module-SharedModule-daec19acc4812ab7c5c052d7c571d862"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-daec19acc4812ab7c5c052d7c571d862"' :
                                        'id="xs-directives-links-module-SharedModule-daec19acc4812ab7c5c052d7c571d862"' }>
                                        <li class="link">
                                            <a href="directives/HighlightDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HighlightDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-daec19acc4812ab7c5c052d7c571d862"' : 'data-target="#xs-pipes-links-module-SharedModule-daec19acc4812ab7c5c052d7c571d862"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-daec19acc4812ab7c5c052d7c571d862"' :
                                            'id="xs-pipes-links-module-SharedModule-daec19acc4812ab7c5c052d7c571d862"' }>
                                            <li class="link">
                                                <a href="pipes/AwesomePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AwesomePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseHttpService.html" data-type="entity-link">BaseHttpService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contact.html" data-type="entity-link">Contact</a>
                            </li>
                            <li class="link">
                                <a href="classes/Customer.html" data-type="entity-link">Customer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Item.html" data-type="entity-link">Item</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserServiceConfig.html" data-type="entity-link">UserServiceConfig</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link">ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomersService.html" data-type="entity-link">CustomersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptorService.html" data-type="entity-link">TokenInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/ResolveItemsListService.html" data-type="entity-link">ResolveItemsListService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/HttpOptionsModel.html" data-type="entity-link">HttpOptionsModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});