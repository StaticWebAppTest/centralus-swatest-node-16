module.exports = async function (context, req) {
  const date = "2025-05-17T15:11:49.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

