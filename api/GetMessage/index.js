module.exports = async function (context, req) {
  const date = "2025-01-28T23:10:37.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

