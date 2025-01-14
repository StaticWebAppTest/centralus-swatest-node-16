module.exports = async function (context, req) {
  const date = "2025-01-14T03:11:57.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

