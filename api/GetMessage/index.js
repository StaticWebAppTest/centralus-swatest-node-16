module.exports = async function (context, req) {
  const date = "2024-04-12T17:09:57.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

