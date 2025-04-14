module.exports = async function (context, req) {
  const date = "2025-04-14T14:13:13.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

