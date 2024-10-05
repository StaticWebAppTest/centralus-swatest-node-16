module.exports = async function (context, req) {
  const date = "2024-10-05T19:09:26.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

