module.exports = async function (context, req) {
  const date = "2024-02-04T02:19:06.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

