module.exports = async function (context, req) {
  const date = "2025-05-07T18:18:56.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

