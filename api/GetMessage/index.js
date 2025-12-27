module.exports = async function (context, req) {
  const date = "2025-12-27T20:15:32.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

