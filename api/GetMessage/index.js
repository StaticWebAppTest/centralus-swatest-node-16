module.exports = async function (context, req) {
  const date = "2025-01-28T09:12:17.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

