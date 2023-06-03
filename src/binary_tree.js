/* ----------------------
Nota: ANTES de abordar la clase debajo, 
lee los tests del archivo correspondiente.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value <= this.value) {
      !this.left ? (this.left = new BinaryTree(value)) : this.left.add(value);
    } else {
      !this.right
        ? (this.right = new BinaryTree(value))
        : this.right.add(value);
    }
  }

  // devuelve un array con todos los valores del tree recorriendo en profundidad primero preorden (actual, izquierda, derecha)
  getValues() {
    let result = [];

    function traverse(node) {
      // Tu código aquí

      //primero he conseguido hacer con Pila
      /*
      let stack = [];
      //hago push del valor de la root al array result y adiciono a stack
      stack.push(node);

      //itero por el arbole para recoger derecha y izquierda y adicinar sus valores al array result
      while (stack.length > 0) {
        //saco el el primer elemento de la fila 
        const currentNode = stack.pop();
        console.log(currentNode)
        //y adiciono su valor al array de results
        result.push(currentNode.value);
        //ahora pasmos a los nodos derecha y izquierda
        //verifico si el left del nodo actual es diferent de null, y si es diferente de null adiciono su nodo a la stack
      
        if (currentNode.right !== null) {
          stack.push(currentNode.right);
        }
        if (currentNode.left !== null) {
          stack.push(currentNode.left);
        }
      }
      */

      //después probé hacer con recursividad
      if (node == null) return;
      //adiciona el valor del nodo actual al array results
      result.push(node.value);
      //recursivamente llama traverse por el nodo izquierdo
      if (node.left !== null) {
        traverse(node.left);
      }
      //recursivamente llama traverse por el nodo derecho
      if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this);
    //console.log(result);
    return result;
  }
}

module.exports = BinaryTree;
