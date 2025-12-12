module.exports = async function (context, req) {
  const date = "2025-12-12T10:15:55.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

