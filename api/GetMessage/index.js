module.exports = async function (context, req) {
  const date = "2025-08-18T23:12:47.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

