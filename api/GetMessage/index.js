module.exports = async function (context, req) {
  const date = "2025-08-28T10:13:48.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

