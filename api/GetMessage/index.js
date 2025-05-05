module.exports = async function (context, req) {
  const date = "2025-05-05T15:13:54.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

