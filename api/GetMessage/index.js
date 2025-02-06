module.exports = async function (context, req) {
  const date = "2025-02-06T14:11:13.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

