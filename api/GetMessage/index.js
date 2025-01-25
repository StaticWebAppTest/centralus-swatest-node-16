module.exports = async function (context, req) {
  const date = "2025-01-25T17:08:44.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

