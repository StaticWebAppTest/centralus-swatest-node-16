module.exports = async function (context, req) {
  const date = "2025-09-16T22:11:39.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

