module.exports = async function (context, req) {
  const date = "2024-07-13T01:58:01.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

