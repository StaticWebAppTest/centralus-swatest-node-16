module.exports = async function (context, req) {
  const date = "2025-01-09T06:16:22.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

