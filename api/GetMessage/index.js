module.exports = async function (context, req) {
  const date = "2023-08-18T02:13:16.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

