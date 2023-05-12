module.exports = async function (context, req) {
  const date = "2023-05-12T03:09:37.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

