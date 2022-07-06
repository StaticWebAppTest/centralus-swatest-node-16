module.exports = async function (context, req) {
  const date = "2022-07-06T20:11:15.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

