module.exports = async function (context, req) {
  const date = "2025-06-03T17:13:03.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

