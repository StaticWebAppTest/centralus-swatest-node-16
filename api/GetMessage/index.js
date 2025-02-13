module.exports = async function (context, req) {
  const date = "2025-02-13T09:12:53.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

