module.exports = async function (context, req) {
  const date = "2025-05-26T07:16:24.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

