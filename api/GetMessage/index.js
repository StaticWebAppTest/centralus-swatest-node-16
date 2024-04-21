module.exports = async function (context, req) {
  const date = "2024-04-21T12:16:15.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

