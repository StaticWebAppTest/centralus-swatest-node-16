module.exports = async function (context, req) {
  const date = "2023-07-17T11:08:29.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

