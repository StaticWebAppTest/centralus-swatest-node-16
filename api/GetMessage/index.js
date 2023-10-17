module.exports = async function (context, req) {
  const date = "2023-10-17T20:09:29.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

