module.exports = async function (context, req) {
  const date = "2023-01-22T04:11:18.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

