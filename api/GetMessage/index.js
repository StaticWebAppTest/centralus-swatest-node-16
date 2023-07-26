module.exports = async function (context, req) {
  const date = "2023-07-26T07:08:01.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

