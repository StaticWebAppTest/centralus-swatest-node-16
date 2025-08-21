module.exports = async function (context, req) {
  const date = "2025-08-21T15:14:26.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

