module.exports = async function (context, req) {
  const date = "2025-02-23T23:10:37.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

