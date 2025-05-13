module.exports = async function (context, req) {
  const date = "2025-05-13T15:13:54.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

