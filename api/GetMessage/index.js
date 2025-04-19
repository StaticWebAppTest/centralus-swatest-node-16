module.exports = async function (context, req) {
  const date = "2025-04-19T21:10:31.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

