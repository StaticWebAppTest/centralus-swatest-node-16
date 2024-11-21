module.exports = async function (context, req) {
  const date = "2024-11-21T13:21:55.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

