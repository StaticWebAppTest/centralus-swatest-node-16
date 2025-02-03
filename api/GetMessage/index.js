module.exports = async function (context, req) {
  const date = "2025-02-03T08:16:08.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

