module.exports = async function (context, req) {
  const date = "2025-02-09T12:19:38.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

