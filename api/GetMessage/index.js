module.exports = async function (context, req) {
  const date = "2022-03-17T11:08:29.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

