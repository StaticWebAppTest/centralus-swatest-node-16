module.exports = async function (context, req) {
  const date = "2025-01-23T23:11:07.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

