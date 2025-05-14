module.exports = async function (context, req) {
  const date = "2025-05-14T18:16:39.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

