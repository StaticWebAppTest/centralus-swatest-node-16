module.exports = async function (context, req) {
  const date = "2025-06-21T16:15:11.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

