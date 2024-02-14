module.exports = async function (context, req) {
  const date = "2024-02-14T05:09:41.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

