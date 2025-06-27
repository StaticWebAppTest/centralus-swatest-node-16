module.exports = async function (context, req) {
  const date = "2025-06-27T18:18:54.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

