module.exports = async function (context, req) {
  const date = "2025-01-03T18:15:47.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

