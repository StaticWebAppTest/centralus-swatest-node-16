module.exports = async function (context, req) {
  const date = "2025-04-04T18:17:15.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

