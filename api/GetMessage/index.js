module.exports = async function (context, req) {
  const date = "2025-02-06T21:10:42.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

