module.exports = async function (context, req) {
  const date = "2023-04-28T18:10:41.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

