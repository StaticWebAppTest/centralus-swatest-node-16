module.exports = async function (context, req) {
  const date = "2025-06-07T22:11:55.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

