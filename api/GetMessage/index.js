module.exports = async function (context, req) {
  const date = "2025-03-25T18:17:33.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

