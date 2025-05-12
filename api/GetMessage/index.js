module.exports = async function (context, req) {
  const date = "2025-05-12T01:08:01.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

