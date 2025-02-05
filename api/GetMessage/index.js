module.exports = async function (context, req) {
  const date = "2025-02-05T23:11:18.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

