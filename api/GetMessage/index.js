module.exports = async function (context, req) {
  const date = "2025-03-23T08:14:40.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

