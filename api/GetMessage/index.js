module.exports = async function (context, req) {
  const date = "2022-03-02T19:11:58.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

