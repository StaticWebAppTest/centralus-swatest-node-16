module.exports = async function (context, req) {
  const date = "2025-07-16T17:15:19.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

