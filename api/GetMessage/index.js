module.exports = async function (context, req) {
  const date = "2025-01-12T01:02:43.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

