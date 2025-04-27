module.exports = async function (context, req) {
  const date = "2025-04-27T03:04:22.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

