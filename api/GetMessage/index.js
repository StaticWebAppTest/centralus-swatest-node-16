module.exports = async function (context, req) {
  const date = "2024-02-28T02:15:50.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

