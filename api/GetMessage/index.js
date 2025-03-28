module.exports = async function (context, req) {
  const date = "2025-03-28T20:14:16.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

