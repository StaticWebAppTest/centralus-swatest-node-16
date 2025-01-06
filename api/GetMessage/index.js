module.exports = async function (context, req) {
  const date = "2025-01-06T18:16:12.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

