module.exports = async function (context, req) {
  const date = "2025-06-05T06:20:25.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

