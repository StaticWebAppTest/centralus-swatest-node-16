module.exports = async function (context, req) {
  const date = "2025-03-31T10:13:57.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

