PGDMP                         {            asistencia_sistema    10.23    10.23 '               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    41414    asistencia_sistema    DATABASE     �   CREATE DATABASE asistencia_sistema WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Venezuela.1252' LC_CTYPE = 'Spanish_Venezuela.1252';
 "   DROP DATABASE asistencia_sistema;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    41425    permisos    TABLE     u   CREATE TABLE public.permisos (
    id_permisos integer NOT NULL,
    desc_permisos character varying(80) NOT NULL
);
    DROP TABLE public.permisos;
       public         postgres    false    3            �            1259    41423    permisos_id_permisos_seq    SEQUENCE     �   CREATE SEQUENCE public.permisos_id_permisos_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.permisos_id_permisos_seq;
       public       postgres    false    3    199                       0    0    permisos_id_permisos_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.permisos_id_permisos_seq OWNED BY public.permisos.id_permisos;
            public       postgres    false    198            �            1259    41438    sis_asistencia_personal_mañana    TABLE        CREATE TABLE public."sis_asistencia_personal_mañana" (
    id_asistencia_mana integer NOT NULL,
    fecha_registro date NOT NULL,
    nombre_visi character varying(100) NOT NULL,
    cedula_visi integer NOT NULL,
    direccion_visi character varying(100) NOT NULL,
    cargo_visi character varying(80) NOT NULL,
    motivo_visi character varying(100) NOT NULL,
    fecha_entrada_visi timestamp without time zone NOT NULL,
    fecha_salida_visi timestamp without time zone,
    asistente_adm integer NOT NULL
);
 5   DROP TABLE public."sis_asistencia_personal_mañana";
       public         postgres    false    3            �            1259    41436 7   sis_asistencia_personal_mañana_id_asistencia_maña_seq    SEQUENCE     �   CREATE SEQUENCE public."sis_asistencia_personal_mañana_id_asistencia_maña_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 P   DROP SEQUENCE public."sis_asistencia_personal_mañana_id_asistencia_maña_seq";
       public       postgres    false    3    201                       0    0 7   sis_asistencia_personal_mañana_id_asistencia_maña_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."sis_asistencia_personal_mañana_id_asistencia_maña_seq" OWNED BY public."sis_asistencia_personal_mañana".id_asistencia_mana;
            public       postgres    false    200            �            1259    41451    sis_asistencia_personal_tarde    TABLE     �  CREATE TABLE public.sis_asistencia_personal_tarde (
    id_asistencia_tarde integer NOT NULL,
    fecha_registro date NOT NULL,
    nombre_visi character varying(100) NOT NULL,
    cedula_visi integer NOT NULL,
    direccion_visi character varying(80) NOT NULL,
    cargo_visi character varying(80) NOT NULL,
    motivo_visi character varying(100) NOT NULL,
    fecha_entrada_visi timestamp without time zone NOT NULL,
    fecha_salida_visi timestamp without time zone,
    asistente_adm integer NOT NULL
);
 1   DROP TABLE public.sis_asistencia_personal_tarde;
       public         postgres    false    3            �            1259    41449 5   sis_asistencia_personal_tarde_id_asistencia_tarde_seq    SEQUENCE     �   CREATE SEQUENCE public.sis_asistencia_personal_tarde_id_asistencia_tarde_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 L   DROP SEQUENCE public.sis_asistencia_personal_tarde_id_asistencia_tarde_seq;
       public       postgres    false    203    3                       0    0 5   sis_asistencia_personal_tarde_id_asistencia_tarde_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.sis_asistencia_personal_tarde_id_asistencia_tarde_seq OWNED BY public.sis_asistencia_personal_tarde.id_asistencia_tarde;
            public       postgres    false    202            �            1259    41417    usuarios    TABLE     ~  CREATE TABLE public.usuarios (
    id integer NOT NULL,
    usuario_asis character varying(80) NOT NULL,
    password_asis character varying(255) NOT NULL,
    nombre_completo character varying(100) NOT NULL,
    fecha_nac date,
    fecha_hora_reg timestamp with time zone NOT NULL,
    ci_asis integer NOT NULL,
    id_permisos integer NOT NULL,
    email character varying(50)
);
    DROP TABLE public.usuarios;
       public         postgres    false    3            �            1259    41415    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public       postgres    false    3    197                       0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
            public       postgres    false    196            �
           2604    41428    permisos id_permisos    DEFAULT     |   ALTER TABLE ONLY public.permisos ALTER COLUMN id_permisos SET DEFAULT nextval('public.permisos_id_permisos_seq'::regclass);
 C   ALTER TABLE public.permisos ALTER COLUMN id_permisos DROP DEFAULT;
       public       postgres    false    199    198    199            �
           2604    41441 2   sis_asistencia_personal_mañana id_asistencia_mana    DEFAULT     �   ALTER TABLE ONLY public."sis_asistencia_personal_mañana" ALTER COLUMN id_asistencia_mana SET DEFAULT nextval('public."sis_asistencia_personal_mañana_id_asistencia_maña_seq"'::regclass);
 c   ALTER TABLE public."sis_asistencia_personal_mañana" ALTER COLUMN id_asistencia_mana DROP DEFAULT;
       public       postgres    false    201    200    201            �
           2604    41454 1   sis_asistencia_personal_tarde id_asistencia_tarde    DEFAULT     �   ALTER TABLE ONLY public.sis_asistencia_personal_tarde ALTER COLUMN id_asistencia_tarde SET DEFAULT nextval('public.sis_asistencia_personal_tarde_id_asistencia_tarde_seq'::regclass);
 `   ALTER TABLE public.sis_asistencia_personal_tarde ALTER COLUMN id_asistencia_tarde DROP DEFAULT;
       public       postgres    false    202    203    203            �
           2604    41420    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    196    197    197                      0    41425    permisos 
   TABLE DATA               >   COPY public.permisos (id_permisos, desc_permisos) FROM stdin;
    public       postgres    false    199   �2                 0    41438    sis_asistencia_personal_mañana 
   TABLE DATA               �   COPY public."sis_asistencia_personal_mañana" (id_asistencia_mana, fecha_registro, nombre_visi, cedula_visi, direccion_visi, cargo_visi, motivo_visi, fecha_entrada_visi, fecha_salida_visi, asistente_adm) FROM stdin;
    public       postgres    false    201   3                 0    41451    sis_asistencia_personal_tarde 
   TABLE DATA               �   COPY public.sis_asistencia_personal_tarde (id_asistencia_tarde, fecha_registro, nombre_visi, cedula_visi, direccion_visi, cargo_visi, motivo_visi, fecha_entrada_visi, fecha_salida_visi, asistente_adm) FROM stdin;
    public       postgres    false    203   �3       	          0    41417    usuarios 
   TABLE DATA               �   COPY public.usuarios (id, usuario_asis, password_asis, nombre_completo, fecha_nac, fecha_hora_reg, ci_asis, id_permisos, email) FROM stdin;
    public       postgres    false    197   �4                  0    0    permisos_id_permisos_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.permisos_id_permisos_seq', 2, true);
            public       postgres    false    198                       0    0 7   sis_asistencia_personal_mañana_id_asistencia_maña_seq    SEQUENCE SET     g   SELECT pg_catalog.setval('public."sis_asistencia_personal_mañana_id_asistencia_maña_seq"', 2, true);
            public       postgres    false    200                       0    0 5   sis_asistencia_personal_tarde_id_asistencia_tarde_seq    SEQUENCE SET     c   SELECT pg_catalog.setval('public.sis_asistencia_personal_tarde_id_asistencia_tarde_seq', 8, true);
            public       postgres    false    202                       0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);
            public       postgres    false    196            �
           2606    41443 6   sis_asistencia_personal_mañana pk_id_asistencia_maña 
   CONSTRAINT     �   ALTER TABLE ONLY public."sis_asistencia_personal_mañana"
    ADD CONSTRAINT "pk_id_asistencia_maña" PRIMARY KEY (id_asistencia_mana);
 d   ALTER TABLE ONLY public."sis_asistencia_personal_mañana" DROP CONSTRAINT "pk_id_asistencia_maña";
       public         postgres    false    201            �
           2606    41456 4   sis_asistencia_personal_tarde pk_id_asistencia_tarde 
   CONSTRAINT     �   ALTER TABLE ONLY public.sis_asistencia_personal_tarde
    ADD CONSTRAINT pk_id_asistencia_tarde PRIMARY KEY (id_asistencia_tarde);
 ^   ALTER TABLE ONLY public.sis_asistencia_personal_tarde DROP CONSTRAINT pk_id_asistencia_tarde;
       public         postgres    false    203            �
           2606    41430    permisos pk_id_permisos 
   CONSTRAINT     ^   ALTER TABLE ONLY public.permisos
    ADD CONSTRAINT pk_id_permisos PRIMARY KEY (id_permisos);
 A   ALTER TABLE ONLY public.permisos DROP CONSTRAINT pk_id_permisos;
       public         postgres    false    199            �
           2606    41422    usuarios pk_id_usuario 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT pk_id_usuario PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT pk_id_usuario;
       public         postgres    false    197            �
           2606    41444 0   sis_asistencia_personal_mañana fk_asistente_adm    FK CONSTRAINT     �   ALTER TABLE ONLY public."sis_asistencia_personal_mañana"
    ADD CONSTRAINT fk_asistente_adm FOREIGN KEY (asistente_adm) REFERENCES public.usuarios(id);
 \   ALTER TABLE ONLY public."sis_asistencia_personal_mañana" DROP CONSTRAINT fk_asistente_adm;
       public       postgres    false    2693    197    201            �
           2606    41457 .   sis_asistencia_personal_tarde fk_asistente_adm    FK CONSTRAINT     �   ALTER TABLE ONLY public.sis_asistencia_personal_tarde
    ADD CONSTRAINT fk_asistente_adm FOREIGN KEY (asistente_adm) REFERENCES public.usuarios(id);
 X   ALTER TABLE ONLY public.sis_asistencia_personal_tarde DROP CONSTRAINT fk_asistente_adm;
       public       postgres    false    197    2693    203            �
           2606    41431    usuarios fk_id_permisos    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT fk_id_permisos FOREIGN KEY (id_permisos) REFERENCES public.permisos(id_permisos) NOT VALID;
 A   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT fk_id_permisos;
       public       postgres    false    2695    199    197               '   x�3�LL����,.)JL�/�2�L,rR�JR�b���� ��
s         �   x�}�;�0E�z�
o �~�.����X�'�X�a�!R
��OW� ��"C�����m�c���@Y5���`�=D�󾚍������3q��E��ƻ�\@�ؕ��t�UӒ��P�/S��6&���P�ʛK�.�l`x������PwHy�ZT5�I��m:�           x�}�Kn� ���\ �7�]���,��7��ㄔGT�V=C/V"W��Jl���1�0��t��±�Zǐ�� �cp���Ӊ���XA�VJ���m�w��(��O9D��r�x���O}L�_�!�-%Vr,�$J�vS!����=�]^������K��#����KMغ���2)����B�[�\.�@ru�;AZ�q�KEgA����To���a?��e���S��|��?���zpe�3�V�yH1}�]��T��M�s�^��и5D3�[�4�~r�      	   �   x�U�K�0�ur
. ���A�A��D{Ćn��<���O��?߽O�.<��Fő�v�:Ro�)��.H��-�-6�U��9��m,�kc��/=��_]\�Ė�,�0��8��y�j*�<��uԢ��1�	�;vݩ�>$ևu�nĳ�R� 59>3     