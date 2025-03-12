module.exports = async function (context, req) {
  const date = "2025-03-12T18:17:36.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

