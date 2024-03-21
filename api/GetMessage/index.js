module.exports = async function (context, req) {
  const date = "2024-03-21T16:12:59.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

