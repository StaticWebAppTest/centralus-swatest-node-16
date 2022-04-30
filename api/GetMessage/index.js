module.exports = async function (context, req) {
  const date = "2022-04-30T04:16:36.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

