module.exports = async function (context, req) {
  const date = "2025-07-27T21:12:48.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

