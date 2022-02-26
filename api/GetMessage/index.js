module.exports = async function (context, req) {
  const date = "2022-02-26T22:08:54.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

