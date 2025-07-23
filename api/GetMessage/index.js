module.exports = async function (context, req) {
  const date = "2025-07-23T01:13:46.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

