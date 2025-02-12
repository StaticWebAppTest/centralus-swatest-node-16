module.exports = async function (context, req) {
  const date = "2025-02-12T23:10:22.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

