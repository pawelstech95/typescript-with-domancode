import Product from "./Product";

type BackendLanguage = 'Java' | 'C#' | 'GoLang'

type BackendBook =  {
    backendLanguage: BackendLanguage
} & Product;

export default BackendBook