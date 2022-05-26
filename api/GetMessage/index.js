module.exports = async function (context, req) {
  const date = "2022-05-26T22:11:56.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

