module.exports = async function (context, req) {
  const date = "2024-03-31T12:15:14.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

