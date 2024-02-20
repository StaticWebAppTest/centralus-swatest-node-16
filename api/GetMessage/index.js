module.exports = async function (context, req) {
  const date = "2024-02-20T05:09:32.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

