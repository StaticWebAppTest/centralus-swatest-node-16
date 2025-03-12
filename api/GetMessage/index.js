module.exports = async function (context, req) {
  const date = "2025-03-12T20:13:42.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

