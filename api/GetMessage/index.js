module.exports = async function (context, req) {
  const date = "2025-05-12T18:18:28.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

