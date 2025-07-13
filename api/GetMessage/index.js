module.exports = async function (context, req) {
  const date = "2025-07-13T08:16:40.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

