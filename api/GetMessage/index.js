module.exports = async function (context, req) {
  const date = "2025-01-27T12:22:39.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

