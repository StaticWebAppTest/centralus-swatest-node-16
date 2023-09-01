module.exports = async function (context, req) {
  const date = "2023-09-01T20:08:41.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

