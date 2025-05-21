module.exports = async function (context, req) {
  const date = "2025-05-21T23:12:28.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

