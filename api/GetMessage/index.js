module.exports = async function (context, req) {
  const date = "2025-01-06T21:11:03.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

