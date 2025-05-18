module.exports = async function (context, req) {
  const date = "2025-05-18T04:18:58.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

