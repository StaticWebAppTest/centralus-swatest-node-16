module.exports = async function (context, req) {
  const date = "2025-02-12T12:22:37.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

