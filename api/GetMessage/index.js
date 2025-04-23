module.exports = async function (context, req) {
  const date = "2025-04-23T17:11:49.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

