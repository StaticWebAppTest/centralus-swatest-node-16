module.exports = async function (context, req) {
  const date = "2024-08-06T22:10:37.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

