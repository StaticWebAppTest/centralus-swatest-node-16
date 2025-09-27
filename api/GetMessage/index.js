module.exports = async function (context, req) {
  const date = "2025-09-27T18:16:07.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

