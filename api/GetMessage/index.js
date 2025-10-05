module.exports = async function (context, req) {
  const date = "2025-10-05T18:16:17.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

