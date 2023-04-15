module.exports = async function (context, req) {
  const date = "2023-04-15T20:08:49.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

