module.exports = async function (context, req) {
  const date = "2024-12-12T18:17:55.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

