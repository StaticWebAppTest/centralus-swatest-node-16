module.exports = async function (context, req) {
  const date = "2024-02-03T15:08:04.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

