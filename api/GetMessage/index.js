module.exports = async function (context, req) {
  const date = "2023-10-31T05:08:34.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

