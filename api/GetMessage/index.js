module.exports = async function (context, req) {
  const date = "2023-04-18T07:08:24.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

