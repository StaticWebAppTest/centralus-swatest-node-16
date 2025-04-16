module.exports = async function (context, req) {
  const date = "2025-04-16T13:23:55.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

