module.exports = async function (context, req) {
  const date = "2024-11-20T20:13:39.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

