module.exports = async function (context, req) {
  const date = "2025-02-06T15:12:33.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

