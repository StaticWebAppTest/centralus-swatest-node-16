module.exports = async function (context, req) {
  const date = "2025-02-09T09:10:46.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

