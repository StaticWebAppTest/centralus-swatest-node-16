module.exports = async function (context, req) {
  const date = "2025-05-03T18:16:16.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

