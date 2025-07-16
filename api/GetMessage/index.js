module.exports = async function (context, req) {
  const date = "2025-07-16T04:32:57.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

