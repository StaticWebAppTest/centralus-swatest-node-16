module.exports = async function (context, req) {
  const date = "2025-02-15T05:11:53.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

