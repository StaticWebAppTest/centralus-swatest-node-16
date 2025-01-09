module.exports = async function (context, req) {
  const date = "2025-01-09T22:11:09.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

