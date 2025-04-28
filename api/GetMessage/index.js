module.exports = async function (context, req) {
  const date = "2025-04-28T18:18:46.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

