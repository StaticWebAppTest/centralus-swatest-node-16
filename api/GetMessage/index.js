module.exports = async function (context, req) {
  const date = "2025-05-28T18:17:42.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

