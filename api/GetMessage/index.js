module.exports = async function (context, req) {
  const date = "2022-04-19T23:09:39.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

