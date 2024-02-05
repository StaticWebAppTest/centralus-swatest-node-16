module.exports = async function (context, req) {
  const date = "2024-02-05T20:09:57.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

