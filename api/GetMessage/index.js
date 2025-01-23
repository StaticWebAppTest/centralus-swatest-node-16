module.exports = async function (context, req) {
  const date = "2025-01-23T04:14:00.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

