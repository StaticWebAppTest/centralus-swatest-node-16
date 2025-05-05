module.exports = async function (context, req) {
  const date = "2025-05-05T21:12:06.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

