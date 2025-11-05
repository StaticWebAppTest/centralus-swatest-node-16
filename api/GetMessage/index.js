module.exports = async function (context, req) {
  const date = "2025-11-05T19:11:24.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

