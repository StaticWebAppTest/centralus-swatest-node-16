module.exports = async function (context, req) {
  const date = "2022-04-09T17:11:16.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

