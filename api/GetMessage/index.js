module.exports = async function (context, req) {
  const date = "2024-03-27T08:12:58.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

