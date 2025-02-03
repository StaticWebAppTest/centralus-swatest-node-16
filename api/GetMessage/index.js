module.exports = async function (context, req) {
  const date = "2025-02-03T18:15:47.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

