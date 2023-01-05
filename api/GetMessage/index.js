module.exports = async function (context, req) {
  const date = "2023-01-05T17:08:50.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

