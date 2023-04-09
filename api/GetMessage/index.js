module.exports = async function (context, req) {
  const date = "2023-04-09T23:08:05.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

