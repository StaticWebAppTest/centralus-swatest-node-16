module.exports = async function (context, req) {
  const date = "2024-02-20T23:08:33.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

