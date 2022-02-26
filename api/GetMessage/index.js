module.exports = async function (context, req) {
  const date = "2022-02-26T18:10:58.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

