module.exports = async function (context, req) {
  const date = "2025-12-06T14:11:46.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

