module.exports = async function (context, req) {
  const date = "2025-07-12T13:23:49.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

