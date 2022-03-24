module.exports = async function (context, req) {
  const date = "2022-03-24T17:21:55.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

