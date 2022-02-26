module.exports = async function (context, req) {
  const date = "2022-02-26T05:08:53.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

