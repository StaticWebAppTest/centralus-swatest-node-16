module.exports = async function (context, req) {
  const date = "2025-09-04T14:12:39.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

