module.exports = async function (context, req) {
  const date = "2025-05-22T15:14:05.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

