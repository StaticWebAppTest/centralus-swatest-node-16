module.exports = async function (context, req) {
  const date = "2023-12-24T20:08:47.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

