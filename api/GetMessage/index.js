module.exports = async function (context, req) {
  const date = "2024-01-04T22:09:15.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

