module.exports = async function (context, req) {
  const date = "2025-03-03T15:13:26.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

