module.exports = async function (context, req) {
  const date = "2022-11-13T08:14:11.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

