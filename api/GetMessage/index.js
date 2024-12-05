module.exports = async function (context, req) {
  const date = "2024-12-05T12:24:55.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

