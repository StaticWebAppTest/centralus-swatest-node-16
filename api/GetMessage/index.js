module.exports = async function (context, req) {
  const date = "2025-06-21T11:11:49.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

