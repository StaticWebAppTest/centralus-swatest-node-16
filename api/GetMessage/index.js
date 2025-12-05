module.exports = async function (context, req) {
  const date = "2025-12-05T18:18:56.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

