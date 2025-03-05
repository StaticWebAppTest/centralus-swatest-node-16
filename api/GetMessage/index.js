module.exports = async function (context, req) {
  const date = "2025-03-05T10:13:24.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

