module.exports = async function (context, req) {
  const date = "2024-06-27T13:12:34.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

