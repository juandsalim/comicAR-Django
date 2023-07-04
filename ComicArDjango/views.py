from django.views.generic import TemplateView

class IndexPage(TemplateView):
    template_name="index.html"
    

class SobreNosotros(TemplateView):
    template_name="sobreNosotros.html"
    
class Formulario(TemplateView):
    template_name="formulario.html"
    
class Sucursales(TemplateView):
    template_name="sucursales.html"