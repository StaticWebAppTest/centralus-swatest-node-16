module.exports = async function (context, req) {
  const date = "2025-03-05T05:12:33.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

