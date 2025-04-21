module.exports = async function (context, req) {
  const date = "2025-04-21T18:17:23.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

