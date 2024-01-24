module.exports = async function (context, req) {
  const date = "2024-01-24T16:12:39.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

