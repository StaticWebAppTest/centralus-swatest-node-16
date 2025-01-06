module.exports = async function (context, req) {
  const date = "2025-01-06T11:09:59.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

