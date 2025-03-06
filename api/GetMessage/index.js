module.exports = async function (context, req) {
  const date = "2025-03-06T23:12:04.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

