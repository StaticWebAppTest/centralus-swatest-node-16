module.exports = async function (context, req) {
  const date = "2024-09-05T18:13:57.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

