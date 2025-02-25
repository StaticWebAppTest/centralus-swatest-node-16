module.exports = async function (context, req) {
  const date = "2025-02-25T23:11:11.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

