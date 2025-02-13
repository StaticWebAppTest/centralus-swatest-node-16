module.exports = async function (context, req) {
  const date = "2025-02-13T18:16:21.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

