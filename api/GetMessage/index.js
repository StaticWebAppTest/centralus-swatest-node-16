module.exports = async function (context, req) {
  const date = "2025-06-28T13:22:34.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

