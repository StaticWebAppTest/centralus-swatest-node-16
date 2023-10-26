module.exports = async function (context, req) {
  const date = "2023-10-26T13:10:58.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

