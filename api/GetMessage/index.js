module.exports = async function (context, req) {
  const date = "2025-02-03T07:11:34.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

