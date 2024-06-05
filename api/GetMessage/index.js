module.exports = async function (context, req) {
  const date = "2024-06-05T08:12:55.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

