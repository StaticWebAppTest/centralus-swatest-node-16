module.exports = async function (context, req) {
  const date = "2022-03-24T22:10:59.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

