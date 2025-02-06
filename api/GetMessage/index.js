module.exports = async function (context, req) {
  const date = "2025-02-06T18:15:53.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

