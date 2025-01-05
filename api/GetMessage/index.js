module.exports = async function (context, req) {
  const date = "2025-01-05T04:13:55.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

