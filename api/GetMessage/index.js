module.exports = async function (context, req) {
  const date = "2025-04-01T09:14:19.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

