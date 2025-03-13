module.exports = async function (context, req) {
  const date = "2025-03-13T18:16:56.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

