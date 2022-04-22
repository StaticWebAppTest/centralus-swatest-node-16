module.exports = async function (context, req) {
  const date = "2022-04-22T12:20:59.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

