module.exports = async function (context, req) {
  const date = "2024-05-24T19:08:00.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

