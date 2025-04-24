module.exports = async function (context, req) {
  const date = "2025-04-24T10:14:02.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

