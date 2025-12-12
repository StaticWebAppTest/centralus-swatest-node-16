module.exports = async function (context, req) {
  const date = "2025-12-12T18:22:13.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

