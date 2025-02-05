module.exports = async function (context, req) {
  const date = "2025-02-05T19:09:20.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

