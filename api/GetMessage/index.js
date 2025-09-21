module.exports = async function (context, req) {
  const date = "2025-09-21T09:11:29.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

