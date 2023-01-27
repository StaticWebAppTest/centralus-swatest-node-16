module.exports = async function (context, req) {
  const date = "2023-01-27T20:09:54.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

