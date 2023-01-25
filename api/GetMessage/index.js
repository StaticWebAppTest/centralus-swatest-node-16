module.exports = async function (context, req) {
  const date = "2023-01-25T12:19:44.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

