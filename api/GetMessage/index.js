module.exports = async function (context, req) {
  const date = "2025-02-02T20:11:08.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

