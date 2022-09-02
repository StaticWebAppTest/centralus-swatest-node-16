module.exports = async function (context, req) {
  const date = "2022-09-02T15:11:53.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

