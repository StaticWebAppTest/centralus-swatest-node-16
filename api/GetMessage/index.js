module.exports = async function (context, req) {
  const date = "2025-02-09T05:10:50.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

