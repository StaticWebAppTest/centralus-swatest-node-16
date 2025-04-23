module.exports = async function (context, req) {
  const date = "2025-04-23T12:25:51.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

