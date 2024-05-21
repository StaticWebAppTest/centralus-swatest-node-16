module.exports = async function (context, req) {
  const date = "2024-05-21T12:17:55.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

