module.exports = async function (context, req) {
  const date = "2025-02-01T23:10:14.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

