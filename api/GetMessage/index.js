module.exports = async function (context, req) {
  const date = "2025-05-26T01:08:08.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

