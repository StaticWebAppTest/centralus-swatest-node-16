module.exports = async function (context, req) {
  const date = "2023-01-07T20:09:16.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

