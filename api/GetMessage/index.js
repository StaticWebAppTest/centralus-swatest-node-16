module.exports = async function (context, req) {
  const date = "2025-05-17T06:17:16.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

