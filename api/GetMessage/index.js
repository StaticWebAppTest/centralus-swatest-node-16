module.exports = async function (context, req) {
  const date = "2022-03-26T10:10:29.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

