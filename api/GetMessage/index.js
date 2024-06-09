module.exports = async function (context, req) {
  const date = "2024-06-09T12:17:55.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

