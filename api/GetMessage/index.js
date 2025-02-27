module.exports = async function (context, req) {
  const date = "2025-02-27T18:16:45.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

