module.exports = async function (context, req) {
  const date = "2022-10-30T12:22:48.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

