module.exports = async function (context, req) {
  const date = "2025-12-22T06:25:06.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

