module.exports = async function (context, req) {
  const date = "2025-07-30T21:13:57.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

