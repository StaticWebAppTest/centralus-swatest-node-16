module.exports = async function (context, req) {
  const date = "2025-12-17T06:23:25.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

