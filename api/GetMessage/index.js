module.exports = async function (context, req) {
  const date = "2025-12-31T08:21:15.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

