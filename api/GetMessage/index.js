module.exports = async function (context, req) {
  const date = "2025-09-06T16:13:17.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

