module.exports = async function (context, req) {
  const date = "2025-01-25T03:11:44.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

