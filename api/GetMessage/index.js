module.exports = async function (context, req) {
  const date = "2024-04-03T21:08:53.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

