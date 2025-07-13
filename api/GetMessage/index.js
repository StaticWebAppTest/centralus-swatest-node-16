module.exports = async function (context, req) {
  const date = "2025-07-13T18:17:53.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

