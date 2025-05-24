module.exports = async function (context, req) {
  const date = "2025-05-24T18:16:20.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

