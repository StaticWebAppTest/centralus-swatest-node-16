module.exports = async function (context, req) {
  const date = "2025-09-12T23:11:11.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

